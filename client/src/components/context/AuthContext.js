import React from 'react';
import axios from 'axios';
import sha256 from 'js-sha256';

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
    state = {
        isAuth: false,
        login: null,
        password: null,
        token: null,
        wrongData: false
    };

    // constructor() {
    //     super()
    //     this.login = this.login.bind(this)
    //     this.logout = this.logout.bind(this)
    // }
    componentWillMount() {
        if (sessionStorage.getItem('token')) {
            this.setState({isAuth: true});
        }
    }

    // login() {
    //     localStorage.setItem('token', true);
    //     setTimeout(() => this.setState({ isAuth: true }), 1000)
    // }

    // logout() {
    //     localStorage.removeItem('token');
    //     this.setState({ isAuth: false })
    // }

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
                wrongData: false,
                isAuth: true
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

    onSignOut = () => {
        this.setState({
            login: null,
            password: null,
            token: null,
            isAuth: false
        })
        sessionStorage.removeItem('token');
    }

    render() {
        return (
            <AuthContext.Provider
                value={{
                    isAuth: this.state.isAuth,
                    login: this.onLoginHandle,
                    password: this.onPasswordHandle,
                    signIn: this.onSignInHandle,
                    signOut: this.onSignOut,
                    alert: this.state.wrongData
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer }