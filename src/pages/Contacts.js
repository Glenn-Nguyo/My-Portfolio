export default function Contact() {
    return (
      <section className="section">
        <h2 className="section-title">Contact</h2>
        <p className="section-text">Reach out anytime:</p>
  
        <p>
          <strong>Email:</strong>{" "}
          <a className="contact-link" href="mailto:glenn@example.com">
            glenn@example.com
          </a>
        </p>
  
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/glenn"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/glenn
          </a>
        </p>
      </section>
    );
  }
  