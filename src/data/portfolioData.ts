import { Project, ExperienceItem, SkillCategory, Certification, Education, Achievement } from '../types';

export const personalInfo = {
  name: "Akashdeep Sharma",
  roleTitle: "Full-Stack & Agentic AI Engineer",
  fullTitle: "Business Technology Solutions | Full Stack Developer | Agentic AI & Chatbots | RAG & Vector Embeddings",
  pitch: "Engineering production AI agents, intelligent RAG pipelines, and full-stack web applications for enterprise clients.",
  typingRoles: [
    "Agentic AI Chatbots",
    "Production RAG Pipelines",
    "Full-Stack Web Apps",
    "Enterprise AI Solutions",
    "Cost-Optimized LLMs"
  ],
  location: "Chandigarh, India",
  email: "abhi84205@gmail.com",
  phone: "+91 9050022397",
  linkedin: "https://www.linkedin.com/in/akashdeep-sharma-a48623246",
  github: "https://github.com/deepakash7654321-oss",
  resumePath: "/resume.pdf",
  resumeDriveUrl: "https://drive.google.com/file/d/1y8CPXYDCjoLX-P28W5swF_-QZMVRXskw/view?usp=sharing",
  currentRole: "Software Engineer at SearchUnify (Grazitti Interactive)"
};

export const aboutData = {
  summary: "Computer Science graduate and Software Engineer with hands-on experience collaborating with enterprise client teams to translate business problems into working technology solutions. Currently at SearchUnify (a Grazitti Interactive company), designing and deploying agentic AI chatbots for enterprise clients using Python, React.js, Node.js, RAG, and vector embeddings, including LLM cost-optimization via model switching and prompt caching. Comfortable across the full stack with Node.js, Python, MongoDB, SQL, React.js, and Angular, with working knowledge of Docker, DevOps, and MLOps.",
  pillars: [
    {
      title: "Agentic AI & Chatbots",
      desc: "Enterprise multi-agent systems with dynamic reasoning, multimodality, and live CRM integrations."
    },
    {
      title: "RAG & Vector Embeddings",
      desc: "Production retrieval pipelines using FAISS, HuggingFace embeddings, and verifiable source citations."
    },
    {
      title: "Full-Stack Development",
      desc: "Scalable modern web applications and responsive analytics dashboards across React, Node, and Python."
    },
    {
      title: "LLM Ops & Cost Optimization",
      desc: "Intelligent model switching and prompt caching to maximize throughput while minimizing inference costs."
    }
  ]
};

export const experienceData: ExperienceItem[] = [
  {
    id: "searchunify",
    role: "Software Engineer",
    company: "SearchUnify",
    companyNote: "A Grazitti Interactive company",
    period: "Nov 2025 - Present",
    location: "Chandigarh, India",
    bullets: [
      "Collaborate with internal and client teams to shape business problems into high-quality chatbot solutions using Python, Node.js, React.js, RAG, and vector embeddings.",
      "Designed and deployed agentic AI chatbots for multiple enterprise clients, implementing dynamic LLM reasoning, multimodality, and CRM-integrated case management.",
      "Reduced LLM operational costs across chatbot products through model switching and prompt caching."
    ],
    skills: ["Python", "React.js", "Node.js", "RAG", "Vector Embeddings", "Prompt Caching", "Agentic AI", "Cost Optimization"]
  },
  {
    id: "grazitti",
    role: "Software Engineer Intern",
    company: "Grazitti Interactive",
    period: "Sept 2025 - Mar 2026",
    location: "Chandigarh, India",
    bullets: [
      "Contributed as a full-stack developer, working with Python, React.js, Node.js, and related web technologies."
    ],
    skills: ["Python", "React.js", "Node.js", "JavaScript", "Full Stack Development"]
  }
];

