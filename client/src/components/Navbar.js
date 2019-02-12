import React from 'react';
import logo from '../images/logo/logo_male.png';

const Navbar = () => {
    return (
        <div className="nav-bar container-fluid">
            <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
                <div className="container">
                    <a className="navbar-brand" href="#test"><img src={logo} alt="logo"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="any-questions">
                        <i class="fas fa-user-nurse fa-2x"></i>
                        <div>
                            <p>Do you have any questions?</p>
                            <span>+00 000 000 000</span>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                                <a className="nav-link dropdown-toggle" href="#test" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About
                                </a>
                                <div className="container-fluid dropdown-menu" aria-labelledby="navbarDropdownMenuLink" onClick={e => {e.stopPropagation(); e.preventDefault()}}>
                                    <div className="container">
                                        <ul>
                                            <li>LANGUAGE & CURRENCY</li>
                                            <li>
                                                <select id="switch-language">
                                                    <option value="en" selected="selected">
                                                        English
                                                    </option>
                                                    <option value="de">
                                                        Deutsch
                                                    </option>
                                                    <option value="fr">
                                                        Français
                                                    </option>
                                                    <option value="es">
                                                        Español
                                                    </option>
                                                    <option value="it">
                                                        Italiano
                                                    </option>
                                                    <option value="ru">
                                                        Русский
                                                    </option>
                                                    <option value="ar">
                                                        العربية
                                                    </option>
                                                </select>
                                            </li>
                                            <li>
                                                <select id="switch-currency">
                                                    <option value="EUR">EUR - €</option>
                                                    <option value="USD">USD - $</option>
                                                    <option value="GBP">GBP - £</option>
                                                    <option value="CHF">CHF - Fr.</option>
                                                    <option value="CAD">CAD - C$</option>
                                                    <option value="AUD">AUD - A$</option>
                                                    <option value="THB">THB - ฿</option>
                                                    <option value="PLN" selected="selected">PLN - zł</option>
                                                    <option value="BRL">BRL - R$</option>
                                                    <option value="MYR">MYR - RM</option>
                                                    <option value="HUF">HUF - Ft.</option>
                                                    <option value="SGD">SGD - S$</option>
                                                    <option value="TRY">TRY - TL</option>
                                                    <option value="AED">AED - د.إ</option>
                                                    <option value="ZAR">ZAR - R</option>
                                                    <option value="MXN">MXN - M$</option>
                                                    <option value="NZD">NZD - NZ$</option>
                                                    <option value="RUB">RUB - руб.</option>
                                                    <option value="ILS">ILS - ₪</option>
                                                    <option value="INR">INR - ₹</option>
                                                    <option value="MAD">MAD - م.</option>
                                                </select>
                                            </li>
                                            <li><button>Update</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link dropdown-toggle" href="#test" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About
                                </a>
                                <div className="container-fluid dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <div className="container">
                                        <ul>
                                            <li><a href="#test">About us</a></li>
                                            <li><a href="#test">How it works</a></li>
                                            <li><a href="#test">Blog</a></li>
                                            <li><a href="#test">Pricing</a></li>
                                            <li><a href="#test">Second Opinion</a></li>
                                            <li><a href="#test">Business</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;