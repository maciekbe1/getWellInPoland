import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {IntlProvider} from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import locale_pl from 'react-intl/locale-data/pl';
import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";
import messages_pl from "./translations/pl.json";
addLocaleData([...locale_en, ...locale_de, ...locale_pl]);

const messages = {
    'de': messages_de,
    'en': messages_en,
    'pl': messages_pl
};
// const language = navigator.language.split(/[-_]/)[0];  // language without region code
const language = 'en'
ReactDOM.render(
    <IntlProvider locale={language} messages={messages[language]}>
        <App />
    </IntlProvider>
    , document.getElementById('root'));
