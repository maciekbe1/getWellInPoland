import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import Clinic from "./components/clinicspage/Clinic";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import './assets/styles/app.scss';
import ProtectedRoute from './components/pages/ProtectedRoute'
import AuthProvider  from './components/context/AuthContext'
import ClinicsPage from "./components/pages/ClinicsPage";
import PopularClinics from "./components/findPopularClinicProcedures/PopularClinics"
import NotFound from './components/pages/NotFound'
import GlobalState from './components/context/GlobalState';
import RegisterPage from "./components/pages/RegisterPage";
import Contact from './components/pages/Contact'

class App extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };

    state = {
        authenticated: false
    };


    render() {
        return (
                <div className="App">
                    <AuthProvider>
                        <GlobalState>
                            <BrowserRouter>
                                <div>
                                    <Navbar/>
                                    <Switch>
                                        <Route path="/" exact
                                            render={(render) => (<Homepage {...render}/>)}/>
                                        <Route path="/register" component={RegisterPage}/>
                                        <Route path="/contact" component={Contact}/>
                                        <ProtectedRoute path="/all-clinics/clinic/:clinic" component={Clinic} />
                                        <ProtectedRoute path="/all-clinics" component={ClinicsPage} />
                                        <ProtectedRoute path="/find-popular/clinic-premium/:clinic" component={Clinic}/>
                                        <ProtectedRoute path="/find-popular/:popularClinics" component={PopularClinics}/>
                                        <Route component={NotFound} />
                                    </Switch>
                                    <Footer/>
                                </div>
                            </BrowserRouter>
                        </GlobalState>
                    </AuthProvider>
                </div>
        );
    }
}

export default withCookies(App)