export const projectsData: Project[] = [
  {
    id: "pdf-qa-rag",
    title: "PDF Q&A Chatbot — RAG Assistant",
    subtitle: "Production-ready Document Intelligence Pipeline",
    category: "RAG / AI",
    featured: true,
    liveUrl: "https://pdf-app-chatbot-dtdealmjfkwgd43wmbwn7c.streamlit.app",
    tags: ["Python", "LangChain", "RAG", "FAISS", "Streamlit", "Groq LLM"],
    description: [
      "Built and deployed a production-ready RAG web app: upload any PDF, ask natural-language questions, and get answers grounded in the document with verifiable page citations.",
      "Designed a 6-step RAG pipeline (load, split, embed, store, retrieve, generate) using LangChain, local HuggingFace embeddings, FAISS vector search, and Groq's Llama models for fast, zero-cost inference.",
      "Added smart caching (MD5-hashed uploads) to avoid re-embedding the same PDF."
    ]
  },
  {
    id: "school-erp-lms",
    title: "School ERP & LMS with AI Assistant",
    subtitle: "Complete Educational Management System with AI Chatbot",
    category: "Full Stack & AI",
    featured: true,
    liveUrl: "https://school-er-pgurukul.vercel.app/login",
    tags: ["Full Stack", "React", "AI Assistant", "Role-based Auth", "Vercel"],
    description: [
      "Designed and built an end-to-end School ERP & LMS covering student records, attendance, report cards, and PTM scheduling, with role-based admin login.",
      "Integrated an AI chatbot assistant for parents that answers natural-language queries about a child's marks, attendance, and pass/fail status, and shares PTM schedule details.",
      "Built and deployed the full system independently, hosted live on Vercel."
    ]
  },
  {
    id: "llm-cost-optimization",
    title: "LLM Cost Optimization (Agentic AI Chatbots)",
    subtitle: "Enterprise Dynamic Model Routing & Prompt Caching",
    category: "LLM Ops",
    featured: false,
    tags: ["LLM Ops", "Cost Optimization", "Prompt Engineering", "Model Switching", "Prompt Caching"],
    description: [
      "Analyzed rising LLM API costs across enterprise chatbot deployments and designed a technical solution.",
      "Implemented dynamic model switching (routing simple queries to cheaper models, complex ones to larger models) and prompt caching to cut redundant token usage without hurting response quality."
    ]
  },
  {
    id: "suse-chatbot",
    title: "SUSE Chatbot (Agentic AI)",
    subtitle: "Enterprise Technical Assistant with Dynamic Reasoning & Analytics",
    category: "Enterprise AI",
    featured: false,
    tags: ["Agentic AI", "React", "TypeScript", "Python", "Admin Dashboards", "Dynamic Reasoning"],
    description: [
      "Built the frontend in React.js and backend in TypeScript/Python for an enterprise client.",
      "Implemented dynamic 'thinking' LLM reasoning for multi-step queries and product-version mapping so responses stay accurate to the user's SUSE product version.",
      "Built the admin dashboard from scratch with usage analytics graphs and live session tracking."
    ]
  },
  {
    id: "enterprise-chatbots",
    title: "Enterprise Chatbots — Cornerstone (CSOD), Wellsky & Hunter Industries",
    subtitle: "Multimodal AI & Salesforce Integrated Chatbot Suite",
    category: "Enterprise AI",
    featured: false,
    tags: ["Agentic AI", "Salesforce Integration", "Multimodal AI", "React", "TypeScript", "Python"],
    description: [
      "Worked directly with three enterprise clients to translate business requirements into technical designs; built frontends in React.js and backends in TypeScript/Python.",
      "Implemented multimodality and a search-chat feature (CSOD) enabling users to search their own chat history.",
      "Built Salesforce case-creation and case-fetch features (Wellsky & Hunter) so the chatbot auto-populates and retrieves case details during conversations.",
      "Designed structured admin dashboards with usage analytics graphs and live session tracking, applied consistently across all three clients."
    ]
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Full Stack Development",
    iconName: "Code2",
    skills: [
      { name: "Python", proficiency: 90 },
      { name: "React.js", proficiency: 88 },
      { name: "Node.js", proficiency: 85 },
      { name: "JavaScript", proficiency: 90 },
      { name: "SQL", proficiency: 85 },
      { name: "MongoDB", proficiency: 80 },
      { name: "Angular", proficiency: 75 }
    ],
    allTags: ["Node.js", "Python", "React.js", "Angular", "MongoDB", "SQL", "JavaScript"]
  },
  {
    title: "Agentic AI & Chatbots",
    iconName: "BrainCircuit",
    skills: [
      { name: "RAG", proficiency: 94 },
      { name: "Agentic AI", proficiency: 92 },
      { name: "LLMs", proficiency: 92 },
      { name: "Vector Embeddings", proficiency: 90 },
      { name: "Prompt Engineering", proficiency: 90 },
      { name: "Prompt Caching", proficiency: 88 },
      { name: "Dynamic LLM Reasoning", proficiency: 88 },
      { name: "LLM Cost Optimization", proficiency: 86 },
      { name: "Multimodal AI", proficiency: 84 }
    ],
    allTags: ["Agentic AI", "RAG", "Vector Embeddings", "LLMs", "Prompt Engineering", "Prompt Caching", "LLM Cost Optimization", "Multimodal AI", "Dynamic LLM Reasoning"]
  },
  {
    title: "DevOps & MLOps",
    iconName: "Cpu",
    skills: [
      { name: "Docker", proficiency: 80 },
      { name: "DevOps", proficiency: 78 },
      { name: "MLOps", proficiency: 76 }
    ],
    allTags: ["Docker", "DevOps", "MLOps"]
  },
  {
    title: "Data & Reporting",
    iconName: "BarChart3",
    skills: [
      { name: "SQL Queries", proficiency: 88 },
      { name: "Data Cleaning & Validation", proficiency: 85 },
      { name: "KPI Reporting", proficiency: 82 },
      { name: "Data Modeling", proficiency: 82 },
      { name: "ETL Concepts", proficiency: 80 }
    ],
    allTags: ["Data Cleaning & Validation", "KPI Reporting", "ETL Concepts", "SQL Queries", "Data Modeling"]
  }
];

