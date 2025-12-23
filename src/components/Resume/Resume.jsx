import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__container">
        {/* Download Button */}
        <div className="resume__download-section">
          <a
            href="/src/static/Official Josh Cowell's Resume.pdf"
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
            <span>910-660-6996</span>
            <span>•</span>
            <span>Lynchburg, VA</span>
            <span>•</span>
            <span>joshuacowell2005@gmail.com</span>
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
                Developed a predictive wear mathematical model in Python for
                critical reactor components, proving to be over 75% more
                accurate compared to the previous model.
              </li>
              <li>
                Programmed a Python algorithm using a 6-dimensional Xarray to
                calculate safe reactor operating conditions, reducing
                computation time from &gt;800 hours to minutes compared to prior
                methods.
              </li>
              <li>
                Performed system-level flow and vibration analysis using AFT
                Fathom and custom FIV modeling software.
              </li>
              <li>
                Awarded $2,500 for final summer presentation and hired on
                part-time during the school year.
              </li>
            </ul>
          </div>

          <div className="resume__experience-item">
            <div className="resume__item-header">
              <h3 className="resume__item-title">Chief Systems Engineer</h3>
              <span className="resume__item-date">June 2025 - Present</span>
            </div>
            <p className="resume__company">
              Liberty Rocketry (9th/156 international teams in 2024)
            </p>
            <ul className="resume__bullets">
              <li>
                Led as member captain in the design, testing, and analysis of a
                high-powered rocket.
              </li>
              <li>
                Oversaw all engineering decisions across propulsion, avionics,
                recovery, and aerodynamics subsystems.
              </li>
              <li>
                Facilitated communication between internal teams, external
                vendors, and university faculty to optimize project efficiency.
              </li>
              <li>
                Displayed advanced proficiency in engineering software (e.g.,
                SolidWorks, ANSYS, MATLAB) to verify the accuracy and
                feasibility of all subsystem models and simulations.
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
            <p className="resume__company">Liberty Rocketry</p>
            <ul className="resume__bullets">
              <li>
                Led a team of 5 undergraduate students to perform
                split-Hopkinson pressure bar (SHPB) test, including sample
                preparation, high-speed imaging, electron microscopy.
              </li>
              <li>
                Assisted in the design and manufacturing of custom SHPB systems
                to fit material testing needs.
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
                Utilized ANSYS Fluent &amp; Mechanical, RocketPy, OpenRocket,
                and Onshape for simulations, FEA, and computational modeling,
                ensuring compliance with competition standards.
              </li>
              <li>
                Delivered reports to guarantee the rocket's compliance with
                competition standards and flight requirements.
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
              <strong>Software:</strong> AFT Fathom, ANSYS fluent, ANSYS
              mechanical, SolidWorks, Onshape, OpenRocket, RocketPy
            </li>
            <li>
              <strong>Machines:</strong> Scanning Electron Microscope (SEM),
              Metal X 3D Printer, CNC, WaterJet, Lathe
            </li>
            <li>
              <strong>Programming Languages:</strong> MATLAB, Python
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section className="resume__section">
          <h2 className="resume__section-title">PROJECTS</h2>

          <div className="resume__project-item">
            <h3 className="resume__project-title">
              Unmanned Aerial Vehicle (UAV)
            </h3>
            <ul className="resume__bullets">
              <li>
                Engineered a custom UAV with 3D-printed parts to support
                customizability and quick repairs.
              </li>
              <li>
                Conducted ANSYS CFD simulation to validate cornual surface
                performance.
              </li>
              <li>
                Developed and programmed a payload-deployment system to
                accurately hit a 5-foot wide target.
              </li>
            </ul>
          </div>

          <div className="resume__project-item">
            <h3 className="resume__project-title">Rocketry</h3>
            <ul className="resume__bullets">
              <li>
                Built a two-stage rocket that reached over 2,500 feet and
                utilized my custom recovery system.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
