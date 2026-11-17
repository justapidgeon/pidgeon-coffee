"use client";

import { useState } from "react";
import { coffeeBeans } from "../data/menu";

export default function BeanShowcase({ onSelectBeanForDrink }) {
  const [selectedBeanForModal, setSelectedBeanForModal] = useState(null);

  return (
    <section id="beans" className="beans-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tagline-pill">
            <span className="pill-dot">✦</span>
            <span>SINGLE-ORIGIN &amp; ARTISAN ROASTERS</span>
          </div>
          <h2 className="section-title">The Roaster Reserve</h2>
          <p className="section-subtitle">
            Every coffee we brew has a voice, a family, and an elevation. Explore our curated separations and direct-trade farm lots.
          </p>
        </div>

        {/* Featured Big Showcase Cards for Partaker (Fito Montiel Pacamara) & El Origen */}
        <div className="featured-beans-showcase">
          {/* Card 1: Partaker Brand - Fito Montiel Pacamara */}
          {(() => {
            const partakerBean = coffeeBeans.find(b => b.id === "partaker") || coffeeBeans[0];
            return (
              <div className="featured-bean-card glass-spotlight" key={partakerBean.id}>
                <div className="card-ambient-gradient fito-gradient" />
                <div className="card-top-badges">
                  <span className="glass-pill-badge gold">★ PARTAKER SINGLE-ORIGIN</span>
                  <span className="glass-pill-badge origin">{partakerBean.origin}</span>
                </div>

                <div className="featured-bean-header">
                  <div className="bean-brand-logo-frame">
                    <img 
                      src={partakerBean.logo} 
                      alt="Partaker Roasters Logo"
                      className="bean-brand-logo-img"
                    />
                  </div>
                  <div className="bean-title-group">
                    <span className="bean-subtitle-tag">{partakerBean.name} Coffee Roasters &bull; {partakerBean.roast} Roast</span>
                    <h3 className="bean-display-name">{partakerBean.beanName || partakerBean.name}</h3>
                    <p className="bean-mill-info">Producer: José Arnulfo 'Fito' Montiel &bull; Exporter: CafeNor Mill</p>
                  </div>
                </div>

                <p className="featured-bean-summary">
                  {partakerBean.tagline}
                </p>

                {/* Flavor Notes Pills */}
                <div className="flavor-notes-pill-group">
                  {partakerBean.notes.map((note) => (
                    <span key={note} className="flavor-pill gold-glow">
                      ✦ {note}
                    </span>
                  ))}
                </div>

                {/* Quick Sensory Meters */}
                <div className="bean-metrics-row">
                  <div className="metric-box">
                    <span className="metric-lbl">SWEETNESS</span>
                    <div className="metric-bar-bg">
                      <div className="metric-fill" style={{ width: `${partakerBean.stats.sweetness}%` }} />
                    </div>
                    <span className="metric-val">{(partakerBean.stats.sweetness / 10).toFixed(1)}/10</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-lbl">CITRUS ACIDITY</span>
                    <div className="metric-bar-bg">
                      <div className="metric-fill" style={{ width: `${partakerBean.stats.acidity}%` }} />
                    </div>
                    <span className="metric-val">{(partakerBean.stats.acidity / 10).toFixed(1)}/10</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-lbl">AROMA</span>
                    <div className="metric-bar-bg">
                      <div className="metric-fill" style={{ width: `${partakerBean.stats.aroma}%` }} />
                    </div>
                    <span className="metric-val">{(partakerBean.stats.aroma / 10).toFixed(1)}/10</span>
                  </div>
                </div>

                <div className="featured-bean-actions">
                  <button 
                    type="button" 
                    className="action-btn view-lore-btn"
                    onClick={() => setSelectedBeanForModal(partakerBean)}
                  >
                    <span>Read Producer Story</span>
                    <span className="btn-icon">📖</span>
                  </button>
                  <a 
                    href="#menu" 
                    className="action-btn brew-btn"
                    onClick={() => {
                      if (onSelectBeanForDrink) onSelectBeanForDrink(partakerBean.name);
                    }}
                  >
                    <span>Order Drinks with This Bean</span>
                    <span className="btn-icon">☕</span>
                  </a>
                </div>
              </div>
            );
          })()}

          {/* Card 2: El Origen */}
          {(() => {
            const origenBean = coffeeBeans.find(b => b.id === "el-origen");
            if (!origenBean) return null;
            return (
              <div className="featured-bean-card glass-spotlight" key={origenBean.id}>
                <div className="card-ambient-gradient origen-gradient" />
                <div className="card-top-badges">
                  <span className="glass-pill-badge emerald">✨ FRESHLY RESTOCKED</span>
                  <span className="glass-pill-badge origin">{origenBean.origin}</span>
                </div>

                <div className="featured-bean-header">
                  <div className="bean-brand-logo-frame">
                    <img 
                      src={origenBean.logo} 
                      alt={`${origenBean.name} Roaster Mark`}
                      className="bean-brand-logo-img"
                    />
                  </div>
                  <div className="bean-title-group">
                    <span className="bean-subtitle-tag">{origenBean.tier} &bull; {origenBean.roast} Roast</span>
                    <h3 className="bean-display-name">{origenBean.name}</h3>
                    <p className="bean-mill-info">Partnering with family farms in Tolima, Huila, Caldas &amp; Nariño</p>
                  </div>
                </div>

                <p className="featured-bean-summary">
                  {origenBean.tagline}
                </p>

                {/* Flavor Notes Pills */}
                <div className="flavor-notes-pill-group">
                  {origenBean.notes.map((note) => (
                    <span key={note} className="flavor-pill emerald-glow">
                      ✦ {note}
                    </span>
                  ))}
                </div>

                {/* Quick Sensory Meters */}
                <div className="bean-metrics-row">
                  <div className="metric-box">
                    <span className="metric-lbl">SWEETNESS</span>
                    <div className="metric-bar-bg">
                      <div className="metric-fill" style={{ width: `${origenBean.stats.sweetness}%` }} />
                    </div>
                    <span className="metric-val">{(origenBean.stats.sweetness / 10).toFixed(1)}/10</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-lbl">HONEY FLORAL</span>
                    <div className="metric-bar-bg">
                      <div className="metric-fill" style={{ width: `${origenBean.stats.aroma}%` }} />
                    </div>
                    <span className="metric-val">{(origenBean.stats.aroma / 10).toFixed(1)}/10</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-lbl">BODY</span>
                    <div className="metric-bar-bg">
                      <div className="metric-fill" style={{ width: `${origenBean.stats.body}%` }} />
                    </div>
                    <span className="metric-val">{(origenBean.stats.body / 10).toFixed(1)}/10</span>
                  </div>
                </div>

                <div className="featured-bean-actions">
                  <button 
                    type="button" 
                    className="action-btn view-lore-btn"
                    onClick={() => setSelectedBeanForModal(origenBean)}
                  >
                    <span>Read Traceability Story</span>
                    <span className="btn-icon">📖</span>
                  </button>
                  <a 
                    href="#menu" 
                    className="action-btn brew-btn"
                    onClick={() => {
                      if (onSelectBeanForDrink) onSelectBeanForDrink(origenBean.name);
                    }}
                  >
                    <span>Order Drinks with This Bean</span>
                    <span className="btn-icon">☕</span>
                  </a>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Other Roasters Grid in Glassmorphic Cards */}
        <div className="other-roasters-container">
          <div className="other-roasters-title-row">
            <h4 className="other-roasters-heading">EXPLORE MORE ROASTER PARTNERS</h4>
            <span className="roasters-count">{coffeeBeans.length} Artisan Profiles Available</span>
          </div>

          <div className="other-roasters-grid">
            {coffeeBeans.filter(b => b.id !== "partaker" && b.id !== "el-origen").map(bean => (
              <div 
                key={bean.id} 
                className="mini-roaster-glass-card"
                onClick={() => setSelectedBeanForModal(bean)}
              >
                <div className="mini-card-logo">
                  <img src={bean.logo} alt={bean.name} />
                </div>
                <div className="mini-card-info">
                  <div className="mini-card-title-row">
                    <h5 className="mini-bean-name">{bean.name}</h5>
                    <span className="mini-roast-pill">{bean.roast}</span>
                  </div>
                  <p className="mini-origin">{bean.origin}</p>
                  <div className="mini-notes-row">
                    {bean.notes.slice(0, 2).map(n => (
                      <span key={n} className="mini-note-tag">{n}</span>
                    ))}
                  </div>
                </div>
                <div className="mini-card-arrow">↗</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bean Lore Modal */}
        {selectedBeanForModal && (
          <div className="modal-overlay" onClick={() => setSelectedBeanForModal(null)}>
            <div className="modal-content bean-lore-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="header-info">
                  <span className="dossier-eyebrow">{selectedBeanForModal.tier}</span>
                  <h2>{selectedBeanForModal.name}</h2>
                  <p>{selectedBeanForModal.origin} &bull; Sourced: {selectedBeanForModal.roasted}</p>
                </div>
                <button 
                  type="button" 
                  className="close-btn" 
                  onClick={() => setSelectedBeanForModal(null)}
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              <div className="dossier-modal-body">
                {/* Roaster seal & notes */}
                <div className="dossier-hero-banner">
                  <div className="dossier-modal-logo">
                    <img src={selectedBeanForModal.logo} alt={selectedBeanForModal.name} />
                  </div>
                  <div className="dossier-modal-meta">
                    <p className="dossier-tagline-text">{selectedBeanForModal.tagline}</p>
                    <div className="dossier-note-tags">
                      {selectedBeanForModal.notes.map(note => (
                        <span key={note} className="note-perk-tag">✦ {note}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Lore / Story (supports full paragraphs) */}
                <div className="dossier-lore-section">
                  <h4 className="dossier-section-title">ORIGIN &amp; ROASTER HERITAGE</h4>
                  <div className="dossier-lore-paragraphs">
                    {selectedBeanForModal.description.split("\n\n").map((para, i) => (
                      <p key={i} className="lore-paragraph">{para}</p>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="dossier-stats-section">
                  <div className="stats-section-header">
                    <h4>SENSORY PROFILE SCORES</h4>
                    <span className="stats-subtitle">Lab Cupping Evaluation</span>
                  </div>
                  <div className="stat-bars-container">
                    <div className="stat-row">
                      <div className="stat-meta">
                        <span className="stat-name">Acidity &amp; Brightness</span>
                        <span className="stat-value">{(selectedBeanForModal.stats.acidity / 10).toFixed(1)} / 10</span>
                      </div>
                      <div className="stat-track">
                        <div className="stat-fill" style={{ width: `${selectedBeanForModal.stats.acidity}%` }} />
                      </div>
                    </div>
                    <div className="stat-row">
                      <div className="stat-meta">
                        <span className="stat-name">Natural Sweetness</span>
                        <span className="stat-value">{(selectedBeanForModal.stats.sweetness / 10).toFixed(1)} / 10</span>
                      </div>
                      <div className="stat-track">
                        <div className="stat-fill" style={{ width: `${selectedBeanForModal.stats.sweetness}%` }} />
                      </div>
                    </div>
                    <div className="stat-row">
                      <div className="stat-meta">
                        <span className="stat-name">Body &amp; Mouthfeel</span>
                        <span className="stat-value">{(selectedBeanForModal.stats.body / 10).toFixed(1)} / 10</span>
                      </div>
                      <div className="stat-track">
                        <div className="stat-fill" style={{ width: `${selectedBeanForModal.stats.body}%` }} />
                      </div>
                    </div>
                    <div className="stat-row">
                      <div className="stat-meta">
                        <span className="stat-name">Aromatic Complexity</span>
                        <span className="stat-value">{(selectedBeanForModal.stats.aroma / 10).toFixed(1)} / 10</span>
                      </div>
                      <div className="stat-track">
                        <div className="stat-fill" style={{ width: `${selectedBeanForModal.stats.aroma}%` }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="dossier-modal-footer">
                  <a 
                    href="#menu" 
                    className="cta-button primary-glass"
                    onClick={() => {
                      if (onSelectBeanForDrink) onSelectBeanForDrink(selectedBeanForModal.name);
                      setSelectedBeanForModal(null);
                    }}
                  >
                    <span>Brew with {selectedBeanForModal.name}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
