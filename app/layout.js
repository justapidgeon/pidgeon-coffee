import "./globals.css";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "Pidgeon Coffee | Small Batch Home Brewing",
  description: "Cozy, natural, and modern coffee experience from @justapidgeon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <CartProvider>
          <div className="layout-wrapper">
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
