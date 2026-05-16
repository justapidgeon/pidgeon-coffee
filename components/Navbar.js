"use client";

import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={!isScrolled ? { background: 'transparent', border: 'none', backdropFilter: 'none', boxShadow: 'none' } : {}}>
      <div className="container nav-content">
        <Link href="/" className="logo-brand">
          pidgeon coffee.
        </Link>
        
        <div className="nav-links" style={{ textTransform: 'capitalize', fontSize: '0.9rem', letterSpacing: '0.02em' }}>
          <Link href="/#menu">Menu</Link>
          <button 
            onClick={() => setIsCartOpen(true)} 
            className="cart-trigger" 
            style={{ padding: '0', marginLeft: '1rem' }}
          >
            Cart ({cartCount})
          </button>
        </div>
      </div>
    </nav>
  );
}
