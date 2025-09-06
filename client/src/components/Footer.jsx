import './Footer.css'
import React from 'react'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">⚡</span>
            <h2>Ramu UI</h2>
            <p>Ramu UI - Slot UI kit and design system. Made in Figma, for Figma.</p>
          </div>
  
          <div className="footer-links">
            <div>
              <h4>Getting Started</h4>
              <ul>
                <li>Introduction</li>
                <li>Documentation</li>
                <li>Usage</li>
                <li>Global</li>
                <li>API</li>
                <li>Elements</li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>About us</li>
                <li>Careers</li>
                <li>Community</li>
                <li>Customers</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div>
              <h4>Partner</h4>
              <ul>
                <li>For individuals</li>
                <li>For freelancers</li>
                <li>For teams</li>
                <li>For enterprises</li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul>
                <li>Support</li>
                <li>Security</li>
                <li>Help center</li>
                <li>Preferences</li>
                <li>Privacy policy</li>
                <li>Terms of use</li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>©2024 Ramu UI - All rights reserved</p>
          <div className="footer-socials">
            <span>🌐</span>
            <span>🐦</span>
            <span>📸</span>
            <span>💼</span>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  