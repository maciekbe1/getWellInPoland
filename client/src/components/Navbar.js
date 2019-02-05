import React from 'react';
import logo from '../images/logo/logo_male.png';

const Navbar = () => {
    return (
        <div className="nav-bar container-fluid">
            <nav class="container-fluid navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <a class="navbar-brand" href="#test"><img src={logo} alt="logo"/></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                            <a class="nav-link" href="#test">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#test">Link</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link disabled" href="#test" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>            
            </nav>
        </div>
    );
}

export default Navbar;