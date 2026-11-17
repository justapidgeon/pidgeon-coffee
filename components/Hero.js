import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      {/* Ambient background glows & contour curves */}
      <div className="hero-ambient-glow glow-1" />
      <div className="hero-ambient-glow glow-2" />
      <div className="hero-topographic-waves" aria-hidden="true">
        <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-100 450 C300 300, 700 550, 1100 400 C1300 320, 1500 480, 1600 420" stroke="rgba(200, 149, 108, 0.08)" strokeWidth="1.5" fill="none" />
          <path d="M-100 520 C350 380, 750 620, 1150 470 C1350 400, 1520 540, 1600 500" stroke="rgba(200, 149, 108, 0.05)" strokeWidth="1.5" fill="none" />
          <path d="M-100 380 C250 250, 680 480, 1050 340 C1250 260, 1480 390, 1600 360" stroke="rgba(213, 203, 182, 0.04)" strokeWidth="1.2" strokeDasharray="6 6" fill="none" />
        </svg>
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Main Hero Story & Call to Action */}
          <div className="hero-content">
            <div className="hero-tagline-pill fade-in">
              <span className="pill-sparkle">✦</span>
              <span>HOME BREWED • SMALL BATCH • ROASTED WITH HEART</span>
            </div>

            <h1 className="hero-title fade-in" style={{ animationDelay: '0.1s' }}>
              Wake up to <br />
              <em className="hero-title-italic">better coffee.</em>
            </h1>

            <p className="hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
              Handcrafted specialty brews, single-origin separations, and velvety textures built to be savored. Proudly pouring fresh micro-lots from regenerative and family-owned farms.
            </p>

            {/* Inspo from Crane Coffee: Glassmorphic Value Props */}
            <div className="hero-perks-row fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="hero-perk-pill">
                <span className="perk-bullet">✦</span>
                <span>CARBON-NEUTRAL MILLING</span>
              </div>
              <div className="hero-perk-pill">
                <span className="perk-bullet">✦</span>
                <span>DIRECT FARM TRACEABILITY</span>
              </div>
              <div className="hero-perk-pill">
                <span className="perk-bullet">✦</span>
                <span>CUP OF EXCELLENCE LOTS</span>
              </div>
            </div>

            <div className="hero-buttons fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#menu" className="cta-button primary-glass">
                <span>View My Menu</span>
                <span className="btn-arrow">↓</span>
              </a>
              <a href="#beans" className="cta-button outline-glass">
                <span>Explore Beans &amp; Roasters</span>
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>

          {/* Floating Glassmorphic Mascot & Roast Spotlight Card */}
          <div className="hero-card-col fade-in" style={{ animationDelay: '0.35s' }}>
            <div className="hero-glass-card">
              <div className="glass-card-header">
                <div className="mascot-badge-wrap">
                  <div className="mascot-halo" />
                  <img 
                    src="/pidgeon-logo.png" 
                    alt="Pidgeon Coffee Mascot in Winter Beanie" 
                    className="hero-mascot-img"
                  />
                </div>
                <div className="mascot-meta">
                  <div className="mascot-status">
                    <span className="status-ping" />
                    <span>FRESHLY GROUND &amp; BREWING</span>
                  </div>
                  <h3 className="mascot-brand">pidgeon coffee.</h3>
                  <p className="mascot-tag">Small-batch craft &bull; Loganville &bull; Home Lab</p>
                </div>
              </div>

              <div className="hero-spotlight-divider" />

              <div className="hero-spotlights-list">
                <div className="roast-spotlight-item highlight-lot">
                  <div className="spotlight-left">
                    <span className="spotlight-badge new-lot">★ FEATURED LOT</span>
                    <span className="spotlight-name">Fito Montiel Pacamara</span>
                    <span className="spotlight-origin">CafeNor Mill &bull; Metapán, El Salvador</span>
                    <span className="spotlight-notes">Notes: Citrus, juicy stone fruit &amp; sweetness</span>
                  </div>
                  <div className="spotlight-arrow">↗</div>
                </div>

                <div className="roast-spotlight-item restocked-lot">
                  <div className="spotlight-left">
                    <span className="spotlight-badge restock-lot">✨ BACK IN STOCK</span>
                    <span className="spotlight-name">El Origen</span>
                    <span className="spotlight-origin">Tolima &amp; Huila &bull; Colombia Micro-Lot</span>
                    <span className="spotlight-notes">Notes: Pink Bourbon, wild honey &amp; floral</span>
                  </div>
                  <div className="spotlight-arrow">↗</div>
                </div>
              </div>

              <div className="glass-card-footer">
                <a href="#menu" className="glass-action-link">
                  <span>Customize any drink with these beans</span>
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
