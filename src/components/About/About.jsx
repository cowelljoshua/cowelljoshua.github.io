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
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      name: "MATLAB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
    },
    {
      name: "SolidWorks",
      logo: "/logos/solidworks.png",
    },
    {
      name: "ANSYS",
      logo: "/logos/ansys.svg",
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
      name: "Onshape",
      logo: "/logos/onshape.png",
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
    { src: "/cowellPortfolio/personal/photo1.jpg", alt: "Adventure photo 1" },
    { src: "/cowellPortfolio/personal/photo2.jpg", alt: "Adventure photo 2" },
    { src: "/cowellPortfolio/personal/photo3.jpg", alt: "Adventure photo 3" },
    { src: "/cowellPortfolio/personal/photo4.jpg", alt: "Adventure photo 4" },
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
          <div className="bento__cell bento__cell--hero">
            <img 
              src="/cowellPortfolio/public/about.jpg" 
              alt="Rocket Launch" 
              className="bento__hero-image"
            />
            <div className="bento__hero-overlay">
              <span className="bento__hero-label">Aerospace & Defense</span>
            </div>
          </div>

          {/* Bio Cell */}
          <div className="bento__cell bento__cell--bio">
            <h2 className="bento__bio-title">
              Overview
            </h2>
            <p className="bento__bio-text">
              I'm a Mechanical Engineering student at Liberty University with
              hands-on experience in rocketry, thermal hydraulics, and advanced
              computational modeling.
            </p>
            <p className="bento__bio-text">
              Currently interning at Framatome Nuclear where I develop predictive 
              wear models and optimize reactor safety systems.
            </p>
          </div>

          {/* Skills Cell */}
          <div className="bento__cell bento__cell--skills">
            <h3 className="bento__cell-title">Tools & Technologies</h3>
            <div className="bento__skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="bento__skill" title={skill.name}>
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
              <span className="bento__highlight-value">3.82</span>
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
                  <span className="bento__hobby-icon">{hobby.icon}</span>
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
                  console.log(`Image loaded: ${photo.src}`);
                  e.target.parentElement.classList.add('bento__cell--loaded');
                  e.target.style.opacity = '1';
                }}
                onError={(e) => {
                  console.log(`Failed to load image: ${photo.src}`);
                  e.target.style.display = 'none';
                }}
                style={{ 
                  opacity: 0,
                  objectPosition: index === 2 ? 'center 30%' : 'center',
                  transform: index === 2 ? 'scale(1.7)' : 'scale(1)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
