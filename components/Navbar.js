"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" className="logo-brand">
          Pidgeon Coffee
        </Link>
        
        <div className="nav-links">
          <Link href="/#menu">Menu</Link>
          <button onClick={() => setIsCartOpen(true)} className="cart-trigger">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>

    </nav>
  );
}