export const educationData: Education = {
  degree: "B.Tech — Computer Science",
  institution: "Chandigarh Group of Colleges, Landran",
  period: "2021 - 2025",
  score: "79.4 / 100",
  location: "Mohali / Chandigarh, India"
};

export const certificationsData: Certification[] = [
  {
    title: "Data Analyst with Gen AI Certification",
    issuer: "Adda247",
    year: "2025",
    skills: ["SQL", "Power BI", "Tableau", "Excel", "Gen AI"]
  },
  {
    title: "AWS Certified Cloud Practitioner: Cloud Mastery",
    issuer: "Udemy / YouAccel Training",
    skills: ["AWS", "Cloud Architecture", "Security", "DevOps"]
  },
  {
    title: "React Programming",
    issuer: "Solitaire Infosys",
    year: "2023",
    skills: ["React.js", "Component Architecture", "State Management", "Hooks"]
  }
];

export const achievementsData: Achievement[] = [
  {
    title: "Star Performer of the Month",
    description: "Awarded at SearchUnify for outstanding contributions to enterprise chatbot engineering and client delivery.",
    badge: "Award & Recognition"
  },
  {
    title: "Best Coordinator & GD Competition Winner",
    description: "Recognized as Best Coordinator and won 1st place in the college-level Group Discussion (GD) competition.",
    badge: "Leadership & Communication"
  },
  {
    title: "IEEE Club Event Coordinator (3 Years)",
    description: "Successfully organized and coordinated technical events for 3 consecutive years, managing 100+ attendees per event.",
    badge: "Community & Leadership"
  }
];
