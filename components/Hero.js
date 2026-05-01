export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tagline fade-in">
          HOME BREWED / SMALL BATCH / ROASTED WITH HEART
        </span>
        <h1 className="hero-title fade-in" style={{ animationDelay: '0.1s' }}>
          Wake up <br /> <em>to better coffee.</em>
        </h1>
        <p className="hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
          I create brew identities, flavors, and visuals that are built to be remembered.
        </p>
        <div className="hero-buttons fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#menu" className="cta-button">
            View My Menu
          </a>
        </div>
      </div>
    </section>
  );
}
