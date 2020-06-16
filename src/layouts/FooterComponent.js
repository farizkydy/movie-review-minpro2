import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/sass/FooterComponent.scss";

const FooterComponent = () => {
    return (
        <div className="footer-container">
            <div className="footer-container__list">
                <div className="footer-container__left">
                    <div className="footer-container__logo">
                        <h1><span className="footer-title">MOVIE</span> HUB</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="footer-container__center">
                    <li>Tentang Kami</li>
                    <li>Blog</li>
                    <li>Layanan</li>
                    <li>Karir</li>
                    <li>Pusat Media</li>
                </div>
                <div className="footer-container__right">
                    <p>Download</p>
                    <div className="mobile-download">
                        <img src={require('../assets/images/google-play-get-it-on.png')} alt="google-playstore" id="image1" />
                        <img src={require('../assets/images/app-store-download-it.png')} alt="app-store" id="image2" />
                    </div>
                    <p>Social Media</p>
                    <div className="social-media">
                        <img src={require('../assets/images/facebook-logo.png')} alt="facebook" />
                        <img src={require('../assets/images/pinterest-logo.png')} alt="pinterest" />
                        <img src={require('../assets/images/instagram-logo.png')} alt="instagram" />

                    </div>
                </div >
            </div >
            <div className="copyright">
                <hr />
                <p>Copyright 1999 - N/A MovieHUB. All Right Reserved</p>
            </div>
        </div >
    )
}

export default FooterComponent;
