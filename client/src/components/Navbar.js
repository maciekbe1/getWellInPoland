import React from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/images/logo/logo_male.png';
import axios from 'axios';
import sha256 from 'js-sha256';
import SignIn from './navbar/SignIn';
import {AuthConsumer} from "./context/AuthContext";

class Navbar extends React.Component {
    state = {
        login: null,
        password: null,
        token: null,
        wrongData: false
    };

    changeLanguage = (e) => {
        this.props.changeLanguage(e.target.value);
    };

    onSignInHandle = () => {
        let data = window.btoa(`${this.state.login}:${this.state.password}`);
        axios({
            method: 'post',
            url: 'http://localhost/index.php/restApi/generateJWT',
            data: {
                "user-key" : data
            }
        })
            .then( response => {
                console.log(response);
                this.setState({
                    token: response.data.token,
                    wrongData: false
                })
                sessionStorage.setItem('token', response.data.token);
                document.querySelector('#closeLoginModal').click();
                document.querySelector('#login').value = '';
                document.querySelector('#password').value = '';
            })
            .catch(error => {
                console.log(error);
                this.setState({wrongData: true})
            })
    }

    onLoginHandle = (data) => {
        this.setState({login: data})
    }

    onPasswordHandle = (data) => {
        let password = sha256(data);
        this.setState({password: password})
    }

    render () {
        const signInButton = (!this.state.token
            ? <a className="nav-link" href="#test" data-toggle="modal" data-target="#loginModal" onClick={(e) => e.preventDefault()}>Sign in</a>
            : <Link className="nav-link" to="/" onClick={() => {
                this.setState({
                    login: null,
                    password: null,
                    token: null
                })
                sessionStorage.removeItem('token');
            }}>Sign out</Link> );
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
                                    {/*{signInButton}*/}
                                    {({ isAuth, login, logout }) => (
                                        <div>
                                        {isAuth ? (
                                                <ul>
                                                    <Link to="/clinics">
                                                        clinics
                                                    </Link>
                                                    <button onClick={logout}>logout</button>
                                                </ul>
                                            ) : (
                                                <button onClick={login}>login</button>
                                            )}
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

                    <SignIn signIn={this.onSignInHandle} login={this.onLoginHandle} password={this.onPasswordHandle} wrongText={this.state.wrongData}/>

            </nav>
            </div>
        );
    }
}

export default Navbar;