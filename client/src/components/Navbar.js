import React from 'react';
import {Link} from "react-router-dom";
import '../assets/styles/navbar.scss'

import logo from '../assets/images/logo/logo_male.png';
import SignIn from './navbar/SignIn';
import {AuthConsumer} from "./context/AuthContext";

class Navbar extends React.Component {
    changeLanguage = (e) => {
        this.props.changeLanguage(e.target.value);
    };
    render () {
        return (
            <div className="nav-bar container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo"/>
                        </Link>
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
                            <AuthConsumer>
                                {(context) => (
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            {
                                                context.isAuth
                                                    ? <a className="nav-link" href="#test" onClick={(e) => e.preventDefault()}>Logged in as: <span className="logged-as-name">{context.name.toLowerCase()}</span></a>
                                                    : null
                                            }
                                        </li>
                                        <li className="nav-item">
                                            {
                                                !context.isAuth
                                                    ? <a className="nav-link" href="#test" data-toggle="modal" data-target="#loginModal" onClick={(e) => e.preventDefault()}>Sign in</a>
                                                    : <Link className="nav-link" to="/" onClick={context.signOut}>Sign out</Link>
                                            }
                                        </li>
                                    </ul>
                                )}
                            </AuthConsumer>
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
                                <li className="nav-item">
                                    <AuthConsumer>
                                        {({ isAuth, login, logout }) => (
                                            <div>
                                                {
                                                    isAuth
                                                        ? <Link className="nav-link" to="/allClinics">Clinics</Link>
                                                        : null
                                                }
                                            </div>
                                        )}
                                    </AuthConsumer>
                                </li>
                                <li className="nav-item nav-link">
                                    <select onChange={this.changeLanguage} value={this.props.language} className="nav-lang-change">
                                        {this.props.languages.map((lang, index) => {
                                            return <option value={lang} key={index} >{lang.toUpperCase()}</option>
                                        })}
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <SignIn />
                </nav>
            </div>
        );
    }
}

export default Navbar;