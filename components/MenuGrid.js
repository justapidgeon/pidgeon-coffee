"use client";

import { useState } from "react";
import { menuItems } from "../data/menu";
import CustomizeModal from "./CustomizeModal";

export default function MenuGrid({ selectedBeanFilter, onClearBeanFilter }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Hot Coffee", "Specialty"];

  const filteredItems = menuItems.filter(item => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tagline-pill">
            <span className="pill-dot">✦</span>
            <span>HAND-CRAFTED MENU</span>
          </div>
          <h2 className="section-title">Freshly Brewed To Order</h2>
          <p className="section-subtitle">
            Every drink is custom calibrated with your choice of size, temperature, milk, and single-origin beans.
          </p>

          {/* Active bean highlight note if coming from bean showcase */}
          {selectedBeanFilter && (
            <div className="active-bean-banner-glass">
              <span>☕ Selected Bean: <strong>{selectedBeanFilter}</strong> (will be pre-selected when you choose a drink)</span>
              <button 
                type="button" 
                className="banner-clear-btn"
                onClick={onClearBeanFilter}
              >
                Reset
              </button>
            </div>
          )}

          {/* Category Filter Pills */}
          <div className="menu-category-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                className={`category-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="menu-card glass-card fade-in"
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
            >
              <div className="card-image-wrap">
                <div className="card-image-glow" />
                <span className="card-category-tag">{item.category}</span>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  loading="lazy"
                  decoding="async"
                  className="card-drink-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="card-fallback-emoji" style={{ display: 'none' }}>☕</span>
              </div>

              <div className="card-content">
                <div className="card-header">
                  <h3 className="item-name">{item.name}</h3>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                </div>
                
                <p className="item-desc">{item.description}</p>
                
                <div className="card-customization-tags">
                  {item.allowedOptions?.includes("bean") && (
                    <span className="card-spec-pill">Choice of Bean</span>
                  )}
                  {item.allowedOptions?.includes("milk") && (
                    <span className="card-spec-pill">Whole / Oat</span>
                  )}
                  {item.allowedOptions?.includes("temperature") && (
                    <span className="card-spec-pill">Hot / Iced</span>
                  )}
                </div>

                <button className="add-button glass-button" type="button">
                  <span>Customize &amp; Add</span>
                  <span className="btn-plus-icon">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <CustomizeModal 
          item={selectedItem} 
          initialBean={selectedBeanFilter}
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </section>
  );
}
