import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import ClinicsPage from './components/pages/ClinicsPage'
import {IntlProvider} from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import locale_pl from 'react-intl/locale-data/pl';
import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";
import messages_pl from "./translations/pl.json";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import Clinic from "./components/clinicspage/Clinic";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import './styles/app.scss';
addLocaleData([...locale_en, ...locale_de, ...locale_pl]);

class App extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };

    state = {
        language: ''
    };

    componentWillMount() {
        const { cookies } = this.props;
        if (cookies.get('getWellLang')) {
            this.setState({
                language: cookies.get('getWellLang')
            })
        } else {
            cookies.set('getWellLang', 'en', { path: '/' });
        }
    }

    changeLanguage = (lang) => {
        const { cookies } = this.props;
        cookies.set('getWellLang', lang, { path: '/' });
        this.setState({
            language: lang
        })
    };

    render() {
        const availableLanguages = [ 'en', 'de', 'pl'];

        const messages = {
            'de': messages_de,
            'en': messages_en,
            'pl': messages_pl
        };

        return (
            <IntlProvider locale={this.state.language} messages={messages[this.state.language]}>
                <div className="App">
                    <HashRouter>
                        <div>
                            <Navbar
                                languages={availableLanguages}
                                changeLanguage={this.changeLanguage}
                                language={this.state.language}/>
                            <Route path="/" exact
                                render={(render) => (<Homepage {...render}
                                   languages={availableLanguages}
                                   changeLanguage={this.changeLanguage}
                                   language={this.state.language} />
                                   )}/>
                            <Route path="/clinics" component={ClinicsPage} />
                            <Route path={'/clinic/:id'} component={Clinic} />
                            <Footer changeLanguage={this.props.changeLanguage} />
                        </div>
                    </HashRouter>
                </div>
            </IntlProvider>
        );
    }
}

export default withCookies(App)
