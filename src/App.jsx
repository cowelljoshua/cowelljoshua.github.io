import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

/**
 * Main App Component
 *
 * Portfolio website for a Mechanical Engineer
 * Multi-page application with React Router
 *
 * Features:
 * - Multiple pages with client-side routing
 * - Animated hero with gradient orbs
 * - Timeline-based experience section
 * - Project gallery with modal details
 * - Contact form with validation
 * - Fully responsive design
 */
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
