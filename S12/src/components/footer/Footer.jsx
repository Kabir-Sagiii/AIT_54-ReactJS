import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>KidzyMart</h2>
          <p>
            Your favorite destination for trendy kids fashion, toys, and
            accessories with fun shopping experiences.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/categories">Categories</a>
            </li>
            <li>
              <a href="/offers">Offers</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Customer Support</h3>
          <ul>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/faq">FAQs</a>
            </li>
            <li>
              <a href="/shipping">Shipping</a>
            </li>
            <li>
              <a href="/returns">Returns</a>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe for latest kids fashion updates and offers.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 KidzyMart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
