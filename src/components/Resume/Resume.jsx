import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__container">
        {/* Download Button */}
        <div className="resume__download-section">
          <a
            href="/resume/Josh_Cowell's_Resume.pdf"
            download
            className="resume__download-btn"
          >
            <svg
              className="resume__download-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF Resume
          </a>
        </div>

        {/* Header */}
        <div className="resume__header">
          <h1 className="resume__name">Joshua Cowell</h1>
          <div className="resume__contact">
            <span>Lynchburg, VA</span>
            <span>|</span>
            <span>joshuacowell2005@gmail.com</span>
            <span>|</span>
            <span>cowelljoshua.github.io</span>
          </div>
        </div>

        {/* Education */}
        <section className="resume__section">
          <h2 className="resume__section-title">EDUCATION</h2>
          <div className="resume__education-item">
            <div className="resume__item-header">
              <h3 className="resume__item-title">
                Bachelor of Science in Mechanical Engineering
              </h3>
              <span className="resume__item-date">
                Expected Graduation: May 2027
              </span>
            </div>
            <p className="resume__item-subtitle">
              Liberty University, Lynchburg, VA
            </p>
            <p className="resume__gpa">GPA: 3.82</p>
            <p className="resume__coursework">
              <strong>Relevant Coursework:</strong> Fluid Dynamics, Heat Transfer, Thermodynamics I &amp; II, Differential Equations, Dynamics, Materials Engineering, Statics, Calculus I-III
            </p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="resume__section">
          <h2 className="resume__section-title">PROFESSIONAL EXPERIENCE</h2>

          <div className="resume__experience-item">
            <div className="resume__item-header">
              <h3 className="resume__item-title">
                Thermal Hydraulics Engineering Intern
              </h3>
              <span className="resume__item-date">May 2025 - Dec 2025</span>
            </div>
            <p className="resume__company">Framatome Nuclear</p>
            <ul className="resume__bullets">
              <li>
                Developed a predictive wear model in Python for safety-critical
                reactor components, achieving 75% improvement in accuracy over
                legacy methods.
              </li>
              <li>
                Engineered a Python algorithm processing 6-dimensional datasets to
                calculate safe operating limits, reducing analysis time from
                800+ hours to minutes.
              </li>
              <li>
                Performed system-level thermal-hydraulic and flow-induced
                vibration (FIV) analysis to support component qualification.
              </li>
              <li>
                Authored technical documentation and presented findings to
                engineering leadership; awarded $2,500 for presentation
                excellence.
              </li>
            </ul>
          </div>

          <div className="resume__experience-item">
            <div className="resume__item-header">
              <h3 className="resume__item-title">Chief Systems Engineer</h3>
              <span className="resume__item-date">June 2025 - Present</span>
            </div>
            <p className="resume__company">
              Liberty Rocketry (9th of 156 international teams, 2024)
            </p>
            <ul className="resume__bullets">
              <li>
                Lead a cross-functional team of 60+ members in the design,
                integration, and verification of high-powered rocket systems.
              </li>
              <li>
                Direct systems engineering decisions across propulsion,
                avionics, recovery, and aerodynamics subsystems.
              </li>
              <li>
                Manage requirements definition, interface control, and
                configuration management throughout the development lifecycle.
              </li>
              <li>
                Oversee a $16,000+ project budget, vendor coordination, and
                schedule milestones for competition campaigns.
              </li>
              <li>
                Perform verification and validation (V&amp;V) using SolidWorks,
                ANSYS, and MATLAB for subsystem models.
              </li>
            </ul>
          </div>

          <div className="resume__experience-item">
            <div className="resume__item-header">
              <h3 className="resume__item-title">
                Lead Undergraduate Research Assistant
              </h3>
              <span className="resume__item-date">Sep 2024 - Present</span>
            </div>
            <p className="resume__company">Liberty University</p>
            <ul className="resume__bullets">
              <li>
                Lead a team of 5 researchers conducting split-Hopkinson pressure
                bar (SHPB) testing for dynamic material characterization.
              </li>
              <li>
                Design test procedures and fixtures for high-strain-rate
                experiments; analyze results using electron microscopy and
                high-speed imaging.
              </li>
            </ul>
          </div>

          <div className="resume__experience-item">
            <div className="resume__item-header">
              <h3 className="resume__item-title">Senior Structural Engineer</h3>
              <span className="resume__item-date">Sep 2023 - June 2025</span>
            </div>
            <p className="resume__company">Liberty Rocketry</p>
            <ul className="resume__bullets">
              <li>
                Conducted finite element analysis (FEA) and computational fluid
                dynamics (CFD) simulations to verify structural integrity and
                aerodynamic performance.
              </li>
              <li>
                Authored technical reports documenting analysis methodology,
                results, and compliance with competition requirements.
              </li>
            </ul>
          </div>

          <div className="resume__experience-item">
            <div className="resume__item-header">
              <h3 className="resume__item-title">Camp Counselor</h3>
              <span className="resume__item-date">May 2024 - Aug 2024</span>
            </div>
            <p className="resume__company">Woodlands Camp, GA</p>
            <ul className="resume__bullets">
              <li>
                Provided 24-hour care during weeklong outdoor camping trips with
                12 children per week (ages 8 to 18), teaching survival skills,
                rock climbing, whitewater rafting, horseback riding, and cave
                camping.
              </li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="resume__section">
          <h2 className="resume__section-title">TECHNICAL SKILLS</h2>
          <ul className="resume__bullets">
            <li>
              <strong>Analysis &amp; CAE:</strong> ANSYS Fluent, ANSYS
              Mechanical, AFT Fathom, OpenRocket, RocketPy, FEA, CFD
            </li>
            <li>
              <strong>CAD &amp; Design:</strong> SolidWorks, Onshape, Technical
              Drawing, 3D Printing, CNC Machining
            </li>
            <li>
              <strong>Programming:</strong> Python (NumPy, Xarray, Pandas),
              MATLAB, Data Analysis, Automation
            </li>
            <li>
              <strong>Laboratory:</strong> Scanning Electron Microscope (SEM),
              High Speed Imaging, Material Testing
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section className="resume__section">
          <h2 className="resume__section-title">PROJECTS</h2>

          <div className="resume__project-item">
            <h3 className="resume__project-title">
              Predictive Wear Model – Nuclear Component Lifecycle Analysis
            </h3>
            <ul className="resume__bullets">
              <li>
                Developed a Python-based predictive model for safety-critical
                components, improving failure prediction accuracy by 75%
              </li>
            </ul>
          </div>

          <div className="resume__project-item">
            <h3 className="resume__project-title">
              Automated Operating Limit Analysis Tool
            </h3>
            <ul className="resume__bullets">
              <li>
                Engineered a Python automation framework reducing 800+ hours of
                manual engineering calculations to minutes
              </li>
            </ul>
          </div>

          <div className="resume__project-item">
            <h3 className="resume__project-title">
              Heat Exchanger Thermal-Hydraulic Optimization
            </h3>
            <ul className="resume__bullets">
              <li>
                Performed CFD analysis using ANSYS Fluent to optimize heat
                exchanger thermal performance and flow characteristics
              </li>
            </ul>
          </div>

          <div className="resume__project-item">
            <h3 className="resume__project-title">
              Unmanned Aerial Vehicle (UAV) Design &amp; Analysis
            </h3>
            <ul className="resume__bullets">
              <li>
                Designed a modular UAV airframe with rapid prototyping
                capability; validated aerodynamics through CFD simulation
              </li>
            </ul>
          </div>

          <div className="resume__project-item">
            <h3 className="resume__project-title">
              High Strain Rate Bone Research
            </h3>
            <ul className="resume__bullets">
              <li>
                Investigating the dynamic loading behavior of human bone using
                Split Hopkinson Pressure Bar for conference presentation
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
