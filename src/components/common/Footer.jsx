import React from 'react'

import './styles/footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-links">
            <ul className="footer-nav-link-list">
                <li className="footer-nav-link-item">
                    <a>Home</a>
                </li>
                <li className="footer-nav-link-item">
                    <a>About</a>
                </li>
                <li className="footer-nav-link-item">
                    <a>Projects</a>
                </li>
                <li className="footer-nav-link-item">
                    <a>Articles</a>
                </li>
                <li className="footer-nav-link-item">
                    <a>Contact</a>
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