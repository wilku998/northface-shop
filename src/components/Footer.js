import React from 'react';

const Footer = () => (
    <div className="footer-container">
        <div className="footer row">
            <div className="footer__item">
                <h3 className="footer__h">Contact</h3>
                <ul className="footer__list">
                    <li>E-mail: wilkbartosz98@wp.pl</li>
                    <li>Telephone: 570706596</li>
                </ul>
            </div>
            <div className="footer__item">
                <h3 className="footer__h">About</h3>
                <p>
                    This site was created only for eductional purposes, the presetend offers are fictious.
                </p>
            </div>
            <div className="footer__item">
                <h3 className="footer__h">Privacy politcy</h3>
                <p>
                    All rights reserved
                </p>
            </div>
        </div>
    </div>
)

export default Footer;