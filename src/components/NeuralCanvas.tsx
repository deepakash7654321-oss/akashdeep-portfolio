import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
  pulseSpeed: number;
  layer: number;
}

interface SignalPacket {
  fromNode: Node;
  toNode: Node;
  progress: number;
  speed: number;
}

export const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    let nodes: Node[] = [];
    let packets: SignalPacket[] = [];
    const mouse = { x: -1000, y: -1000, isActive: false };

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      packets = [];

      // Determine node count based on screen area
      const area = width * height;
      const count = Math.min(Math.max(Math.floor(area / 11000), 45), 110);

      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 1.8 + 1.6;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,
          radius,
          baseRadius: radius,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          layer: Math.floor(Math.random() * 3) // 0, 1, 2 for layered depth
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
        mouse.isActive = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.isActive = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    handleResize();

    let lastPacketTime = 0;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Deep navy background with subtle radial glow
      const radialGradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        10,
        width * 0.5,
        height * 0.45,
        Math.max(width, height) * 0.8
      );
      radialGradient.addColorStop(0, 'rgba(12, 22, 50, 0.85)');
      radialGradient.addColorStop(0.5, 'rgba(8, 12, 28, 0.94)');
      radialGradient.addColorStop(1, 'rgba(5, 7, 15, 1)');

      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      // Max connection distance
      const maxDistance = width < 768 ? 95 : 140;
      const mouseMaxDistance = 160;

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Move nodes gently
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        // Bounce gently off boundaries
        if (nodeA.x < 10) { nodeA.x = 10; nodeA.vx *= -1; }
        if (nodeA.x > width - 10) { nodeA.x = width - 10; nodeA.vx *= -1; }
        if (nodeA.y < 10) { nodeA.y = 10; nodeA.vy *= -1; }
        if (nodeA.y > height - 10) { nodeA.y = height - 10; nodeA.vy *= -1; }

        // Pulse radius
        nodeA.pulsePhase += nodeA.pulseSpeed;
        nodeA.radius = nodeA.baseRadius + Math.sin(nodeA.pulsePhase) * 0.7;

        // Connect node to other nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.45;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Randomly create a packet along this connection
            if (time - lastPacketTime > 280 && Math.random() < 0.015 && packets.length < 14) {
              packets.push({
                fromNode: nodeA,
                toNode: nodeB,
                progress: 0,
                speed: 0.015 + Math.random() * 0.025
              });
              lastPacketTime = time;
            }
          }
        }

        // Connect to mouse if close
        if (mouse.isActive) {
          const mdx = nodeA.x - mouse.x;
          const mdy = nodeA.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouseMaxDistance) {
            const mAlpha = (1 - mdist / mouseMaxDistance) * 0.65;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${mAlpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();

            // Mild attraction towards mouse
            nodeA.x -= mdx * 0.0015;
            nodeA.y -= mdy * 0.0015;
          }
        }
      }

      // Draw and advance signal packets (data transmission pulses)
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const px = pkt.fromNode.x + (pkt.toNode.x - pkt.fromNode.x) * pkt.progress;
        const py = pkt.fromNode.y + (pkt.toNode.y - pkt.fromNode.y) * pkt.progress;

        // Glowing packet dot
        ctx.beginPath();
        ctx.arc(px, py, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = '#60a5fa';
        ctx.shadowColor = '#3b82f6';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const glowAlpha = 0.5 + Math.sin(node.pulsePhase) * 0.3;

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${glowAlpha * 0.22})`;
        ctx.fill();

        // Inner solid core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${glowAlpha})`;
        ctx.shadowColor = '#60a5fa';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw mouse cursor point if active
      if (mouse.isActive) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};
