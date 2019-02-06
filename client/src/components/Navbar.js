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

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                            <a className="nav-link" href="#test">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#test">Link</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled" href="#test" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;