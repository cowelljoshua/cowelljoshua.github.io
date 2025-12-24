import Section from "../Section";
import "./Experience.css";

/**
 * Experience Section Component
 * Timeline-based professional history
 */
const Experience = () => {
  const experiences = [
    {
      company: "Framatome Nuclear",
      role: "Thermal Hydraulics Engineering Intern",
      date: "May 2025 — Present",
      description: [
        "Developed a predictive wear mathematical model in Python for critical reactor components, proving to be over 75% more accurate compared to the previous model",
        "Programmed a Python algorithm using a 6-dimensional Xarray to calculate safe reactor operating conditions, reducing computation time from >800 hours to minutes compared to prior methods",
        "Performed system-level flow and vibration analysis using AFT Fathom and custom FIV modeling software",
        "Awarded $2,500 for final summer presentation and hired on part-time during the school year",
      ],
      technologies: [
        "Python",
        "AFT Fathom",
        "FIV Analysis",
        "Thermal Hydraulics",
      ],
    },
    {
      company: "Liberty Rocketry (9th/156 international teams in 2024)",
      website: "https://libertyrocketry.org",
      role: "Chief Systems Engineer",
      date: "June 2025 — Present",
      description: [
        "Led as member captain in the design, testing, and analysis of a high-powered rocket",
        "Oversaw all engineering decisions across propulsion, avionics, recovery, and aerodynamics subsystems",
        "Facilitated communication between internal teams, external vendors, and university faculty to optimize project efficiency",
        "Displayed advanced proficiency in engineering software (e.g., SolidWorks, ANSYS, MATLAB) to verify the accuracy and feasibility of all subsystem models and simulations",
      ],
      technologies: ["SolidWorks", "ANSYS", "MATLAB", "Systems Engineering"],
    },
    {
      company: "Liberty University",
      role: "Lead Undergraduate Research Assistant",
      date: "Sep 2024 — Present",
      description: [
        "Led a team of 5 undergraduate students to perform split-Hopkinson pressure bar (SHPB) test, including sample preparation, high-speed imaging, electron microscopy",
        "Assisted in the design and manufacturing of custom SHPB systems to fit material testing needs",
      ],
      technologies: ["Materials Testing", "SEM", "Experimental Design"],
    },
    {
      company: "Liberty Rocketry",
      website: "https://libertyrocketry.org",
      role: "Senior Structural Engineer",
      date: "Sep 2023 — June 2025",
      description: [
        "Utilized ANSYS Fluent & Mechanical, RocketPy, OpenRocket, and Onshape for simulations, FEA, and computational modeling, ensuring compliance with competition standards",
        "Delivered reports to guarantee the rocket's compliance with competition standards and flight requirements",
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
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
