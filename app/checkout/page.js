"use client";

import { useCart } from "../../context/CartContext";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleVenmoPayment = () => {
    const venmoHandle = "justapidgeon";
    const amount = cartTotal.toFixed(2);
    const note = encodeURIComponent("Pidgeon Coffee Order: " + cartItems.map(i => i.name).join(", "));
    
    // Venmo deep link
    const venmoUrl = `venmo://paycharge?txn=pay&recipients=${venmoHandle}&amount=${amount}&note=${note}`;
    
    // Attempt to open Venmo app
    window.location.href = venmoUrl;

    // Fallback/Simulate order complete
    setTimeout(() => {
      setIsOrdered(true);
      clearCart();
    }, 2000);
  };

  if (isOrdered) {
    return (
      <div className="checkout-container success">
        <div className="success-content fade-in">
          <div className="success-icon">☕✨</div>
          <h1>Order Placed!</h1>
          <p>Thank you for supporting Pidgeon Coffee. Your brew is being prepared with heart.</p>
          <Link href="/" className="back-home">Back to Menu</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <header className="checkout-header">
          <Link href="/" className="back-link">&larr; Back to Menu</Link>
          <h1>Checkout</h1>
        </header>

        {cartItems.length === 0 ? (
          <div className="empty-state">
            <p>Your cart is empty. Let's find some coffee!</p>
            <Link href="/" className="go-shop">Browse Menu</Link>
          </div>
        ) : (
          <div className="checkout-grid">
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="summary-items">
                {cartItems.map((item) => (
                  <div key={item.cartId} className="summary-item">
                    <div className="item-info">
                      <span className="qty">{item.quantity}x</span>
                      <div>
                        <h3>{item.name}</h3>
                        <p className="customs">
                          {Object.values(item.customizations).join(" • ")}
                        </p>
                      </div>
                    </div>
                    <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="total-block">
                <div className="total-row">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="total-row">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>
                <div className="total-row grand-total">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="payment-options">
              <h2>Payment</h2>
              <p className="payment-desc">
                Payment is processed via Venmo for a seamless homegrown experience.
              </p>
              
              <div className="venmo-card">
                <div className="venmo-header">
                  <span className="venmo-logo">Venmo</span>
                  <span className="handle">@justapidgeon</span>
                </div>
                <button className="venmo-btn" onClick={handleVenmoPayment}>
                  Pay with Venmo
                </button>
                <p className="note">Order will be confirmed after payment is received.</p>
              </div>

              <div className="alternative">
                <p>Problems with the app? Pay manually to <strong>@justapidgeon</strong> and we'll match your order!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
