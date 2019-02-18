import React from 'react';
import logo from '../images/logo/logo_male.png';
// import LanguageNavBar from './navbar/Language';
// import AboutNavBar from './navbar/About';

class Navbar extends React.Component {

    render () {
        return (
            <div className="nav-bar container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#test"><img src={logo} alt="logo"/></a>

                        <div className="any-questions">
                            <i className="fas fa-user-nurse fa-2x"></i>
                            <div>
                                <p>Do you have any questions?</p>
                                <span>+00 000 000 000</span>
                            </div>
                        </div>

                        <div className="nav-btn text-center">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#test" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        About
                                    </a>
                                    <div className="dropdown-menu container-fluid" aria-labelledby="navbarDropdown">
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
}

export default Navbar;