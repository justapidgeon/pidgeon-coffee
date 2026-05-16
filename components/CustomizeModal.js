"use client";

import { useState } from "react";
import { customizationOptions } from "../data/menu";
import { useCart } from "../context/CartContext";

export default function CustomizeModal({ item, onClose }) {
  const { addToCart } = useCart();
  const [selections, setSelections] = useState({
    size: "Small",
    temperature: "Hot",
    milk: "Whole",
    roast: "Medium",
    sweetness: "None"
  });
  const [quantity, setQuantity] = useState(1);

  const handleSelection = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  const sizeAdditions = {
    Small: 0,
    Medium: 0.50,
    Large: 1.00
  };
  const currentItemPrice = item.price + (sizeAdditions[selections.size] || 0);

  const handleAdd = () => {
    const filteredSelections = {};
    Object.keys(selections).forEach(key => {
      if (!item.allowedOptions || item.allowedOptions.includes(key)) {
        filteredSelections[key] = selections[key];
      }
    });

    addToCart({ ...item, price: currentItemPrice }, filteredSelections, quantity);
    onClose();
  };

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

        <div className="modal-body">
          {Object.entries(customizationOptions)
            .filter(([key]) => !item.allowedOptions || item.allowedOptions.includes(key))
            .map(([key, options]) => (
            <div key={key} className="option-group">
              <h4 className="option-label">{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
              <div className="option-pills">
                {options.map(option => (
                  <button
                    key={option}
                    className={`pill ${selections[key] === option ? 'active' : ''}`}
                    onClick={() => handleSelection(key, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              
              {key === 'size' && selections.size && (
                <div className="option-detail-container">
                  <div key={selections.size} className="slide-down-fade">
                    {selections.size === 'Small' && '8oz'}
                    {selections.size === 'Medium' && '9oz'}
                    {selections.size === 'Large' && '10oz'}
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
          ))}

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
