import React from 'react'

import './styles/footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-links">
            <ul className="footer-nav-link-list">
                <li className="footer-nav-link-item">
                    <a href="#">Home</a>
                </li>
                <li className="footer-nav-link-item">
                    <a href="#About">About</a>
                </li>
                <li className="footer-nav-link-item">
                    <a href="#Projects">Projects</a>
                </li>
                <li className="footer-nav-link-item">
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </div>

        <div className="footer-credits">
            <div className="footer-credits-text">
                © 2025 Gibran.dev. All Rights Reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer