import React from 'react';
import sha256 from 'js-sha256';
import { getToken } from '../../api/api'
import AuthContext from './auth-context'

class AuthProvider extends React.Component {
    state = {
        isAuth: false,
        login: null,
        password: null,
        token: null,
        wrongData: false,
        loading: false
    };

    componentWillMount() {
        const token  = localStorage.getItem('gwtoken');
        const login  = localStorage.getItem('gwlog');

        this.setState({login});

        if (token) {
            const objToken = JSON.parse(window.atob(token));

            if (Date.parse(objToken.expTime) < new Date().getTime()) {
                getToken(objToken.data).then(() => {
                    this.setState({
                        isAuth: true
                    });

                    let expDate = new Date();
                    expDate.setTime(expDate.getTime() + (15 * 60 * 1000));
                    const tokenData = {
                        data: objToken.data,
                        expTime: expDate
                    };

                    const newToken = window.btoa(JSON.stringify(tokenData));
                    localStorage.setItem('gwtoken', newToken);
                })
                    .catch(error => {
                        console.log(error);
                    })
            } else if (Date.parse(objToken.expTime) > new Date().getTime()) {
                this.setState({
                    isAuth: true
                })
            }
        }
    }

    onSignInHandle = () => {
        let userData = window.btoa(`${this.state.login}:${this.state.password}`);
        this.setState({loading: true})
        getToken(userData).then( response => {
            // console.log(response);
            this.setState({
                token: response.data.token,
                wrongData: false,
                isAuth: true,
                loading: false
            });

            let expDate = new Date();

            expDate.setTime(expDate.getTime() + (15 * 60 * 1000));

            const tokenData = {
                data: userData,
                expTime: expDate
            };

            const token = window.btoa(JSON.stringify(tokenData));

            localStorage.setItem('gwtoken', token);
            localStorage.setItem('gwlog', this.state.login);
            document.querySelector('#closeLoginModal').click();
            document.querySelector('#login').value = '';
            document.querySelector('#password').value = '';

        }).catch(error => {
            console.log(error);
            this.setState({
                wrongData: true,
                loading: false
            })
        })
    };

    onLoginHandle = (data) => {
        this.setState({login: data})
    };

    onPasswordHandle = (data) => {
        let password = sha256(data);
        this.setState({password: password})
    };

    onSignOut = (e) => {
        // console.log('ok');

        this.setState({
            login: null,
            password: null,
            token: null,
            isAuth: false
        });
        localStorage.removeItem('gwtoken');
    };

    render() {
        return (
            <AuthContext.Provider
                value={{
                    isAuth: this.state.isAuth,
                    login: this.onLoginHandle,
                    password: this.onPasswordHandle,
                    signIn: this.onSignInHandle,
                    signOut: this.onSignOut,
                    alert: this.state.wrongData,
                    name: this.state.login,
                    loading: this.state.loading
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthProvider;