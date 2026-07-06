import { 
  Palette, Server, Database, Code, 
  Cpu, Layers, Zap, GitBranch, 
  Cloud, Shield, Terminal, Briefcase, 
  Mail, Phone, MapPin, Github, 
  Linkedin, Instagram, Award, BookOpen,
  Sparkles, Brain, User
} from 'lucide-react'

export const personalInfo = {
  name: "Muhammad Azhan Baig",
  title: "Full-Stack Developer | MERN & App Development",
  tagline: "Available for MERN & App Development Roles",
  bio: [
    "Full-Stack Developer with 1.5+ years of production experience building scalable web and mobile applications using React, Next.js, TypeScript, Node.js, Express.js, NestJS, and MongoDB.",
    "Currently delivering RESTful APIs and AI-powered features integrated with LLM APIs (OpenRouter) as a Full-Stack MERN & App Development Intern at Zaitoon Ashraf IT Park.",
    "Skilled in modern JavaScript/TypeScript ecosystems, secure authentication systems (JWT, RBAC, Refresh Token Rotation), CI/CD, and cross-platform mobile development with React Native."
  ],
  cvUrl: "/cv.pdf", // Expected resume path
  email: "mazhanbaig44@gmail.com",
  phone: "+92 322 6045971",
  location: "Karachi, Pakistan",
  stats: [
    { icon: Briefcase, value: "1.5+ Years", label: "Production Exp." },
    { icon: Code, value: "4 Key", label: "Projects Delivered" },
    { icon: Award, value: "94%", label: "SSC Computer Distinction" }
  ],
  socials: [
    { icon: Github, href: "https://github.com/mazhanbaig", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mazhanbaig", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" } // Placeholder or personal Instagram
  ]
}

export const passions = [
  { icon: Code, title: "Full-Stack Engineering", desc: "Developing scalable server-side systems and highly interactive web/mobile client apps." },
  { icon: Brain, title: "AI & LLM Integration", desc: "Integrating advanced LLMs (OpenRouter API) and prompt engineering workflows into production apps." },
  { icon: Sparkles, title: "Authentication & Security", desc: "Implementing secure authentication pipelines, role-based access control, and token rotation." },
  { icon: User, title: "Responsive & Agile", desc: "Building mobile-first Tailwind-styled interfaces and collaborating in rapid Agile sprint cycles." }
]

export const skillCategories = [
  {
    title: "Frontend & Mobile",
    icon: Palette,
    description: "Building responsive web and cross-platform mobile UIs",
    skills: [
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "React Native", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "HTML5/CSS3", level: "Expert" }
    ]
  },
  {
    title: "Backend & API Design",
    icon: Server,
    description: "Architecting scalable servers and authentication pipelines",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Expert" },
      { name: "NestJS", level: "Advanced" },
      { name: "RESTful APIs", level: "Expert" },
      { name: "JWT Auth & RBAC", level: "Expert" },
      { name: "Middleware", level: "Expert" }
    ]
  },
  {
    title: "Database & DevOps",
    icon: Database,
    description: "Structuring datastores, CI/CD, and developer tools",
    skills: [
      { name: "MongoDB", level: "Expert" },
      { name: "Firebase (Realtime/Firestore)", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "Vercel CI/CD", level: "Expert" },
      { name: "Git/GitHub", level: "Expert" }
    ]
  }
]

export const coreCompetencies = [
  { name: "LLM API Integration", icon: Cpu, description: "Leveraging OpenRouter LLM APIs for AI-powered compliance and workflows" },
  { name: "Security Architecture", icon: Shield, description: "Implementing refresh token rotation and granular role-based authorization" },
  { name: "Performance Optimization", icon: Zap, description: "Optimizing schemas and API middleware for fast response rates" },
  { name: "Agile Development", icon: GitBranch, description: "Participating in sprint planning, code reviews, and Agile team delivery" },
  { name: "End-to-End Testing", icon: Shield, description: "Writing Playwright test suites validating platform actions" },
  { name: "NoSQL Modeling", icon: Layers, description: "Designing optimal data schemas using MongoDB Mongoose" },
  { name: "AI Workflow Design", icon: Terminal, description: "Structuring AI pipelines for document parsing and analysis" },
  { name: "Deployment Automations", icon: Cloud, description: "Configuring Vercel automated builds with zero-downtime releases" }
]

