# Akashdeep Sharma — AI & Full-Stack Engineer Portfolio

A production-ready personal portfolio website for an **AI / Full-Stack Engineer**, built with a dark navy/obsidian theme, interactive HTML5 `<canvas>` neural network visualization, and high-performance React 18 + TypeScript architecture.

Styled in the spirit of modern AI engineer portfolios (inspired by reference [jonatasdotdev.github.io/PortfolioAI](https://jonatasdotdev.github.io/PortfolioAI/)).

---

## 🚀 Live Demo & Links

- **CareerPilot AI — Agentic Job-Matching Assistant**: [Streamlit Live App](https://careerpilot-ai-45fn4ownegpbx5hgbzyber.streamlit.app/)
- **PDF Q&A Chatbot — RAG Assistant**: [Streamlit Live App](https://pdf-app-chatbot-dtdealmjfkwgd43wmbwn7c.streamlit.app)
- **School ERP & LMS with AI Assistant**: [Vercel Live App](https://school-er-pgurukul.vercel.app/login)

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS + PostCSS + Autoprefixer
- **Visuals**: Native HTML5 `<canvas>` neural network engine (JavaScript particle physics, dynamic edge connections, mouse proximity interaction, glowing signal packet transmission)
- **Icons**: [Lucide React](https://lucide.dev) (clean, minimal line icons — zero emoji icons)
- **Responsive Design**: Fully optimized across mobile, tablet, and desktop viewports

---

## 📂 Project Architecture

```text
portfolio/
├── public/
│   ├── favicon.svg             # Modern geometric AI favicon
│   └── resume.pdf              # Placeholder resume file (ready to replace)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Glassmorphic header with scroll-spy & resume CTA
│   │   ├── NeuralCanvas.tsx    # HTML5 Canvas animated neural graph with data pulses
│   │   ├── Hero.tsx            # Hero with name, title, pitch, and CTA buttons
│   │   ├── About.tsx           # Narrative summary & 4 engineering focus pillars
│   │   ├── Experience.tsx      # Interactive career timeline (SearchUnify & Grazitti)
│   │   ├── Projects.tsx        # Project showcase with live demo links & filter tabs
│   │   ├── Skills.tsx          # Animated proficiency progress bars & technology tags
│   │   ├── CertificationsEducation.tsx # B.Tech degree & certified credentials
│   │   ├── Achievements.tsx    # Star Performer, GD Winner & IEEE coordinator badges
│   │   ├── Contact.tsx         # Contact form UI + direct contact details
│   │   └── Footer.tsx          # Modern footer with social links & back-to-top
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth for all content & facts
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces for portfolio models
│   ├── App.tsx                 # Root application component
│   ├── index.css               # Tailwind directives & glow utilities
│   └── main.tsx                # React 18 bootstrap
├── index.html                  # SEO meta tags, title, Google Fonts
├── tailwind.config.js          # Dark theme color palette & glowing animations
├── tsconfig.json               # TypeScript configuration
└── package.json
```

---

## 💻 Local Development

### 1. Prerequisites
Ensure you have **Node.js 18+** installed on your machine.

### 2. Clone and Install Dependencies
```bash
# Navigate to the repository
cd portfolio

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to view the live site.

### 4. Build for Production
```bash
npm run build
```
This performs strict TypeScript verification (`tsc -b`) and bundles optimized static assets into the `dist/` folder.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Free Deployment Guide

### Option 1: Deploy on Vercel (Recommended)
1. Push this repository to **GitHub**.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import your portfolio repository.
4. Framework Preset will auto-detect as **Vite**.
5. Keep default settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **"Deploy"**. Your site will be live on a fast, global CDN with free SSL in under a minute!

*(Alternative via CLI)*:
```bash
npx vercel
```

### Option 2: Deploy on Netlify
1. Go to [netlify.com](https://www.netlify.com).
2. Connect your GitHub repository.
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **"Deploy site"**.

*(Alternative drag-and-drop)*:
Run `npm run build` locally, then drag the generated `dist` folder into the Netlify drop zone.

---

## ⚙️ Customization & Assumptions

### 1. Resume File
- **Current State**: A placeholder `resume.pdf` is located at `public/resume.pdf`.
- **How to update**: Simply overwrite `public/resume.pdf` with your real resume PDF file. The navbar and hero download buttons will immediately serve your actual resume.

### 2. LinkedIn Profile
- **Current State**: Uses placeholder URL `https://linkedin.com/in/akashdeep-sharma`.
- **How to update**: Open `src/data/portfolioData.ts` and update the `linkedin` field:
  ```typescript
  export const personalInfo = {
    // ...
    linkedin: "https://www.linkedin.com/in/your-actual-profile-slug",
  };
  ```

### 3. Contact Form Backend Integration
- **Current State**: Built as an interactive frontend form with immediate visual feedback, simulated sending delay, and error-free state management.
- **How to connect a backend**:
  - **Supabase**: Install `@supabase/supabase-js`, create a `messages` table, and call `supabase.from('messages').insert([formData])` inside `handleSubmit` in [src/components/Contact.tsx](file:///c:/Users/dell/Desktop/portfolio/src/components/Contact.tsx).
  - **Formspree / EmailJS / Web3Forms**: Simply replace `handleSubmit` with a `fetch()` call to your Formspree endpoint.

---

## 📄 License
MIT License &copy; 2026 Akashdeep Sharma
