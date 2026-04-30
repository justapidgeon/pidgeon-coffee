"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function CartSidebar() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>&times;</button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-icon">☕</span>
              <p>Your cart is empty.</p>
              <button 
                className="start-shopping"
                onClick={() => setIsCartOpen(false)}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.cartId} className="cart-item">
                  <div className="cart-item-header">
                    <h3 className="item-name">{item.name}</h3>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.cartId)}
                    >
                      Remove
                    </button>
                  </div>
                  
                  <ul className="item-customizations">
                    {Object.entries(item.customizations).map(([key, val]) => (
                      <li key={key}>{key}: {val}</li>
                    ))}
                  </ul>

                  <div className="cart-item-footer">
                    <div className="qty-controls">
                      <button onClick={() => updateQuantity(item.cartId, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.cartId, 1)}>+</button>
                    </div>
                    <span className="item-subtotal">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="total-row">
              <span>Subtotal</span>
              <span className="total-amount">${cartTotal.toFixed(2)}</span>
            </div>
            <Link href="/checkout" onClick={() => setIsCartOpen(false)} className="checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        .cart-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          justify-content: flex-end;
        }
        .cart-panel {
          width: 100%;
          max-width: 400px;
          background: var(--bg);
          height: 100%;
          display: flex;
          flex-direction: column;
          animation: slideInRight 0.3s ease-out;
          border-left: 1px solid var(--border);
        }
        .cart-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cart-header h2 {
          font-size: 1.5rem;
          color: var(--accent);
        }
        .close-btn {
          font-size: 2rem;
          color: var(--text-muted);
        }
        .cart-body {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
        }
        .empty-cart {
          text-align: center;
          margin-top: 4rem;
        }
        .empty-icon {
          font-size: 4rem;
          display: block;
          margin-bottom: 1rem;
          opacity: 0.5;
        }
        .start-shopping {
          margin-top: 1.5rem;
          color: var(--accent);
          font-weight: 600;
          text-decoration: underline;
        }
        .cart-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .cart-item {
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border);
        }
        .cart-item-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }
        .item-name {
          font-size: 1.1rem;
          color: var(--text);
        }
        .remove-btn {
          font-size: 0.8rem;
          color: #ff6b6b;
          opacity: 0.8;
        }
        .remove-btn:hover {
          opacity: 1;
        }
        .item-customizations {
          list-style: none;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        .item-customizations li {
          text-transform: capitalize;
        }
        .cart-item-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .qty-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--surface);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
        }
        .qty-controls button {
          color: var(--accent);
          font-size: 1.2rem;
          padding: 0 5px;
        }
        .item-subtotal {
          font-weight: 600;
          color: var(--text);
        }
        .cart-footer {
          padding: 1.5rem;
          background: var(--surface);
          border-top: 1px solid var(--border);
        }
        .total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          font-family: var(--font-heading);
        }
        .total-amount {
          color: var(--accent);
          font-weight: 700;
        }
        .checkout-btn {
          display: block;
          width: 100%;
          background: var(--accent);
          color: var(--bg);
          text-align: center;
          padding: 1.25rem;
          border-radius: 12px;
          font-weight: 700;
          transition: var(--transition);
        }
        .checkout-btn:hover {
          background: var(--accent-muted);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
