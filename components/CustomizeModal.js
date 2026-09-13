"use client";

import { useState, useEffect } from "react";
import { customizationOptions, getDrinkImageUrl, coffeeBeans } from "../data/menu";
import { useCart } from "../context/CartContext";

export default function CustomizeModal({ item, onClose }) {
  const { addToCart } = useCart();
  const [selections, setSelections] = useState({
    size: "Small",
    temperature: "Hot",
    milk: item.defaultMilk || (item.allowedOptions?.includes("milk") ? "Whole" : "None"),
    bean: item.allowedOptions?.includes("bean") ? coffeeBeans[0].name : undefined,
    sweetness: "None"
  });
  const [quantity, setQuantity] = useState(1);
  const [inspectingBean, setInspectingBean] = useState(null);

  // Dynamic image calculation
  const targetImageUrl = getDrinkImageUrl(item, selections) || item.image;
  const isMilkNone = item.allowedOptions?.includes("milk") && selections.milk === "None";

  // Preload relevant drink combinations with a delay to keep modal animations at 60fps
  useEffect(() => {
    if (!item) return;
    const timer = setTimeout(() => {
      const roasts = item.allowedOptions?.includes("bean")
        ? [...new Set(coffeeBeans.map(b => b.imageRoast))]
        : (item.allowedOptions?.includes("roast") ? customizationOptions.roast : ["Medium"]);
      const temps = item.allowedOptions?.includes("temperature") ? ["Hot", "Iced"] : ["Hot"];
      const milk = selections.milk || "None";

      roasts.forEach(r => {
        temps.forEach(t => {
          const url = getDrinkImageUrl(item, { size: selections.size, roast: r, temperature: t, milk });
          if (url) {
            const img = new Image();
            img.src = url;
          }
        });
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [item, selections.size, selections.milk]);

  // If milk is set to None, reset sweetness to None
  useEffect(() => {
    if (isMilkNone && selections.sweetness !== "None") {
      setSelections(prev => ({ ...prev, sweetness: "None" }));
    }
  }, [isMilkNone, selections.sweetness]);

  const handleSelection = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  const sizeAdditions = {
    Small: 0,
    Medium: 0.50,
    Large: 1.00
  };
  const currentItemPrice = item.price + (sizeAdditions[selections.size] || 0);

  const baseSizeOz = item.baseSize || 9;
  const sizeOffsets = { Small: -1, Medium: 0, Large: 1 };
  const currentSizeOz = baseSizeOz + (sizeOffsets[selections.size] || 0);
  const availableRoom = currentSizeOz - 2;

  const sweetnessVolumes = {
    "None": 0,
    "Light": 1,
    "Medium": 2,
    "Extra Sweet": 3
  };

  useEffect(() => {
    if (selections.sweetness !== "None") {
      if (sweetnessVolumes[selections.sweetness] > availableRoom) {
        let newSweetness = "None";
        if (availableRoom >= 2) newSweetness = "Medium";
        else if (availableRoom >= 1) newSweetness = "Light";
        setSelections(prev => ({ ...prev, sweetness: newSweetness }));
      }
    }
  }, [selections.size, availableRoom, selections.sweetness]);

  const handleAdd = () => {
    const filteredSelections = {};
    Object.keys(selections).forEach(key => {
      if (!item.allowedOptions || item.allowedOptions.includes(key)) {
        let value = selections[key];
        if (key === 'size') {
          value = `${value} (${currentSizeOz}oz)`;
        } else if (key === 'sweetness' && value !== 'None') {
          const sweetOz = value === 'Light' ? '1 oz' : value === 'Medium' ? '2 oz' : '3 oz';
          value = `${value} (${sweetOz})`;
        } else if (key === 'bean' && activeBeanObj) {
          value = `${value} (${activeBeanObj.roast})`;
        }
        filteredSelections[key] = value;
      }
    });

    addToCart({ ...item, price: currentItemPrice, image: targetImageUrl }, filteredSelections, quantity);
    onClose();
  };

  // Active bean object
  const activeBeanObj = coffeeBeans.find(b => b.name === selections.bean);

  // Preview badge pills indicating currently active attributes
  const previewBadges = [];
  if (selections.size) previewBadges.push(selections.size);
  if (item.allowedOptions?.includes("temperature")) previewBadges.push(selections.temperature);
  if (item.allowedOptions?.includes("bean") && selections.bean) {
    previewBadges.push(`${selections.bean} (${activeBeanObj?.roast || 'Medium'})`);
  } else if (item.allowedOptions?.includes("roast")) {
    previewBadges.push(`${selections.roast} Roast`);
  }
  if (item.allowedOptions?.includes("milk") && selections.milk !== "None") previewBadges.push(`${selections.milk} Milk`);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`modal-content ${inspectingBean ? 'has-dossier' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Customization Section */}
        <div className="modal-customization-pane">
          <div className="modal-header">
            <div className="header-info">
              <h2>Customize</h2>
              <p className="modal-item-name" style={{ fontSize: '1.25rem', color: 'var(--text)', fontWeight: '600', marginTop: '0.25rem' }}>{item.name}</p>
              <p className="modal-item-desc" style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5', maxWidth: '400px' }}>{item.description}</p>
            </div>
            <button className="close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
          </div>

          {/* Dynamic Drink Image Preview Showcase */}
          <div className="drink-preview-card">
            <div className="drink-preview-glow" />
            <img 
              src={targetImageUrl} 
              alt={item.name} 
              className="modal-drink-img"
              decoding="async"
              onError={(e) => {
                if (e.target.src !== item.image) {
                  e.target.src = item.image;
                }
              }}
            />
            {previewBadges.length > 0 && (
              <div className="drink-preview-badge">
                {previewBadges.join(" • ")}
              </div>
            )}
          </div>

          <div className="modal-body">
            {Object.entries(customizationOptions)
              .filter(([key]) => !item.allowedOptions || item.allowedOptions.includes(key))
              .map(([key, defaultOptions]) => {
                // Specialized Coffee Bean Selection
                if (key === "bean") {
                  return (
                    <div key="bean" className="option-group bean-option-group">
                      <div className="option-label-row">
                        <h4 className="option-label">Coffee Bean Selection</h4>
                        <span className="option-label-hint">Tap + for bean stat sheet</span>
                      </div>
                      
                      <div className="bean-selector-grid">
                        {coffeeBeans.map(bean => {
                          const isSelected = selections.bean === bean.name;
                          return (
                            <div 
                              key={bean.id}
                              className={`bean-card ${isSelected ? 'active' : ''}`}
                              onClick={() => handleSelection('bean', bean.name)}
                              role="button"
                              tabIndex={0}
                            >
                              <div className="bean-card-left">
                                <div className="bean-logo-thumb">
                                  <img 
                                    src={bean.logo} 
                                    alt={`${bean.name} logo`} 
                                    loading="lazy"
                                  />
                                </div>
                                <div className="bean-card-meta">
                                  <div className="bean-name-line">
                                    <span className="bean-name">{bean.name}</span>
                                    <span className={`bean-roast-pill roast-${bean.roast.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                                      {bean.roast}
                                    </span>
                                  </div>
                                  <div className="bean-origin-line">
                                    <span>📍 {bean.origin}</span>
                                  </div>
                                </div>
                              </div>

                              <button
                                type="button"
                                className="bean-inspect-btn"
                                title={`View ${bean.name} sensory profile`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setInspectingBean(bean);
                                }}
                                aria-label={`View ${bean.name} profile`}
                              >
                                <span className="inspect-btn-text">Profile</span>
                                <span className="inspect-btn-arrow">↗</span>
                              </button>
                            </div>
                          );
                        })}
                      </div>

                      {activeBeanObj && (
                        <div className="active-bean-summary">
                          <span className="summary-bullet">✦</span>
                          <span className="summary-notes">
                            <strong>{activeBeanObj.name} Tasting Notes:</strong> {activeBeanObj.notes.join(", ")}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                }

                const options = (key === 'milk' && item.milkOptions) ? item.milkOptions : defaultOptions;

                return (
                  <div key={key} className="option-group">
                    <h4 className="option-label">{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                    <div className="option-pills">
                      {options.map(option => {
                        let isDisabled = false;
                        if (key === "sweetness" && option !== "None") {
                          if (isMilkNone || sweetnessVolumes[option] > availableRoom) {
                            isDisabled = true;
                          }
                        }

                        return (
                          <button
                            key={option}
                            className={`pill ${selections[key] === option ? 'active' : ''}`}
                            onClick={() => !isDisabled && handleSelection(key, option)}
                            style={isDisabled ? { opacity: 0.28, cursor: 'not-allowed', textDecoration: 'line-through' } : {}}
                            disabled={isDisabled}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    
                    {key === 'sweetness' && isMilkNone && (
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontStyle: 'italic' }}>
                        Choose Whole or Oat milk to add sweetness.
                      </p>
                    )}

                    {key === 'size' && selections.size && (
                      <div className="option-detail-container">
                        <div key={selections.size} className="slide-down-fade">
                          {currentSizeOz}oz
                        </div>
                      </div>
                    )}

                    {key === 'sweetness' && selections.sweetness !== 'None' && (
                      <div className="option-detail-container">
                        <div key={selections.sweetness} className="slide-down-fade">
                          {selections.sweetness === 'Light' && '1 oz (creamer)'}
                          {selections.sweetness === 'Medium' && '2 oz (creamer)'}
                          {selections.sweetness === 'Extra Sweet' && '3 oz (creamer)'}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

            <div className="quantity-section">
              <h4 className="option-label">Quantity</h4>
              <div className="qty-controls">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="qty-btn"
                  aria-label="Decrease quantity"
                >-</button>
                <span className="qty-display">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="qty-btn"
                  aria-label="Increase quantity"
                >+</button>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <div className="price-total">
              <span className="label">Total</span>
              <span key={currentItemPrice} className="value price-pop">${(currentItemPrice * quantity).toFixed(2)}</span>
            </div>
            <button className="add-to-cart-btn" onClick={handleAdd}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Professional Coffee Bean Profile Card */}
        {inspectingBean && (
          <aside className="bean-dossier-pane fade-in" aria-label="Coffee Bean Sensory Profile">
            {/* Dossier Top Navigation */}
            <div className="dossier-header">
              <button 
                className="dossier-back-mobile" 
                onClick={() => setInspectingBean(null)}
              >
                ← Return to Drink
              </button>
              <div className="dossier-tier-badge">
                {inspectingBean.tier}
              </div>
              <button 
                className="dossier-close-btn" 
                onClick={() => setInspectingBean(null)}
                aria-label="Close profile card"
              >
                &times;
              </button>
            </div>

            {/* Roaster Brand Showcase */}
            <div className="dossier-showcase-card">
              <div className="dossier-logo-glow" />
              <div className="dossier-logo-wrap">
                <img 
                  src={inspectingBean.logo} 
                  alt={inspectingBean.name} 
                  className="dossier-logo-img"
                />
              </div>
              <div className="dossier-title-area">
                <span className="dossier-eyebrow">COFFEE BEAN PROFILE</span>
                <h3 className="dossier-bean-name">{inspectingBean.name}</h3>
                <p className="dossier-tagline">{inspectingBean.tagline}</p>
              </div>
            </div>

            {/* Origin & Roast Specification Chips */}
            <div className="dossier-specs-grid">
              <div className="dossier-spec-card">
                <span className="spec-label">ORIGIN</span>
                <span className="spec-val">{inspectingBean.origin}</span>
              </div>
              <div className="dossier-spec-card">
                <span className="spec-label">ROASTERY</span>
                <span className="spec-val">{inspectingBean.roasted}</span>
              </div>
              <div className="dossier-spec-card">
                <span className="spec-label">ROAST PROFILE</span>
                <span className="spec-val">
                  {inspectingBean.roast}
                  <span className="roast-meter-pips" title={`Roast Level: ${inspectingBean.roastLevel} of 5`}>
                    {[1, 2, 3, 4, 5].map((pip) => (
                      <span 
                        key={pip} 
                        className={`pip ${pip <= inspectingBean.roastLevel ? 'filled' : ''}`}
                      />
                    ))}
                  </span>
                </span>
              </div>
            </div>

            {/* Professional Sensory Profile Stat Bars */}
            <div className="dossier-stats-section">
              <div className="stats-section-header">
                <div>
                  <h4>SENSORY PROFILE</h4>
                  <span className="stats-subtitle">Cupping evaluation & sensory metrics</span>
                </div>
                <span className="stat-level-tag">SCALE 1–10</span>
              </div>

              <div className="stat-bars-container">
                {/* Stat 1: Acidity */}
                <div className="stat-row">
                  <div className="stat-meta">
                    <span className="stat-name">Acidity & Brightness</span>
                    <span className="stat-value">{(inspectingBean.stats.acidity / 10).toFixed(1)}<span className="stat-denom"> / 10</span></span>
                  </div>
                  <div className="stat-track">
                    <div 
                      className="stat-fill" 
                      style={{ width: `${inspectingBean.stats.acidity}%` }} 
                    />
                  </div>
                </div>

                {/* Stat 2: Sweetness */}
                <div className="stat-row">
                  <div className="stat-meta">
                    <span className="stat-name">Natural Sweetness</span>
                    <span className="stat-value">{(inspectingBean.stats.sweetness / 10).toFixed(1)}<span className="stat-denom"> / 10</span></span>
                  </div>
                  <div className="stat-track">
                    <div 
                      className="stat-fill" 
                      style={{ width: `${inspectingBean.stats.sweetness}%` }} 
                    />
                  </div>
                </div>

                {/* Stat 3: Body */}
                <div className="stat-row">
                  <div className="stat-meta">
                    <span className="stat-name">Body & Mouthfeel</span>
                    <span className="stat-value">{(inspectingBean.stats.body / 10).toFixed(1)}<span className="stat-denom"> / 10</span></span>
                  </div>
                  <div className="stat-track">
                    <div 
                      className="stat-fill" 
                      style={{ width: `${inspectingBean.stats.body}%` }} 
                    />
                  </div>
                </div>

                {/* Stat 4: Intensity */}
                <div className="stat-row">
                  <div className="stat-meta">
                    <span className="stat-name">Roast Intensity</span>
                    <span className="stat-value">{(inspectingBean.stats.intensity / 10).toFixed(1)}<span className="stat-denom"> / 10</span></span>
                  </div>
                  <div className="stat-track">
                    <div 
                      className="stat-fill" 
                      style={{ width: `${inspectingBean.stats.intensity}%` }} 
                    />
                  </div>
                </div>

                {/* Stat 5: Aroma */}
                <div className="stat-row">
                  <div className="stat-meta">
                    <span className="stat-name">Aromatic Complexity</span>
                    <span className="stat-value">{(inspectingBean.stats.aroma / 10).toFixed(1)}<span className="stat-denom"> / 10</span></span>
                  </div>
                  <div className="stat-track">
                    <div 
                      className="stat-fill" 
                      style={{ width: `${inspectingBean.stats.aroma}%` }} 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tasting Notes */}
            <div className="dossier-notes-section">
              <h4 className="dossier-section-title">TASTING NOTES</h4>
              <div className="dossier-note-tags">
                {inspectingBean.notes.map((note) => (
                  <span key={note} className="note-perk-tag">
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Roaster Notes & Heritage */}
            <div className="dossier-lore-section">
              <h4 className="dossier-section-title">ROASTER'S PROFILE & HERITAGE</h4>
              <p className="dossier-lore-text">{inspectingBean.description}</p>
            </div>

            {/* Roaster Comparison Switcher */}
            <div className="dossier-switcher-section">
              <span className="switcher-label">EXPLORE OTHER ROASTERS</span>
              <div className="switcher-beans-row">
                {coffeeBeans.map(b => (
                  <button
                    key={b.id}
                    type="button"
                    className={`switcher-bean-thumb ${inspectingBean.id === b.id ? 'active' : ''}`}
                    onClick={() => setInspectingBean(b)}
                    title={`View ${b.name} Profile`}
                  >
                    <img src={b.logo} alt={b.name} />
                  </button>
                ))}
              </div>
            </div>

            {/* Action Footer */}
            <div className="dossier-action-footer">
              <button
                type="button"
                className={`dossier-equip-btn ${selections.bean === inspectingBean.name ? 'equipped' : ''}`}
                onClick={() => {
                  handleSelection('bean', inspectingBean.name);
                }}
              >
                {selections.bean === inspectingBean.name ? (
                  <span>✓ Selected for this Drink</span>
                ) : (
                  <span>Select {inspectingBean.name}</span>
                )}
              </button>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
