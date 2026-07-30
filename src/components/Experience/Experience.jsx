import Section from "../Section";
import "./Experience.css";

/**
 * Experience Section Component
 * Timeline-based professional history
 */
const Experience = () => {
  const experiences = [
    {
      company: "Central Intelligence Agency (CIA)",
      role: "Advanced Weapons Systems Analyst",
      date: "May 2026 - Present",
      description: [
        "Conduct testing of warhead systems and analyze results to calibrate simulation models",
        "Develop a Python-based geospatial analysis tool for operational planning, leveraging Claude Mythos to refine the program and meet team requirements",
        "Conduct technical assessments of advanced unmanned systems and collaborate with multidisciplinary engineering teams to evaluate classified capabilities, translating findings into actionable intelligence for senior leadership and policymakers",
        "Brief high-level Agency officials and write concise analytic products that communicate complex technical data in clear, decision-ready formats",
      ],
      technologies: [
        "Python",
        "Geospatial Analysis",
        "Model Calibration",
        "Technical Intelligence",
      ],
    },
    {
      company: "Framatome Nuclear",
      role: "Thermal Hydraulics Engineering Intern",
      date: "May 2025 - Dec 2025",
      description: [
        "Developed a predictive wear model in Python for safety-critical reactor components, achieving 75% improvement in accuracy over legacy methods",
        "Engineered a Python algorithm processing 6-dimensional datasets to calculate safe operating limits, reducing analysis time from 1000+ hours to minutes",
        "Performed system-level thermal-hydraulic and flow-induced vibration (FIV) analysis to support component qualification",
        "Authored technical documentation and presented findings to engineering leadership; awarded $2,500 for presentation excellence",
      ],
      technologies: [
        "Python",
        "AFT Fathom",
        "FIV Analysis",
        "Thermal Hydraulics",
      ],
    },
    {
      company: "Liberty Rocketry (Ranked 18th of 141 international teams at 2026 IREC)",
      website: "https://libertyrocketry.org",
      role: "Chief Systems Engineer and Team Lead",
      date: "June 2025 - Aug 2026",
      description: [
        "Led the design, testing, and analysis of high-powered rocket systems as member captain",
        "Oversaw engineering decisions across propulsion, avionics, recovery, and aerodynamics subsystems",
        "Facilitated communication among internal teams, external vendors, and university faculty to improve project execution",
        "Demonstrated advanced knowledge of SolidWorks, ANSYS, MATLAB, OpenRocket, and RocketPy to validate team members' models, simulations, and design work",
      ],
      technologies: ["SolidWorks", "ANSYS", "MATLAB", "OpenRocket", "RocketPy", "Systems Engineering"],
      downloadLink: "/omega_technical_report.pdf",
      downloadLabel: "Download 2026 Technical Report",
    },
    {
      company: "Liberty University",
      role: "Lead Undergraduate Research Assistant",
      date: "Sep 2024 - Present",
      description: [
        "Lead a team of 5 researchers conducting split-Hopkinson pressure bar (SHPB) testing for dynamic material characterization",
        "Design test procedures and fixtures for high-strain-rate experiments; analyze results using electron microscopy and high-speed imaging",
      ],
      technologies: ["Materials Testing", "SEM", "Experimental Design"],
    },
    {
      company: "Liberty Rocketry",
      website: "https://libertyrocketry.org",
      role: "Senior Structural Engineer",
      date: "Sep 2023 - June 2025",
      description: [
        "Conducted finite element analysis (FEA) and computational fluid dynamics (CFD) simulations to verify structural integrity and aerodynamic performance",
        "Authored technical reports documenting analysis methodology, results, and compliance with competition requirements",
      ],
      technologies: [
        "ANSYS Fluent",
        "ANSYS Mechanical",
        "RocketPy",
        "OpenRocket",
        "Onshape",
      ],
    },
  ];

  return (
    <Section id="experience" className="experience">
      <div className="experience__header">
        <h2 className="experience__title">Experience</h2>
        <p className="experience__subtitle">
          Building systems for nuclear, aerospace, and defense applications.
        </p>
      </div>

      <div className="experience__timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience__item">
            <div className="experience__dot"></div>
            <div className="experience__card">
              <div className="experience__card-header">
                <div>
                  <h3 className="experience__role">{exp.role}</h3>
                  {exp.website ? (
                    <a 
                      href={exp.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="experience__company experience__company--link"
                    >
                      {exp.company}
                      <svg 
                        className="experience__company-icon" 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  ) : (
                    <p className="experience__company">{exp.company}</p>
                  )}
                </div>
                <span className="experience__date">{exp.date}</span>
              </div>
              <ul className="experience__description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="experience__tech">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="experience__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {exp.downloadLink && (
                <a
                  href={exp.downloadLink}
                  download
                  className="experience__download-btn"
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
                  {exp.downloadLabel}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
