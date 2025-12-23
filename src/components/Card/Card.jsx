import './Card.css';

/**
 * Card Component
 * A flexible card with multiple style variants
 * 
 * @param {string} variant - 'elevated' | 'glass' | 'outlined'
 * @param {boolean} interactive - Adds hover effects for clickable cards
 * @param {string} image - Image URL for card header
 * @param {ReactNode} children - Card content
 */
const Card = ({ 
  children, 
  variant = 'elevated',
  interactive = false,
  className = '',
  onClick,
  ...props 
}) => {
  const classes = [
    'card',
    `card--${variant}`,
    interactive && 'card--interactive',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

// Card sub-components for flexible composition
Card.Image = ({ src, alt, placeholder = false, icon, children }) => (
  <div className={`card__image ${placeholder ? 'card__image--placeholder' : ''}`}>
    {placeholder ? (
      icon || children || (
        <svg className="card__image-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        </svg>
      )
    ) : (
      <img src={src} alt={alt} loading="lazy" />
    )}
  </div>
);

Card.Content = ({ children, compact = false }) => (
  <div className={`card__content ${compact ? 'card__content--compact' : ''}`}>
    {children}
  </div>
);

Card.Header = ({ children }) => (
  <div className="card__header">{children}</div>
);

Card.Title = ({ children }) => (
  <h3 className="card__title">{children}</h3>
);

Card.Subtitle = ({ children }) => (
  <p className="card__subtitle">{children}</p>
);

Card.Body = ({ children }) => (
  <div className="card__body">{children}</div>
);

Card.Footer = ({ children }) => (
  <div className="card__footer">{children}</div>
);

Card.Tags = ({ tags = [] }) => (
  <div className="card__tags">
    {tags.map((tag, index) => (
      <span key={index} className="card__tag">{tag}</span>
    ))}
  </div>
);

export default Card;
