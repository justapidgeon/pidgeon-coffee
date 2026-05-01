export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="hero-title fade-in logo-brand" style={{ fontSize: '5rem', background: 'none', webkitTextFillColor: 'var(--text)', fontWeight: 900 }}>
          Wake Up To Better Coffee
        </h1>
        <p className="hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
          Small batch. Big heart. Home brewed in every cup.
        </p>
        <a href="#menu" className="cta-button fade-in" style={{ animationDelay: '0.4s' }}>
          View Our Menu
        </a>
      </div>
    </section>
  );
}
