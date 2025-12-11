import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ClientsSection from './components/ClientsSection';
import B2BProjectsSection from './components/B2BProjectsSection';
import B2CProjectsSection from './components/B2CProjectsSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const HomePage = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <ClientsSection />
      <B2BProjectsSection />
      <B2CProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
