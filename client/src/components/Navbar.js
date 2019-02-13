import React from 'react';
import logo from '../images/logo/logo_male.png';
import LanguageNavBar from './navbar/Language';
import AboutNavBar from './navbar/About';

class Navbar extends React.Component {

    onVisibleChange = (e) => {
        this.onClose()
        this.onVisibleNav(e)
    }

    onVisibleNav = (e) => {
        const nav = document.querySelector('.navbar-expand-lg')
        const navHeight = nav.clientHeight;
        const dropdown = document.querySelector(`.${e.target.id}`)
        dropdown.classList.add('show')
        dropdown.style.position = "absolute"
        dropdown.style.top = `${navHeight}px`
    }

    onClose = () => {
        const show = document.querySelectorAll('.show')
        if (show.length) {
            show.forEach(item => {
                item.classList.remove('show')
            })
        }
    }


    render () {
        return (
            <div className="nav-bar container-fluid">
                <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
                    <div className="container">
                        <a className="navbar-brand" href="#test"><img src={logo} alt="logo"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="any-questions">
                            <i className="fas fa-user-nurse fa-2x"></i>
                            <div>
                                <p>Do you have any questions?</p>
                                <span>+00 000 000 000</span>
                            </div>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto">
                                <a id="language-dropdown-menu" className="nav-item nav-link" onClick={this.onVisibleChange} href="#test">Language</a>
                                <a id="about-dropdown-menu" className="nav-item nav-link" onClick={this.onVisibleChange} href="#test">About</a>
                            </div>
                        </div>
                    </div>
                </nav>

                <LanguageNavBar close={this.onClose} />
                <AboutNavBar close={this.onClose} />
            </div>
        );
    }
}

export default Navbar;