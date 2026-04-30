import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MenuGrid from "../components/MenuGrid";
import CartSidebar from "../components/CartSidebar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MenuGrid />
      <CartSidebar />
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Pidgeon Coffee</h3>
              <p>Home brewing with heart.</p>
            </div>
            <div className="footer-social">
              <p>Follow the journey</p>
              <div className="social-links">
                <span className="social-handle">@justapidgeon</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Pidgeon Coffee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
