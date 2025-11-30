import aboutPhoto from "../assets/Image 1.jpeg";

export default function About() {
  return (
    <section className="section about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-grid">
        <div className="about-image-wrapper">
          <img
            src={aboutPhoto}
            alt="Glenn with his mom"
            className="about-photo"
          />
        </div>

        <div className="about-text">
          <p className="section-text">
            I’m a Computer Science student interested in software development,
            cybersecurity, and building useful applications.
          </p>
          <p className="section-text">
            My family and community motivate me to keep learning and creating.
          </p>
        </div>
      </div>
    </section>
  );
}
