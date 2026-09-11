"use client";

import { useState, useEffect } from "react";
import { customizationOptions, getDrinkImageUrl } from "../data/menu";
import { useCart } from "../context/CartContext";

export default function CustomizeModal({ item, onClose }) {
  const { addToCart } = useCart();
  const [selections, setSelections] = useState({
    size: "Small",
    temperature: "Hot",
    milk: item.defaultMilk || (item.allowedOptions?.includes("milk") ? "Whole" : "None"),
    roast: "Medium",
    sweetness: "None"
  });
  const [quantity, setQuantity] = useState(1);

  // Dynamic image calculation
  const targetImageUrl = getDrinkImageUrl(item, selections) || item.image;
  const isMilkNone = item.allowedOptions?.includes("milk") && selections.milk === "None";

  // Preload all combinations for this drink on mount so switches are instantaneous
  useEffect(() => {
    if (!item) return;
    const sizes = customizationOptions.size;
    const roasts = item.allowedOptions?.includes("roast") ? customizationOptions.roast : ["Medium"];
    const temps = item.allowedOptions?.includes("temperature") ? customizationOptions.temperature : ["Hot"];
    const milks = item.allowedOptions?.includes("milk") ? (item.milkOptions || customizationOptions.milk) : ["None"];

    sizes.forEach(s => {
      roasts.forEach(r => {
        temps.forEach(t => {
          milks.forEach(m => {
            const url = getDrinkImageUrl(item, { size: s, roast: r, temperature: t, milk: m });
            if (url) {
              const img = new Image();
              img.src = url;
            }
          });
        });
      });
    });
  }, [item]);

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
        }
        filteredSelections[key] = value;
      }
    });

    addToCart({ ...item, price: currentItemPrice, image: targetImageUrl }, filteredSelections, quantity);
    onClose();
  };

  // Preview badge pills indicating currently active attributes
  const previewBadges = [];
  if (selections.size) previewBadges.push(selections.size);
  if (item.allowedOptions?.includes("temperature")) previewBadges.push(selections.temperature);
  if (item.allowedOptions?.includes("roast")) previewBadges.push(`${selections.roast} Roast`);
  if (item.allowedOptions?.includes("milk") && selections.milk !== "None") previewBadges.push(`${selections.milk} Milk`);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="header-info">
            <h2>Customize</h2>
            <p className="modal-item-name" style={{ fontSize: '1.25rem', color: 'var(--text)', fontWeight: '600', marginTop: '0.25rem' }}>{item.name}</p>
            <p className="modal-item-desc" style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5', maxWidth: '400px' }}>{item.description}</p>
          </div>
          <button className="close-btn" onClick={onClose}>&times;</button>
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
              >-</button>
              <span className="qty-display">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="qty-btn"
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
    </div>
  );
}
