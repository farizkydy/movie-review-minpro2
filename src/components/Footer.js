import React from "react"
import "../assets/styles/Footer.scss"

const Footer = () => {
    return(
        <React.Fragment>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h1>VVIBU REVIEW</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                    <div className="footer-navigation">
                        <h2>About Us</h2>
                        <h2>Blog</h2>
                        <h2>Service</h2>
                        <h2>Karir</h2>
                        <h2>Media Center</h2>
                    </div>
                    <div className="footer-download">
                        <h1>Download</h1>
                        <div className="footer-download-image">
                            <img src={require("../assets/images/gplay.png")} alt="Google Play" className="footer-gplay"></img>
                            <img src={require("../assets/images/apple.png")} alt="App Store" className="footer-app"></img>
                        </div>
                        <h1>Social Media</h1>
                        <img src={require("../assets/images/facebook.png")} alt="Facebook" className="footer-facebook"></img>
                        <img src={require("../assets/images/friendster.png")} alt="Friendster" className="footer-friendster"></img>
                        <img src={require("../assets/images/gplus.png")} alt="Google Plus" className="footer-gplus"></img>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                Copyright © 2020 VVIBU REVIEW. All Rights Reserved
            </div>
        </React.Fragment>
    )
}

export default Footer;