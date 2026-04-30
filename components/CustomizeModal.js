"use client";

import { useState } from "react";
import { customizationOptions } from "../data/menu";
import { useCart } from "../context/CartContext";

export default function CustomizeModal({ item, onClose }) {
  const { addToCart } = useCart();
  const [selections, setSelections] = useState({
    size: "Medium",
    temperature: "Hot",
    milk: "Whole",
    roast: "Medium",
    sweetness: "None"
  });
  const [quantity, setQuantity] = useState(1);

  const handleSelection = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  const handleAdd = () => {
    addToCart(item, selections, quantity);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="header-info">
            <h2>Customize</h2>
            <p>{item.name}</p>
          </div>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body">
          {Object.entries(customizationOptions).map(([key, options]) => (
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
            <span className="value">${(item.price * quantity).toFixed(2)}</span>
          </div>
          <button className="add-to-cart-btn" onClick={handleAdd}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
