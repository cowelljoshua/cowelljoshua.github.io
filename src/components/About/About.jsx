import Section from "../Section";
import "./About.css";

/**
 * About Section Component
 * Professional bio with visual engineering schematic
 */
const About = () => {
  // Using reliable official full-color logos
  const skills = [
    {
      name: "Python",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      name: "MATLAB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
    },
    {
      name: "SolidWorks",
      logo: "https://static.cdnlogo.com/logos/s/6/solidworks.svg",
    },
    {
      name: "ANSYS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Ansys_logo_%282019%29.svg",
    },
    {
      name: "RocketPy",
      logo: "https://raw.githubusercontent.com/RocketPy-Team/RocketPy/master/docs/static/img/logo.png",
    },
    {
      name: "OpenRocket",
      logo: "https://openrocket.info/img/openrocket-logo.svg",
    },
    {
      name: "Onshape",
      logo: "https://static.cdnlogo.com/logos/o/89/onshape.svg",
      size: "120px",
    },
    {
      name: "AFT Fathom",
      logo: "https://unavatar.io/twitter/appliedflowtech",
    },
  ];

  return (
    <Section id="about" className="about">
      <div className="about__container">
        {/* Content */}
        <div className="about__content">
          <span className="about__eyebrow">About Me</span>
          <h2 className="about__title">
            Engineering solutions for defense and aerospace systems.
          </h2>
          <p className="about__text">
            I'm a Mechanical Engineering student at Liberty University with
            hands-on experience in rocketry, thermal hydraulics, and advanced
            computational modeling. Currently interning at Framatome Nuclear
            where I develop predictive wear models and optimize reactor safety
            systems.
          </p>
          <p className="about__text">
            My work applies engineering theory to real systems, from leading
            Liberty Rocketry’s propulsion and engineering teams to performing
            FEA and CFD simulations. I focus on technical problems that require
            system-level understanding, computation, and precision.
          </p>

          <div className="about__skills">
            {skills.map((skill) => (
              <button
                key={skill.name}
                className="about__skill-btn"
                title={skill.name}
                aria-label={skill.name}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="about__skill-logo"
                  style={{
                    ...(skill.invert ? { filter: 'brightness(0) invert(1)' } : {}),
                    ...(skill.size ? { width: skill.size, height: skill.size } : {})
                  }}
                />
                <span className="about__skill-tooltip">{skill.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
