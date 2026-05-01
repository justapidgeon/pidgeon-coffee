"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav className="navbar" style={{ background: 'transparent', border: 'none', backdropFilter: 'none' }}>
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
