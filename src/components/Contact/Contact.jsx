import { useState } from "react";
import "./Contact.css";

/**
 * Contact Section Component
 * Clean, minimal centered layout with a Netlify-powered contact form.
 */
const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("joshuacowell2005@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus("sending");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Submit failed");
        setStatus("success");
        form.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="contact-simple">
      <div className="contact__container">
        <div className="contact__content">
          <h1 className="contact__title">Let's Connect</h1>
          <p className="contact__subtitle">
            Have a question or want to work together? I'd love to hear from you.
          </p>

          {status === "success" ? (
            <div className="contact__success">
              <div className="contact__success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <p className="contact__success-title">Message sent!</p>
              <p className="contact__success-text">
                Thanks for reaching out — I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="contact__form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="contact__hp">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div className="contact__field">
                <input type="text" name="name" placeholder="Your name" required />
              </div>
              <div className="contact__field">
                <input type="email" name="email" placeholder="Your email" required />
              </div>
              <div className="contact__field">
                <textarea name="message" rows="4" placeholder="Your message" required />
              </div>

              {status === "error" && (
                <p className="contact__form-error">
                  Something went wrong. Please email me directly below.
                </p>
              )}

              <button
                type="submit"
                className="contact__submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          <div className="contact__divider"></div>

          <p className="contact__alt-label">Or reach me directly</p>

          <div className="contact__email-wrapper">
            <a
              href="mailto:joshuacowell2005@gmail.com"
              className="contact__email"
              onClick={handleEmailClick}
            >
              joshuacowell2005@gmail.com
            </a>
            {copied && <span className="contact__copied-tooltip">Copied!</span>}
          </div>

          <div className="contact__divider"></div>

          <a
            href="https://www.linkedin.com/in/josh-d-cowell/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__linkedin-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>

          <div className="contact__availability">
            <span className="contact__availability-dot"></span>
            <span>Available for Internships & Post-Grad Jobs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
