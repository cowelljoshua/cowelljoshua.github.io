import { useEffect, useRef, useState } from "react";
import "./Section.css";

/**
 * Section Component
 * A consistent section wrapper with reveal animations
 *
 * @param {string} id - Section ID for navigation
 * @param {string} variant - 'default' | 'light' | 'dark' | 'gradient'
 * @param {string} eyebrow - Small text above title
 * @param {string} title - Section title
 * @param {string} subtitle - Section description
 * @param {boolean} headerLeft - Align header to left
 */
const Section = ({
  children,
  id,
  variant = "default",
  eyebrow,
  title,
  subtitle,
  headerLeft = false,
  className = "",
  ...props
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const classes = [
    "section",
    variant !== "default" && `section--${variant}`,
    isVisible && "visible",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const headerClasses = [
    "section__header",
    headerLeft && "section__header--left",
  ]
    .filter(Boolean)
    .join(" ");

  const hasHeader = eyebrow || title || subtitle;

  return (
    <section ref={sectionRef} id={id} className={classes} {...props}>
      <div className="section__container">
        {hasHeader && (
          <div className={headerClasses}>
            {eyebrow && <span className="section__eyebrow">{eyebrow}</span>}
            {title && <h2 className="section__title">{title}</h2>}
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="section__content">{children}</div>
      </div>
    </section>
  );
};

export default Section;
