"use client";

import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="site-header">
      {/* Top Glass Announcement Bar inspired by Verve & Stone Street */}
      {!bannerDismissed && (
        <div className="announcement-bar">
          <div className="announcement-content">
            <span className="announcement-sparkle">✦</span>
            <span className="announcement-text">
              <strong>FRESH ROAST UPDATE:</strong> El Origen is back in stock &amp; Nicaraguan Fito Montiel Pacamara is now pouring!
            </span>
            <Link href="#beans" className="announcement-link">
              Explore Beans →
            </Link>
          </div>
          <button 
            type="button" 
            className="announcement-close"
            onClick={() => setBannerDismissed(true)}
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Glassmorphic Navigation Bar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <Link href="/" className="logo-brand" aria-label="Pidgeon Coffee Home">
            <div className="logo-avatar-wrap">
              <img 
                src="/pidgeon-logo.png" 
                alt="Pidgeon Coffee Logo" 
                className="logo-avatar-img"
              />
            </div>
            <div className="logo-text-group">
              <span className="logo-lettermark">pidgeon.</span>
              <span className="logo-subline">coffee &amp; micro-roastery</span>
            </div>
          </Link>
          
          <div className="nav-links">
            <Link href="/#menu" className="nav-item-link">Menu</Link>
            <Link href="/#beans" className="nav-item-link">
              Beans <span className="nav-new-pill">New</span>
            </Link>
            <Link href="/#about" className="nav-item-link">Our Story</Link>
            
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="cart-trigger-pill"
              aria-label={`Open shopping cart with ${cartCount} items`}
            >
              <svg 
                className="cart-svg-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <span className="cart-label">Cart</span>
              <span className="cart-pill-count">{cartCount}</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
