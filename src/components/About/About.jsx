import "./About.css";

/**
 * About Section Component
 * Bento Grid Layout with professional bio, skills, and personal life
 */
const About = () => {
  // Using local logos from public/logos folder for reliability
  const skills = [
    {
      name: "Python",
      logo: "/logos/python.svg",
    },
    {
      name: "MATLAB",
      logo: "/logos/matlab.png",
    },
    {
      name: "SolidWorks",
      logo: "/logos/solidworks.png",
    },
    {
      name: "ANSYS",
      logo: "/logos/ANSYS_logo.png",
    },
    {
      name: "RocketPy",
      logo: "/logos/rocketpy.png",
    },
    {
      name: "OpenRocket",
      logo: "/logos/openrocket.png",
    },
    {
      name: "AFT Fathom",
      logo: "/logos/aft-fathom.png",
    },
  ];

  const hobbies = [
    { name: "Climbing", icon: "🧗" },
    { name: "Biking", icon: "🚴" },
    { name: "Wakeboarding", icon: "🏄" },
    { name: "Hiking", icon: "🥾" },
    { name: "Surfing", icon: "🌊" },
    { name: "Caving", icon: "🦇" },
    { name: "Skydiving", icon: "🪂" },
  ];

  // Personal photos - add your own images to public/personal/ folder
  const personalPhotos = [
    { src: "/personal/photo1.jpg", alt: "Caving adventure", caption: "Caving in Tennessee" },
    { src: "/personal/photo2.jpg", alt: "Sailing trip", caption: "Sailing in the Outer Banks" },
    { src: "/personal/photo3.jpg", alt: "Backpacking trip", caption: "Backpacking on the Blue Ridge Mountains" },
    { src: "/personal/photo4.jpg", alt: "Surfing session", caption: "Surfing in Wilmington, NC" },
  ];

  return (
    <section id="about" className="about-bento">
      <div className="bento__container">
        {/* Header */}
        <div className="bento__header">
          {/* <span className="bento__eyebrow">About Me</span> */}
          <h1 className="bento__title">About Me</h1>
        </div>

        {/* Bento Grid */}
        <div className="bento__grid">
          {/* Large Image Cell - Rocket */}
          <a 
            href="https://www.youtube.com/watch?v=xrW_gSad8QU" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bento__cell bento__cell--hero"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <img 
              src="/about.jpg" 
              alt="Rocket Launch" 
              className="bento__hero-image"
            />
            <div className="bento__hero-overlay">
              <span className="bento__hero-label">2024 Launch of Rocket <em>WAYMAKER</em></span>
            </div>
          </a>

          {/* Bio Cell */}
          <div className="bento__cell bento__cell--bio">
            <p className="bento__bio-text">
              I'm a Mechanical Engineering student at Liberty University with
              hands-on experience in rocketry, thermal hydraulics, and advanced
              computational modeling.
            </p>
            <p className="bento__bio-text">
              Former Intern at Framatome Nuclear where I developed predictive 
              wear models and optimized reactor safety systems.
            </p>
          </div>

          {/* Skills Cell */}
          <div className="bento__cell bento__cell--skills">
            <h3 className="bento__cell-title">Tools & Technologies</h3>
            <div className="bento__skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="bento__skill" data-skill-name={skill.name}>
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="bento__skill-logo"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Highlights */}
          <div className="bento__cell bento__cell--highlights">
            <div className="bento__highlight">
              <span className="bento__highlight-value">3.85</span>
              <span className="bento__highlight-label">GPA</span>
            </div>
            <div className="bento__highlight">
              <span className="bento__highlight-value">2027</span>
              <span className="bento__highlight-label">Graduation</span>
            </div>
          </div>

          {/* Personal Life Header */}
          <div className="bento__cell bento__cell--personal-header">
            <h3 className="bento__personal-title">Beyond Engineering</h3>
            <p className="bento__personal-text">
              When I'm not doing engineering, I love to be outside trying a new sport or 
              enjoying some of my favorites. Adventure keeps me balanced and 
              inspired.
            </p>
            <div className="bento__hobbies">
              {hobbies.map((hobby) => (
                <span key={hobby.name} className="bento__hobby-tag">
                  {hobby.name}
                </span>
              ))}
            </div>
          </div>

          {/* Personal Photo Grid */}
          {personalPhotos.map((photo, index) => (
            <div 
              key={index} 
              className={`bento__cell bento__cell--photo bento__cell--photo-${index + 1}`}
            >
              <div className="bento__photo-placeholder">
                <span>Photo {index + 1}</span>
              </div>
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="bento__photo"
                onLoad={(e) => {
                  e.target.parentElement.classList.add('bento__cell--loaded');
                  e.target.style.opacity = '1';
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
                style={{ 
                  opacity: 0,
                  objectPosition: index === 2 ? 'center 30%' : 'center',
                  transform: index === 2 ? 'scale(1.7)' : 'scale(1)'
                }}
              />
              <div className="bento__photo-caption">
                <span>{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
