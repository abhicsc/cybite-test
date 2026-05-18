
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span>G</span>
        </div>

        <ul className="nav-links">
          <li>HOME</li>
          <li>WHAT WE DO</li>
          <li>CAREERS</li>
          <li>REACH US</li>
        </ul>

        <button className="talk-btn">
          LET'S TALK
          <span className="arrow">↗</span>
        </button>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>
          GOLDEN GALL<span className="highlight-o">O</span>P
          <br />
          MARKETING
        </h1>

        <p>
          Galloping your brand to new digital heights, unleashing its full
          potential with precision, passion, and a golden touch.
        </p>

        {/* Tags */}
        <div className="tags">
          <span>Digital Marketing</span>
          <span>Graphic Design</span>
          <span>SEO Services</span>
          <span>Web Development</span>
        </div>

        {/* Client Logos */}
        <div className="clients">
          <h2>SCRAWL</h2>
          <h2 className="pink">CYBite</h2>
          <h2>EQUISTRIDE</h2>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="glow"></div>
    </section>
  );
};

export default HeroSection;