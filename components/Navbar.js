"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav className="navbar" style={{ background: 'transparent', border: 'none', backdropFilter: 'none' }}>
      <div className="container nav-content">
        <Link href="/" className="logo-brand">
          pidgeon.
        </Link>
        
        <div className="nav-links" style={{ textTransform: 'capitalize', fontSize: '0.9rem', letterSpacing: '0.02em' }}>
          <Link href="/#menu">Work</Link>
          <Link href="/#menu">Commissions</Link>
          <button 
            onClick={() => setIsCartOpen(true)} 
            className="cart-trigger" 
            style={{ padding: '0', marginLeft: '1rem' }}
          >
            Contact ({cartCount})
          </button>
        </div>
      </div>
    </nav>
  );
}
