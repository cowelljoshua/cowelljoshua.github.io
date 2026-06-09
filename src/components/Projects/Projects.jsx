import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Section from "../Section";
import "./Projects.css";

/**
 * Projects Section Component
 * Visual project gallery with modal details
 */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

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
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Prevent body scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      
      // Reset modal scroll to top when it opens
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
      }
    } else {
      // Restore scroll position when closing
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }
    
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "Predictive Wear Model",
      description:
        "Developed a Python-based predictive wear model improving component-life accuracy by over 75%.",
      fullDescription:
        "Engineered a sophisticated Python-based predictive wear model for critical reactor components that addresses limitations in legacy analytical methods. Using advanced numerical techniques and statistical validation against historical performance data, the model achieves over 75% improvement in accuracy compared to previous approaches. The work involved developing multi-parameter algorithms that account for complex thermo-mechanical interactions, material fatigue mechanisms, and operational stress cycles. The resulting tool enables nuclear operators to make data-driven decisions regarding maintenance schedules, component replacement strategies, and safe operating conditions optimization, directly supporting safer and more efficient reactor operations.",
      gradient: "robotics",
      tags: ["Python", "Predictive Modeling", "Nuclear Engineering", "Data Analysis"],
      details: [
        "Improved component-life accuracy by over 75% through advanced algorithm development",
        "Enabled predictive maintenance strategies and safe operating condition optimization",
      ],
      icon: "layers",
      coverImage: "/nuclear_reactor1.webp",
      coverZoom: 1.2,
      coverScaleY: 1,
    },
    {
      id: 2,
      title: "Reactor Operating Limit Algorithm",
      description:
        "Engineered a Python algorithm to calculate safe reactor operating conditions, reducing computation time from 1000+ manual calculation hours to minutes.",
      fullDescription:
        "Developed a comprehensive automation framework that eliminates manual engineering calculations and documentation workflows. The system leverages Python with advanced data structures and multidimensional array processing to handle complex, iterative calculations that previously required extensive spreadsheet work and manual verification. Implemented data versioning and configuration management to ensure calculation traceability and reproducibility, critical for regulatory compliance in nuclear environments. Integrated automated report generation that produces professionally formatted technical documentation with embedded visualizations, analysis tables, and engineering conclusions. The system processes calculations that scale from thousands to millions of data points, enabling engineers to focus on interpretation and decision-making rather than tedious computational grunt work. This architecture significantly reduces human error, improves consistency across analyses, and accelerates the engineering review cycle from weeks to days.",
      gradient: "cfd",
      tags: ["Python", "Automation", "Data Analysis", "Engineering Documentation"],
      details: [
        "Automated workflow reducing 1000+ hours of manual calculations to minutes",
        "Generated professional technical reports with embedded analysis and visualizations",
        "Enabled analysis of millions of data points with consistent methodology",
      ],
      icon: "flow",
      coverImage: "/nuclear_reactor2.webp",
      coverZoom: 1.2,
      coverScaleY: 1,
    },
    {
      id: 3,
      title: "Heat Exchanger CFD Analysis",
      description:
        "Optimized heat exchanger design using advanced CFD simulations and thermal analysis techniques.",
      fullDescription:
        "Conducted detailed computational fluid dynamics simulations using ANSYS Fluent to analyze and optimize heat exchanger performance across multiple design configurations. The work involved comprehensive mesh generation and validation, establishing appropriate boundary conditions to represent realistic operating scenarios, and executing simulations across a range of flow rates and thermal conditions. Generated detailed contour plots revealing temperature distributions, velocity profiles, and turbulence characteristics throughout the heat exchanger geometry, enabling identification of performance bottlenecks and optimization opportunities. Produced streamline visualizations to trace fluid behavior and identify regions of flow separation, recirculation, or stagnation that could negatively impact heat transfer efficiency. Comparative analysis of multiple design iterations provided quantitative data on heat transfer coefficients, pressure drop, and overall thermal effectiveness. The simulation results informed redesign recommendations that improve both thermal performance and manufacturing feasibility, demonstrating the value of computational analysis in accelerating the design iteration cycle.",
      gradient: "thermal",
      tags: ["CFD", "ANSYS Fluent", "Heat Transfer", "Fluid Dynamics"],
      details: [
        "Executed multi-configuration CFD simulations across various operating conditions",
        "Generated comprehensive flow and thermal visualizations for engineering analysis",
        "Identified performance optimization opportunities through streamline and contour analysis",
        "Delivered quantitative data on heat transfer efficiency and pressure drop",
      ],
      icon: "flow",
      coverImage: "/cover_for_heat_exchanger.png",
      coverZoom: 1,
      coverScaleY: 1,
      videoUrl: "https://www.youtube.com/watch?v=cn7WdPEonhY&t=405s",
    },
    {
      id: 4,
      title: "Unmanned Aerial Vehicle (UAV)",
      description:
        "Engineered a modular UAV with 3D-printed components for rapid customization and precision payload delivery.",
      fullDescription:
        "Led the complete design and fabrication of a custom unmanned aerial vehicle platform, leveraging 3D-printing technology to enable rapid prototyping, field customization, and streamlined component replacement. The modular architecture allows quick reconfiguration of the airframe for different mission profiles without requiring extensive rework or external manufacturing delays. Conducted comprehensive ANSYS CFD analysis of the airframe design, optimizing body contours and control surface geometry to minimize drag while maintaining structural stability during flight. Validated aerodynamic performance through detailed flow simulations and pressure coefficient analysis to ensure predictable handling characteristics.",
      gradient: "aerospace",
      tags: ["CAD", "3D Printing", "ANSYS CFD", "Control Systems", "Payload Systems"],
      details: [
        "Designed modular airframe with 3D-printed components for rapid field customization and repairs",
        "Optimized aerodynamics through ANSYS CFD analysis across operational envelope",
        "Integrated and tested complete system across airframe, propulsion, and payload subsystems",
      ],
      icon: "rocket",
      coverImage: "/UAV_v1.JPG",
      coverZoom: 1,
      coverScaleY: 1,
    },
    {
      id: 5,
      title: "3D Printed Model Rocket",
      description:
        "Designed and manufactured a fully 3D printed rocket reaching Mach 0.5+ and 3,000 feet, featuring modular threaded assemblies and hybrid recovery system.",
      fullDescription:
        "Engineered a fully 3D printed model rocket optimized for an Estes E12-4 motor, achieving velocities exceeding Mach 0.5 and altitudes approaching 3,000 feet. The lower airframe was printed using PET-GF15 (glass-fiber reinforced PET) for superior mechanical strength and thermal resistance in the motor mount region where high thrust loads and localized heating occur. The upper airframe uses standard PETG for its toughness and impact resistance during recovery. Implemented fully 3D printed threaded interfaces throughout the design, enabling complete disassembly without adhesives for inspection, maintenance, and motor replacement. Developed a hybrid recovery system featuring a steel cable segment at the lower attachment point to isolate the elastic shock cord from ejection charge heat, with a 12-inch parachute for controlled descent. Conducted comprehensive CFD analysis using ANSYS Fluent to optimize the aerodynamic transition piece and minimize base drag, validating flow characteristics and pressure distributions across the airframe. Flight simulations in OpenRocket guided design decisions for stability margins, drag reduction, and recovery timing. The modular, adhesive-free design demonstrates advanced additive manufacturing techniques for functional aerospace applications at the hobby and educational level.",
      gradient: "thermal",
      tags: ["3D Printing", "Rocketry", "ANSYS CFD", "OpenRocket", "Materials Engineering"],
      details: [
        "Achieved Mach 0.5+ velocity and 3,000 ft altitude using hobby-grade E12-4 motor",
        "Designed modular threaded assemblies requiring no adhesives for full reusability",
        "Selected PET-GF15 for thermal resistance and PETG for impact tolerance in optimized locations",
        "Performed ANSYS CFD analysis to optimize aerodynamic surfaces and reduce base drag",
        "Engineered hybrid recovery system with steel cable thermal isolation and elastic shock absorption",
      ],
      icon: "rocket",
      coverImage: "/3d_printed_rocket.jpg",
      coverZoom: 1,
      coverScaleY: 1,
    },
    {
      id: 6,
      title: "High Strain Rate Response of Human Bone",
      description:
        "Research dynamic loading behavior of human proximal phalanx using Split Hopkinson Pressure Bar technology for conference presentation.",
      fullDescription:
        "My study investigates the high strain rate behavior of the human proximal phalanx (foot bone) using a Kolsky/Split Hopkinson Pressure Bar (SHPB) to capture its dynamic response under relevant loading. The experiments subject bone specimens to axial compression and tension to evaluate how strain rate influences strength, stiffness, and failure mechanisms. These loading modes simulate real-world impact scenarios such as jumping, running, or sudden foot strikes, where the bone experiences rapid load application. Imaging and microscopy will later assess microstructural damage and fracture morphology. This research aims to improve understanding of the dynamics behavior of bones and to inform the development of computational models, orthopedic materials, and protective footwear designs that mitigate impact-related injuries.",
      gradient: "flow",
      tags: ["Materials Testing", "SEM", "Experimental Design", "Biomechanics"],
      details: [
        "Conducting Split Hopkinson Pressure Bar experiments on human bone specimens",
        "Evaluating strain rate effects on bone strength, stiffness, and failure mechanisms",
        "Utilizing imaging and microscopy to analyze microstructural damage patterns",
        "Presenting research findings at conference in Summer 2026",
      ],
      icon: "flow",
      coverImage: "/shpb_project.jpg",
      coverZoom: 1,
      coverScaleY: 0.8,
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
        {/* <span className="projects__eyebrow">Projects</span> */}
        <h2 className="projects__title">Projects</h2>
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
              {project.coverImage ? (
                <img
                  src={project.coverImage}
                  alt={project.title}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    transform: `scale(${project.coverZoom || 1})`
                  }}
                />
              ) : (
                <>
                  <div
                    className={`project-card__gradient project-card__gradient--${project.gradient}`}
                  >
                    <span className="project-card__icon">
                      {getIcon(project.icon)}
                    </span>
                  </div>
                  <div className="project-card__overlay"></div>
                </>
              )}
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
              {project.id === 3 && (
                <a
                  href="/josh_cowell_heat_exchanger_paper.pdf"
                  download
                  className="project-card__download"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Paper
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Modal - rendered via portal to document.body */}
      {createPortal(
        <div
          className={`modal-overlay ${
            selectedProject ? "modal-overlay--open" : ""
          }`}
          onClick={() => setSelectedProject(null)}
        >
          {selectedProject && (
            <div 
              ref={modalRef}
              className="modal" 
              onClick={(e) => e.stopPropagation()}
            >
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
              {selectedProject.coverImage ? (
                <img
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  className="modal__image"
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover"
                  }}
                />
              ) : (
                <div
                  className={`modal__gradient project-card__gradient--${selectedProject.gradient}`}
                >
                  <span className="modal__icon">
                    {getIcon(selectedProject.icon)}
                  </span>
                </div>
              )}
              <div className="modal__overlay"></div>
            </div>

            <div className="modal__content">
              <h2 className="modal__title">{selectedProject.title}</h2>
              
              {selectedProject.videoUrl && (
                <a
                  href={selectedProject.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal__video-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ marginRight: '8px' }}
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Project Video
                </a>
              )}
              
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

              {selectedProject.id === 3 && (
                <a
                  href="/josh_cowell_heat_exchanger_paper.pdf"
                  download
                  className="modal__download-btn"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Research Paper
                </a>
              )}
            </div>
          </div>
        )}
      </div>,
        document.body
      )}
    </Section>
  );
};

export default Projects;
