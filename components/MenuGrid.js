"use client";

import { useState } from "react";
import { menuItems } from "../data/menu";
import CustomizeModal from "./CustomizeModal";

export default function MenuGrid() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Freshly Brewed</h2>
          <p className="section-subtitle">Roasted with care, brewed for you.</p>
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="menu-card fade-in"
              onClick={() => setSelectedItem(item)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-image">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1rem' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span style={{ display: 'none' }}>☕</span>
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3 className="item-name">{item.name}</h3>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                </div>
                <p className="item-desc">{item.description}</p>
                <button className="add-button">
                  Customize & Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <CustomizeModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </section>
  );
}
