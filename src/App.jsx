import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ClientsSection from "./components/ClientsSection";
import TabsContainer, { Tab } from "./components/TabsContainer";
import WebProjectSection from "./components/WebProjectsSection";
import Elearning from "./components/Elearning";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
// define tabs array that App can pass down
const tabs = [
  { label: "Web Projects", content: <WebProjectSection />, id: "web" },
  { label: "E-learning", content: <Elearning />, id: "eLearning" },
  { label: "Qualification", content: <EducationSection />, id: "education" },
  { label: "Organizations", content: <ClientsSection />, id: "organisation" },
  { label: "Experience", content: <ExperienceSection />, id: "experience" },
];

// optional handler invoked when active tab changes
function handleTabChange(index) {
  console.log("Active tab index:", index);
}
const HomePage = () => (
  <>
    <Header />
    <main>
      <AboutSection />
      
      <TabsContainer defaultIndex={0} onChange={handleTabChange}>
        <Tab label="Organizations"><ClientsSection /></Tab>
        <Tab label="Web Projects">
          <WebProjectSection />
        </Tab>
        <Tab label="E-learning">
          <Elearning />
        </Tab>
        
      <Tab label="Experience"><ExperienceSection /></Tab>
      <Tab label="Qualification"><EducationSection /></Tab>
      </TabsContainer>
   <SkillsSection />
      
      
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
