import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__container">
        <div className="resume__download-section">
          <a href="/resume/Joshua_Cowell_Resume.pdf" download="Joshua_Cowell_Resume.pdf" className="resume__download-btn">
            <svg className="resume__download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF Resume
          </a>
        </div>

        <header className="resume__header">
          <h1 className="resume__name">Joshua Cowell</h1>
          <p className="resume__clearance">Active Top Secret / SCI Clearance | Full-Scope Polygraph</p>
          <div className="resume__contact">
            <span>Lynchburg, VA</span><span>|</span>
            <a href="mailto:joshuacowell2005@gmail.com">joshuacowell2005@gmail.com</a><span>|</span>
            <a href="https://joshuacowell.com">joshuacowell.com</a>
          </div>
        </header>

        <section className="resume__section">
          <h2 className="resume__section-title">Education</h2>
          <div className="resume__education-item">
            <div className="resume__item-header">
              <h3 className="resume__item-title">Bachelor of Science in Mechanical Engineering</h3>
              <span className="resume__item-date">Expected May 2027</span>
            </div>
            <div className="resume__item-header">
              <p className="resume__item-subtitle">Liberty University, Lynchburg, VA</p>
              <span className="resume__item-date">GPA: 3.85</span>
            </div>
            <p className="resume__coursework"><strong>Selected Coursework:</strong> Dynamics, Fluid Dynamics, Heat Transfer, Materials Engineering, Differential Equations, Thermal-Fluids Laboratory</p>
            <p className="resume__activities"><strong>Founding Member:</strong> American Nuclear Society (ANS) student chapter (2025); AIAA student chapter (2026)</p>
            <p className="resume__activities"><strong>Leadership:</strong> Liberty Rocketry -- Chairman, Board of Advisors (Jul 2026 - Present)</p>
          </div>
        </section>

        <section className="resume__section">
          <h2 className="resume__section-title">Engineering Experience</h2>
          <Experience title="Advanced Weapons Systems Analyst Intern" date="May 2026 - Present" company="U.S. Government" bullets={[
            "Conduct physical testing of engineering systems and analyze results to calibrate simulation models",
            "Developed a Python-based geospatial analysis tool to meet team requirements, using AI-assisted development tooling to iterate on the design",
            "Perform technical assessments of advanced engineering systems alongside multidisciplinary teams, translating findings into decision-ready summaries",
            "Brief senior leadership and author concise written products that communicate complex technical data clearly",
            "Additional detail available upon request",
          ]} />

          <div className="resume__experience-item">
            <div className="resume__item-header">
              <h3 className="resume__item-title">Chief Systems Engineer and Team Lead</h3>
              <span className="resume__item-date">Jun 2025 - Jul 2026</span>
            </div>
            <p className="resume__company">Liberty Rocketry</p>
            <p className="resume__earlier-roles">
              <span>Earlier roles:</span> Assistant Chief Engineer; Senior Structural Engineer; Fin Fluid-Dynamics Engineer
            </p>
            <ul className="resume__bullets">
              <li>Placed 18th of 141 international collegiate teams at the 2026 IREC</li>
              <li>Led a 60-member student team in the design, testing, and launch readiness of a high-powered rocket</li>
              <li>Oversaw engineering decisions across propulsion, avionics, recovery, and aerodynamics subsystems</li>
              <li>Facilitated communication among internal teams, external vendors, and university faculty to improve project execution</li>
              <li>Reviewed SolidWorks, ANSYS, MATLAB, OpenRocket, and RocketPy models and simulations used for team design decisions</li>
            </ul>
          </div>

          <Experience title="Thermal Hydraulics Engineering Intern" date="May 2025 - Dec 2025" company="Framatome Nuclear" bullets={[
            "Developed and validated a Python predictive-wear model against documented component wear, reducing prediction error by 75% versus the legacy model",
            "Built a Python/xarray algorithm processing six-dimensional datasets to calculate safe operating limits, reducing analysis time from 800+ hours to minutes",
            "Performed system-level thermal-hydraulic and FIV analyses using AFT Fathom and custom tools to support component qualification",
            "Authored technical documentation and presented findings to engineering leadership; received a $2,500 technical-presentation award",
          ]} />

          <Experience title="Lead Undergraduate Research Assistant" date="Sep 2024 - Present" company="Liberty University" bullets={[
            "Lead a five-person team conducting split-Hopkinson pressure bar (SHPB) testing for dynamic material characterization",
            "Develop test procedures and fixtures; use PicoScope strain data to generate stress-strain curves and correlate high-speed imaging with SEM results",
          ]} />
        </section>

        <section className="resume__section">
          <h2 className="resume__section-title">Technical Skills</h2>
          <ul className="resume__bullets resume__skills">
            <li><strong>Systems &amp; Test:</strong> System integration, test planning, model calibration, subsystem coordination, technical documentation</li>
            <li><strong>Analysis &amp; CAE:</strong> ANSYS Fluent, ANSYS Mechanical, AFT Fathom, OpenRocket, RocketPy, CFD, FEA</li>
            <li><strong>CAD &amp; Manufacturing:</strong> SolidWorks, Onshape, GD&amp;T, technical drawings, 3D printing, CNC machining</li>
            <li><strong>Programming &amp; Lab:</strong> Python (NumPy, pandas, xarray), MATLAB, SHPB testing, SEM, high-speed imaging</li>
          </ul>
        </section>

        <section className="resume__section">
          <h2 className="resume__section-title">Selected Projects</h2>
          <Project title="Unmanned Aerial Vehicle Design & Analysis" tools="SolidWorks, ANSYS Fluent, 3D Printing">
            Designed and integrated a modular UAV airframe, propulsion system, and payload using replaceable 3D-printed components; evaluated performance with CFD
          </Project>
          <Project title="3D-Printed Model Rocket" tools="ANSYS Fluent, OpenRocket, Additive Manufacturing">
            Engineered a reusable threaded airframe with a hybrid recovery system; simulations predicted Mach 0.5+ and approximately 3,000 ft altitude
          </Project>
        </section>
      </div>
    </div>
  );
};

const Experience = ({ title, date, company, bullets }) => (
  <div className="resume__experience-item">
    <div className="resume__item-header">
      <h3 className="resume__item-title">{title}</h3>
      <span className="resume__item-date">{date}</span>
    </div>
    <p className="resume__company">{company}</p>
    <ul className="resume__bullets">{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
  </div>
);

const Project = ({ title, tools, children }) => (
  <div className="resume__project-item">
    <h3 className="resume__project-title">{title}</h3>
    <p className="resume__project-tools">Tools: {tools}</p>
    <ul className="resume__bullets"><li>{children}</li></ul>
  </div>
);

export default Resume;
