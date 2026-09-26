import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { CertificationsEducation } from './components/CertificationsEducation';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060810] text-slate-100 selection:bg-blue-600/30 selection:text-blue-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <CertificationsEducation />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
