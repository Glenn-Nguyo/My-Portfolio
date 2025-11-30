import React, { useState } from "react";
import "./App.css";
import profileFormal from "./assets/Image.jpeg";
import aboutPhoto from "./assets/Image 1.jpeg";


export default function App() {
  const [theme, setTheme] = useState("light");

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`page theme-${theme}`}>
      {/* NAVBAR */}
      <nav className="nav">
        <div className="nav-left">
          <div className="nav-logo">Glenn Nguyo</div>
        </div>
        <div className="nav-right">
          <div className="nav-links">
            <button className="nav-button" onClick={() => handleScroll("home")}>
              Home
            </button>
            <button
              className="nav-button"
              onClick={() => handleScroll("about")}
            >
              About
            </button>
            <button
              className="nav-button"
              onClick={() => handleScroll("skills")}
            >
              Skills
            </button>
            <button
              className="nav-button"
              onClick={() => handleScroll("projects")}
            >
              Projects
            </button>
            <button
              className="nav-button"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </button>
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀︎"}
          </button>
        </div>
      </nav>

      {/* HERO / HOME */}
      <section id="home" className="hero fade-section">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="hero-pill">Computer Science • USD</p>
            <h1 className="hero-title">Building code, products, and ideas.</h1>
            <p className="hero-subtitle">
              I’m Glenn, a Computer Science student at the University of South
              Dakota, co-founder of Mogenix and Milleast, and a developer
              passionate about turning concepts into real products.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => handleScroll("projects")}
              >
                View my work
              </button>
              <button
                className="secondary-button"
                onClick={() => handleScroll("contact")}
              >
                Let’s connect
              </button>
            </div>

            <div className="hero-highlight">
              React • Ruby • Python • TypeScript • Flutter • HTML/CSS
            </div>
          </div>

          <div className="hero-photo-block">
            <div className="hero-photo-ring">
              <img
                src={profileFormal}
                alt="Glenn dressed formally"
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section fade-section about-section">
        <h2 className="section-title">About Me</h2>

        <div className="about-wrapper">
          <div className="about-image-block">
            <img
              src={aboutPhoto}
              alt="Glenn with his mom"
              className="about-photo"
            />
          </div>

          <div className="about-content">
            <p className="about-intro">
              I’m a Computer Science student at the University of South Dakota
              with a strong interest in software development, entrepreneurship,
              and building clean, user-centered digital experiences.
            </p>

            <p className="about-body">
              Before USD, I studied Software Development at Moringa School in
              Kenya, where I gained practical experience with React, Ruby, and
              full-stack concepts. That journey gave me both technical skills
              and a business-focused mindset.
            </p>

            <p className="about-body">
              I’m co-founder of <strong>Mogenix</strong>, a brand focused on
              graphic design and web development, and <strong>Milleast</strong>,
              which includes <strong>Sokkosasa</strong> — a super-app concept
              designed to bring shopping, delivery, and everyday services into a
              single convenient platform.
            </p>

            <p className="about-body">
              I enjoy working in teams, leading projects, and solving problems
              that actually matter. I’m always learning and always building.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY / TIMELINE */}
      <section className="section fade-section">
        <h2 className="section-title">Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Early Interest in Tech</h3>
              <p>
                Started exploring programming through small projects and online
                resources, building curiosity for how software works.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Moringa School, Kenya</h3>
              <p>
                Completed a Software Development course at Moringa School,
                gaining hands-on experience in React, Ruby, and web development.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Co-founding Mogenix & Milleast</h3>
              <p>
                Co-founded Mogenix (design & web) and Milleast (umbrella brand
                behind projects like Sokkosasa), combining tech skills with
                business thinking.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>University of South Dakota</h3>
              <p>
                Studying Computer Science at USD and growing as a developer,
                problem-solver, and entrepreneur, while building real projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section className="section fade-section">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="two-column">
          <div>
            <h3 className="subheading">Education</h3>
            <ul className="list">
              <li>
                <strong>B.S. Computer Science</strong> — University of South
                Dakota
              </li>
              <li>
                <strong>Software Development Program</strong> — Moringa School,
                Kenya
              </li>
            </ul>
          </div>
          <div>
            <h3 className="subheading">Certifications & Learning</h3>
            <ul className="list">
              <li>Ongoing: Online courses in React, TypeScript, and Flutter</li>
              <li>Regular practice with coding challenges and personal projects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section fade-section">
        <h2 className="section-title">Skills</h2>

        <div className="skills-layout">
          <div>
            <h3 className="skills-heading">Technical</h3>
            <div className="skills-tags">
              <span className="tag">Python</span>
              <span className="tag">Ruby</span>
              <span className="tag">JavaScript</span>
              <span className="tag">TypeScript</span>
              <span className="tag">React</span>
              <span className="tag">Flutter</span>
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
            </div>
          </div>

          <div>
            <h3 className="skills-heading">Professional</h3>
            <div className="skills-tags">
              <span className="tag">Leadership</span>
              <span className="tag">Teamwork</span>
              <span className="tag">Entrepreneurial Mindset</span>
              <span className="tag">Problem Solving</span>
              <span className="tag">Communication</span>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section fade-section">
        <h2 className="section-title">Tech Stack</h2>
        <div className="stack-grid">
          <div className="stack-item">
            <h3>Frontend</h3>
            <p>React, TypeScript, JavaScript, HTML, CSS, basic Flutter</p>
          </div>
          <div className="stack-item">
            <h3>Backend</h3>
            <p>Ruby, basic APIs, fundamentals of server-side logic</p>
          </div>
          <div className="stack-item">
            <h3>Tools & Workflow</h3>
            <p>Git, VS Code, design collaboration, project planning</p>
          </div>
        </div>
      </section>

      {/* WHAT I CAN DO FOR YOU */}
      <section className="section fade-section">
        <h2 className="section-title">What I Can Do for You</h2>
        <div className="value-grid">
          <div className="value-card">
            <h3>Modern Web Experiences</h3>
            <p>
              Build clean, responsive websites and interfaces using React and
              modern frontend tools.
            </p>
          </div>
          <div className="value-card">
            <h3>Product & Business Thinking</h3>
            <p>
              Think beyond code by understanding the user, the business, and
              the problem we’re solving.
            </p>
          </div>
          <div className="value-card">
            <h3>Teamwork & Ownership</h3>
            <p>
              Bring leadership, responsibility, and clear communication to group
              projects and collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section fade-section">
        <h2 className="section-title">My Approach</h2>
        <p className="section-text">
          I like to keep things simple, useful, and intentional. I focus on:
        </p>
        <ul className="pill-list">
          <li className="pill">Solving real problems</li>
          <li className="pill">Building for clarity and simplicity</li>
          <li className="pill">Iterating and learning fast</li>
          <li className="pill">Combining business and technical thinking</li>
        </ul>
      </section>

      {/* PROJECTS & FEATURED PROJECT */}
      <section id="projects" className="section fade-section">
        <h2 className="section-title">Projects & Ventures</h2>

        <div className="featured-project">
          <h3 className="subheading">Featured: Sokkosasa (Milleast)</h3>
          <p className="section-text">
            Sokkosasa is a super-app concept under Milleast that aims to bring
            shopping, delivery, and everyday services into one platform. The
            goal is to reduce app fatigue and create a smoother experience for
            users who currently switch between multiple apps for daily tasks.
          </p>
          <p className="section-text">
            As a co-founder, I’m involved in shaping the idea, planning the
            features, and thinking about how the product can grow over time.
          </p>
        </div>

        <div className="cards-grid">
          <article className="card">
            <h3 className="card-title">Personal Portfolio</h3>
            <p className="card-text">
              A React-based single-page portfolio that brings together who I am,
              what I’ve built, and where I’m heading.
            </p>
          </article>

          <article className="card">
            <h3 className="card-title">Mogenix (Co-Founder)</h3>
            <p className="card-text">
              A brand focused on graphic design and web development, helping
              people and businesses build a strong visual and digital identity.
            </p>
          </article>

          <article className="card">
            <h3 className="card-title">Milleast &amp; Sokkosasa</h3>
            <p className="card-text">
              An umbrella for multiple projects, including Sokkosasa — a
              super-app concept for shopping, services, and convenience.
            </p>
          </article>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section fade-section">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              “Glenn brings both technical skill and a strong product mindset.
              He understands how to move an idea forward.”
            </p>
            <p className="testimonial-name">— Instructor, Moringa School</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              “He thinks like a founder. Glenn cares about users, design, and
              business impact — not just the code.”
            </p>
            <p className="testimonial-name">— Co-founder, Mogenix</p>
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="section fade-section">
        <h2 className="section-title">Beyond Code</h2>
        <p className="section-text">Outside of tech, I’m also interested in:</p>
        <ul className="pill-list">
          <li className="pill">Basketball</li>
          <li className="pill">Tech startups</li>
          <li className="pill">Design & branding</li>
          <li className="pill">Personal development</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section fade-section">
        <h2 className="section-title">Contact</h2>
        <p className="section-text">
          Open to collaborations, internships, and interesting ideas.
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a className="contact-link" href="mailto:glenn@example.com">
         glennnguyo1000@gmail.com
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            className="contact-link"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
          

           www.linkedin.com/in/glenn-nguyo-10693a1a2
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} Glenn Nguyo</span>
        <span>Built with React</span>
      </footer>
    </div>
  );
}