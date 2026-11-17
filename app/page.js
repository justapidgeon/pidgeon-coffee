"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BeanShowcase from "../components/BeanShowcase";
import MenuGrid from "../components/MenuGrid";
import CartSidebar from "../components/CartSidebar";

export default function Home() {
  const [selectedBeanFilter, setSelectedBeanFilter] = useState(null);

  return (
    <main className="main-wrapper">
      <Navbar />
      <Hero />
      <BeanShowcase 
        onSelectBeanForDrink={(beanName) => setSelectedBeanFilter(beanName)} 
      />
      <MenuGrid 
        selectedBeanFilter={selectedBeanFilter}
        onClearBeanFilter={() => setSelectedBeanFilter(null)}
      />
      <CartSidebar />
      
      {/* Ethos & Craft Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-glass-card">
            <div className="about-grid">
              <div className="about-left">
                <div className="about-mascot-container">
                  <img 
                    src="/pidgeon-logo.png" 
                    alt="Pidgeon Coffee Beanie Mascot" 
                    className="about-mascot-img"
                  />
                </div>
                <div className="about-quote-box">
                  <p className="about-quote">
                    "Great coffee isn't about rushing out the door. It's about slowing down for ten minutes, honoring the farmer's hard work, and pulling a shot that makes your day better."
                  </p>
                  <span className="about-author">— @justapidgeon &bull; Home Roaster &amp; Barista</span>
                </div>
              </div>

              <div className="about-right">
                <span className="about-eyebrow">OUR COFFEE ETHOS</span>
                <h3 className="about-title">Small Batch. Mindful Sourcing. Uncompromising Heart.</h3>
                <p className="about-desc">
                  Pidgeon Coffee started right on the home counter with an obsession for roast precision, dial-in extraction, and supporting producers who care as deeply about the earth as they do about the cup.
                </p>

                <div className="about-pillars">
                  <div className="pillar-item">
                    <div className="pillar-num">01</div>
                    <div className="pillar-text">
                      <h4>Regenerative &amp; Carbon Neutral</h4>
                      <p>From CafeNor's carbon-neutral mill in Metapán to solar-assisted drying patios, our bean selections respect the ecosystems they come from.</p>
                    </div>
                  </div>

                  <div className="pillar-item">
                    <div className="pillar-num">02</div>
                    <div className="pillar-text">
                      <h4>Micro-Lot Separation</h4>
                      <p>We feature award-winning separations like Fito Montiel's Pacamara and certified single-origin Colombian Pink Bourbon lots with transparent provenance.</p>
                    </div>
                  </div>

                  <div className="pillar-item">
                    <div className="pillar-num">03</div>
                    <div className="pillar-text">
                      <h4>Tailored To Your Palate</h4>
                      <p>Every drink is customized to your preferred temperature, organic whole or barista oat milk, and micro-lot roast profile.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand-box">
              <div className="footer-logo-row">
                <img 
                  src="/pidgeon-logo.png" 
                  alt="Pidgeon Coffee" 
                  className="footer-logo-img"
                />
                <span className="footer-brand-title">pidgeon coffee.</span>
              </div>
              <p className="footer-tagline">Home brewing with heart &bull; Small batch roastery</p>
            </div>

            <div className="footer-links-group">
              <div className="footer-nav-col">
                <span className="footer-col-title">Navigation</span>
                <a href="#menu">Drink Menu</a>
                <a href="#beans">Roaster Reserve</a>
                <a href="#about">Our Story</a>
              </div>

              <div className="footer-social-col">
                <span className="footer-col-title">Follow the Brew Journey</span>
                <a 
                  href="https://instagram.com/justapidgeon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-instagram-link"
                >
                  <svg className="social-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span>@justapidgeon</span>
                </a>
                <p className="social-hint">Tag your morning cup &bull; #pidgeoncoffee</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p>&copy; {new Date().getFullYear()} Pidgeon Coffee. All rights reserved. Handcrafted with love.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
