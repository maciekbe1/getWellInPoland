import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import '../assets/styles/navbar.scss'

import logo from '../assets/images/logo/logo_male.png';
import poland from '../assets/images/languages/poland.png';
import uk from '../assets/images/languages/united-kingdom.png';
import SignIn from './navbar/SignIn';
import AuthContext from "./context/auth-context";
import GlobalState from './context/global-context';

const Navbar = () => {
    const authContext = useContext(AuthContext)
    const globalState = useContext(GlobalState);
    const {setLanguage} = globalState

    return (
        <div className="nav-bar container-fluid">
            <div className="bg-light container-fluid">
                <div className="container d-flex justify-content-end languages">
                    <img onClick={() => setLanguage('pl')} className="ml-2 mt-1 p-1" src={poland} alt="poland"/>
                    <img onClick={() => setLanguage('en')} className="ml-2 mt-1 p-1" src={uk} alt="uk"/>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <div className="any-questions">
                        {/*<i className="fas fa-user-nurse fa-2x"></i>*/}
                        {/*<div>*/}
                        {/*    <p>Do you have any questions?</p>*/}
                        {/*    <span>+00 000 000 000</span>*/}
                        {/*</div>*/}
                    </div>
                    <div className="nav-btn text-center">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                {
                                    authContext.isAuth
                                        ? <a className="nav-link" href="#test" onClick={(e) => e.preventDefault()}>Logged in as: <span className="logged-as-name">{authContext.name.toLowerCase()}</span></a>
                                        : null
                                }
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            {
                                authContext.isAuth
                                    ? <li><Link className="nav-link" to="/all-clinics">Clinics</Link></li>
                                    : null
                            }
                            <li className="nav-item">
                                {
                                    !authContext.isAuth
                                        ? <div className="d-flex navbar-nav">
                                            <a className="nav-link" href="/" data-toggle="modal" data-target="#loginModal" onClick={(e) => e.preventDefault()}>Sign in</a>
                                            <Link className="nav-link btn btn-outline-secondary p-1 d-flex align-items-center" to="/register">Sign up</Link>
                                    </div>
                                        : <Link className="nav-link" to="/" onClick={authContext.signOut}>Sign out</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                <SignIn />
            </nav>
        </div>
    );
}

export default Navbar;