export const learningTechs = ["OpenRouter LLM Features", "RAG Fundamentals", "Docker Containers"]

export const experiences = [
  {
    title: "Full-Stack MERN & App Development Intern",
    type: "Zaitoon Ashraf IT Park, Karachi",
    period: "June 2026 - Present",
    location: "Karachi, Pakistan",
    achievements: [
      "Engineered and maintained full-stack web applications using MongoDB, Express.js, React.js, Next.js, and NestJS.",
      "Designed RESTful APIs with JWT authentication, refresh token rotation, and RBAC to secure data access and user management.",
      "Built responsive, mobile-first user interfaces with React.js, Next.js, React Native, and Tailwind CSS.",
      "Integrated OpenRouter LLM APIs to deliver AI-powered features across collaborative client projects.",
      "Collaborated with cross-functional teams in an Agile environment participating in code reviews, sprint planning, and feature estimation."
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Next.js", "NestJS", "React Native", "Tailwind CSS", "OpenRouter API"]
  },
  {
    title: "Apprentice Full-Stack Developer",
    type: "SMIT Modern Web & App Development Program",
    period: "February 2025 - February 2026",
    location: "Karachi, Pakistan",
    achievements: [
      "Developed production-grade full-stack applications under industry mentorship, building scalable solutions with MERN and TypeScript.",
      "Implemented secure authentication systems with JWT, refresh token rotation, and RBAC.",
      "Integrated real-time database synchronization features using Firebase and RESTful APIs.",
      "Built concurrent SaaS-level projects including the Z-State real-estate management platform from schema design to production deployment."
    ],
    technologies: ["MERN Stack", "TypeScript", "Tailwind CSS", "Firebase", "JWT", "RBAC", "Vercel"]
  }
]

export const certifications = [
  {
    name: "Full Stack Web Development & Mobile App Development",
    issuer: "Saylani Mass IT Training (SMIT)",
    period: "Feb 2025 - Feb 2026"
  },
  {
    name: "JavaScript Essentials",
    issuer: "Cisco Networking Academy",
    period: "Completed 2025"
  },
  {
    name: "CSS and HTML Essentials",
    issuer: "Cisco Networking Academy",
    period: "Completed 2025"
  }
]

export const projects = [
  {
    title: 'Z-State (Real Estate Management SaaS)',
    desc: 'Architected and deployed a production-grade real-estate SaaS platform managing property listings, client relations, and appointment scheduling with multi-tenant data isolation. Integrates Firebase real-time sync and a Playwright test suite.',
    tech: ['Next.js', 'Express.js', 'Firebase Admin SDK', 'JWT', 'RBAC', 'Tailwind', 'Vercel'],
    live: 'https://zstate.vercel.app',
    github: 'https://github.com/mazhanbaig/RSMS',
    featured: true
  },
  {
    title: 'SubGuard AI (AI-Powered Compliance)',
    desc: 'An AI-powered compliance platform using OpenRouter LLM APIs for document analysis, insurance validation, risk scoring, compliance tracking, and Cloudinary-driven document storage pipelines.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'OpenRouter', 'Cloudinary'],
    live: '#',
    github: 'https://github.com/mazhanbaig',
    featured: false
  },
  {
    title: 'RSMS Backend API',
    desc: 'A modular Express.js REST API with a middleware pipeline for authentication, input validation, error handling, and request logging. Secured endpoints using Firebase Admin SDK, JWT, and RBAC.',
    tech: ['Node.js', 'Express.js', 'Firebase Admin SDK', 'JWT', 'RBAC', 'REST APIs'],
    live: '#',
    github: 'https://github.com/mazhanbaig',
    featured: false
  },
  {
    title: 'SMIT 12-Hour Full-Stack Hackathon',
    desc: 'Designed, built, and deployed a functional full-stack MERN prototype within a 12-hour time constraint under pressure, delivering user authentication and dynamic CRUD operations.',
    tech: ['MERN Stack', 'TypeScript', 'Tailwind CSS', 'CRUD'],
    live: '#',
    github: 'https://github.com/mazhanbaig',
    featured: false
  }
]
