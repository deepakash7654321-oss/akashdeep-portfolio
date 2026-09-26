import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, Copy, Check, MessageSquare, ExternalLink, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated submission delay (ready for backend / Supabase hookup)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#060810]/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>07 // Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Whether you want to discuss agentic AI systems, enterprise chatbots, or engineering collaborations, my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f1d] border border-slate-800/80 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-sm text-slate-400">
                  Feel free to reach out directly via email, phone, or LinkedIn.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Email row */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-blue-500/40 transition-colors group">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3.5 text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400">Email</div>
                      <div className="text-sm font-medium text-slate-200">{personalInfo.email}</div>
                    </div>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    title="Copy email to clipboard"
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone row */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-blue-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Phone</div>
                    <div className="text-sm font-medium text-slate-200">{personalInfo.phone}</div>
                  </div>
                </a>

                {/* Location row */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/70">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Location</div>
                    <div className="text-sm font-medium text-slate-200">{personalInfo.location}</div>
                  </div>
                </div>

                {/* LinkedIn row */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-blue-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-600/20 group-hover:scale-105 transition-transform">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400">LinkedIn Profile</div>
                      <div className="text-sm font-medium text-slate-200">Connect on LinkedIn</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* GitHub row */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-blue-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60 group-hover:scale-105 transition-transform">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400">GitHub Profile</div>
                      <div className="text-sm font-medium text-slate-200">github.com/deepakash7654321-oss</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/50 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0 animate-ping" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  Currently open to discussing innovative agentic AI architectures, RAG engineering, and full-stack software solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f1d] border border-slate-800/80 shadow-xl relative">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                Send a Message
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Fill out the form below. The interface is configured and ready for backend integration (e.g., Supabase / Formspree).
              </p>

              {isSent ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center animate-in fade-in zoom-in-95">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-1">Message Received!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Enterprise Chatbot Inquiry / Collaboration"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
