import React from 'react'

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
    state = { isAuth: false };

    constructor() {
        super()
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }
    componentWillMount() {
        if (localStorage.getItem('token')) {
            this.setState({isAuth: true});
        }
    }

    login() {
        localStorage.setItem('token', true);
        setTimeout(() => this.setState({ isAuth: true }), 1000)
    }

    logout() {
        localStorage.removeItem('token');
        this.setState({ isAuth: false })
    }

    render() {
        return (
            <AuthContext.Provider
                value={{
                    isAuth: this.state.isAuth,
                    login: this.login,
                    logout: this.logout
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer }