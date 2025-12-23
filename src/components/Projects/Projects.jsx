import { useState, useEffect } from "react";
import Section from "../Section";
import "./Projects.css";

/**
 * Projects Section Component
 * Visual project gallery with modal details
 */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "Unmanned Aerial Vehicle (UAV)",
      description:
        "Engineered a custom UAV with 3D-printed parts for rapid customization and repairs.",
      fullDescription:
        "Designed and built a custom unmanned aerial vehicle utilizing additive manufacturing for quick field repairs and customization. Conducted aerodynamic analysis and validated control surface performance through CFD simulations.",
      gradient: "aerospace",
      tags: ["CAD", "3D Printing", "ANSYS CFD", "Control Systems"],
      details: [
        "Engineered custom UAV with 3D-printed parts to support customizability and quick repairs",
        "Conducted ANSYS CFD simulation to validate control surface performance",
        "Developed and programmed a payload-deployment system to accurately hit a 5-foot wide target",
      ],
      icon: "rocket",
    },
    {
      id: 2,
      title: "High-Powered Rocket",
      description:
        "Built a two-stage rocket that reached over 2,500 feet utilizing custom recovery system.",
      fullDescription:
        "Designed and constructed a competition-grade two-stage rocket for Liberty Rocketry. The rocket featured custom propulsion, recovery, and avionics systems. Led structural analysis and testing to ensure mission success.",
      gradient: "thermal",
      tags: ["Rocketry", "SolidWorks", "RocketPy", "Recovery Systems"],
      details: [
        "Built a two-stage rocket that reached over 2,500 feet",
        "Utilized custom recovery system designed by the team",
        "Performed structural analysis using ANSYS and flight simulations using RocketPy and OpenRocket",
        "Led integration testing and pre-flight validation procedures",
      ],
      icon: "rocket",
    },
  ];

  const getIcon = (iconName) => {
    const icons = {
      rocket: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
      satellite: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M13 7L9 3 5 7l4 4" />
          <path d="M17 11l4 4-4 4-4-4" />
          <path d="m8 12 4 4 6-6-4-4-6 6" />
          <path d="m16 8 3-3" />
          <path d="M9 21a6 6 0 0 0-6-6" />
        </svg>
      ),
      gripper: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M12 2v8" />
          <path d="M4.93 10.93l2.83-2.83" />
          <path d="M2 18h2" />
          <path d="M20 18h2" />
          <path d="M19.07 10.93l-2.83-2.83" />
          <path d="M22 22 2 22" />
          <path d="M16 6H8a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4z" />
        </svg>
      ),
      flow: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M2 12h6" />
          <path d="M22 12h-6" />
          <path d="M12 2v6" />
          <path d="M12 22v-6" />
          <circle cx="12" cy="12" r="4" />
          <path d="M4.93 4.93l4.24 4.24" />
          <path d="M14.83 14.83l4.24 4.24" />
          <path d="M14.83 9.17l4.24-4.24" />
          <path d="M4.93 19.07l4.24-4.24" />
        </svg>
      ),
      layers: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      gimbal: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
        </svg>
      ),
    };
    return icons[iconName] || icons.rocket;
  };

  return (
    <Section id="projects" className="projects">
      <div className="projects__header">
        <span className="projects__eyebrow">Projects</span>
        <h2 className="projects__title">Engineering Excellence</h2>
        <p className="projects__subtitle">
          Select projects showcasing design innovation, analytical rigor, and
          real-world impact.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
          >
            <div className="project-card__visual">
              <div
                className={`project-card__gradient project-card__gradient--${project.gradient}`}
              >
                <span className="project-card__icon">
                  {getIcon(project.icon)}
                </span>
              </div>
              <div className="project-card__overlay"></div>
            </div>
            <div className="project-card__content">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-card__cta">
                <span>View Details</span>
                <svg
                  className="project-card__cta-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      <div
        className={`modal-overlay ${
          selectedProject ? "modal-overlay--open" : ""
        }`}
        onClick={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal__close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <svg
                className="modal__close-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="modal__visual">
              <div
                className={`modal__gradient project-card__gradient--${selectedProject.gradient}`}
              >
                <span className="modal__icon">
                  {getIcon(selectedProject.icon)}
                </span>
              </div>
              <div className="modal__overlay"></div>
            </div>

            <div className="modal__content">
              <h2 className="modal__title">{selectedProject.title}</h2>
              <p className="modal__description">
                {selectedProject.fullDescription}
              </p>

              <div className="modal__details">
                <h4 className="modal__detail-title">Key Achievements</h4>
                <ul className="modal__detail-list">
                  {selectedProject.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="modal__tags">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="modal__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Projects;
