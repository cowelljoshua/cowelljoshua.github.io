import "./Button.css";

/**
 * Button Component
 * A versatile, premium-styled button with multiple variants
 *
 * @param {string} variant - 'primary' | 'secondary' | 'ghost' | 'light'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {string} href - If provided, renders as anchor tag
 * @param {boolean} fullWidth - Makes button full width
 * @param {ReactNode} children - Button content
 * @param {ReactNode} icon - Optional icon element
 */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  icon,
  iconPosition = "right",
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ...props
}) => {
  const classes = [
    "button",
    `button--${variant}`,
    size !== "md" && `button--${size}`,
    fullWidth && "button--full",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="button__icon">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="button__icon button__icon--arrow">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
