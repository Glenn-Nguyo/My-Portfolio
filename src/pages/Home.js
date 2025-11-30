import profileFormal from "../assets/Image.jpeg";

export default function Home() {
  return (
    <div className="hero">
      <p className="hero-badge">Portfolio</p>
      <h1 className="hero-title">Glenn Nguyo</h1>
      <p className="hero-subtitle">Computer Science Student • Developer</p>
      <p className="hero-tagline">
        I build clean and functional apps using modern tools.
      </p>

      <div className="hero-photo-wrapper">
        <img
          src={profileFormal}
          alt="Glenn dressed formally"
          className="hero-photo"
        />
      </div>
    </div>
  );
}
