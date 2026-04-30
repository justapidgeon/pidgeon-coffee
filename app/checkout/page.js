"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { sendOrderNotification } from "../../lib/notifications";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [isOrdering, setIsOrdering] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal.toFixed(2);

  const handleCompleteOrder = async () => {
    setIsOrdering(true);
    
    // 1. Fire notification
    await sendOrderNotification({
      items: cartItems,
      total: total
    });

    // 2. Clear cart and show success state (locally)
    // In a real app, you might wait for Venmo success, but here we redirect immediately.
    const orderNote = `Pidgeon Coffee Order: ${cartItems.map(i => i.name).join(", ")}`;
    const venmoUrl = `venmo://paycharge?txn=pay&recipients=justapidgeon&amount=${total}&note=${encodeURIComponent(orderNote)}`;

    // 3. Clear cart
    clearCart();
    setIsOrdered(true);

    // 4. Redirect to Venmo
    window.location.href = venmoUrl;
  };

  if (isOrdered) {
    return (
      <div className="checkout-container success">
        <div className="glass-card success-content fade-in">
          <div className="success-icon">☕</div>
          <h1>Brewing Initiated</h1>
          <p>We've sent your order details to our baristas. Please ensure payment is completed via Venmo.</p>
          <Link href="/" className="back-home">Return to Sanctuary</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <header className="checkout-header">
          <Link href="/" className="back-link">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Menu
          </Link>
          <h1 className="logo-brand">Checkout</h1>
        </header>

        <div className="checkout-content">
          {cartItems.length === 0 ? (
            <div className="empty-checkout glass-card fade-in">
              <p>Your sanctuary is empty. Add some brew first.</p>
              <Link href="/" className="cta-button">Browse Menu</Link>
            </div>
          ) : (
            <div className="checkout-form-container fade-in">
              <div className="glass-card order-summary-focused">
                <h2 className="section-title">Your Order Summary</h2>
                <div className="order-items-list">
                  {cartItems.map((item) => (
                    <div key={item.cartId} className="checkout-item">
                      <div className="item-info">
                        <span className="item-qty">{item.quantity}x</span>
                        <div className="item-name-group">
                          <h3>{item.name}</h3>
                          <p className="item-details">
                            {item.customizations.size} • {item.customizations.temp} • {item.customizations.milk}
                          </p>
                        </div>
                      </div>
                      <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="checkout-totals">
                  <div className="total-row">
                    <span>Subtotal</span>
                    <span>${total}</span>
                  </div>
                  <div className="total-row main-total">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>

                <div className="venmo-incentive">
                  <p>Secure payment via <strong>Venmo</strong></p>
                  <span className="handle">@justapidgeon</span>
                </div>

                <button 
                  onClick={handleCompleteOrder} 
                  className="complete-order-btn"
                  disabled={isOrdering}
                >
                  {isOrdering ? "Initiating..." : "Complete Order & Pay"}
                </button>
                
                <p className="disclaimer">
                  Clicking "Complete Order" will open your Venmo app and notify the barista immediately.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
