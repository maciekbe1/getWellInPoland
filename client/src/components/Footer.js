import React from 'react';

const Footer = () => {
    return (
        <div className="footer container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <ul className="bottom-nav">
                            <li className="first">Imprint</li>
                            <li>About us</li>
                            <li>Blog</li>
                            <li>Second Opinion</li>
                            <li>Business</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Help</li>
                        </ul>

                        <p className="footer-notice">By using our site, you agree to our <a href="#test">Terms and Conditions</a> and <a href="#test">Privacy Policy</a>. Get Well in Poland does not provide medical advice, diagnosis or treatment. The information provided on this site is designed to support, not replace, the relationship that exists between a patient/site visitor and his/her existing physician.
                        </p>

                        <p className="copyright">Copyright 2019 © Get Well in Poland GmbH</p>

                        <div className="language-select-container">
                            This page is also available in:
                            <ul className="bottom-nav-language">
                                <li>English</li>
                                <li>Deutsch</li>
                                <li>Français</li>
                                <li>Español</li>
                                <li>Italiano</li>
                                <li>Русский</li>
                                <li>العربية</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-icons col-sm-4">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin-in"></i>
                        <i className="fab fa-google-plus-g"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;