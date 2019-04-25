import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalContext from './global-context';
import logo from '../../assets/images/logo/logo_male.png';
import Cookies from 'universal-cookie';

const GlobalState = props => {

    const cookies = new Cookies();

    const [isLoading, setIsLoading] = useState(true)

    const [premiumClinics, setPremiumClinics] = useState([])
    const [premiumClinicsName, setPremiumClinicsName] = useState([])
    const [translations, setTranslations] = useState({
        en: {
            homepage: {},
            contact: {}
        },
        pl: {
            homepage: {},
            contact: {}
        }
    })
    const [language, setLang] = useState(translations.en)

    useEffect(() => {
        axios.get(process.env.REACT_APP_CLINICS_DETAILS)
        .then(res => {
            let arrPremiumClinics = []
            let arrPremiumClinicsName = []
            res.data.forEach( clinic => {
                if(clinic["klientdata_businesstype21306_c2abvm"].value === "1"){
                    arrPremiumClinics.push(clinic)
                    arrPremiumClinicsName.push(clinic.nazwa.value)
                }
            })
            return (
                setPremiumClinics(arrPremiumClinics),
                setPremiumClinicsName(arrPremiumClinicsName)
            )
        })

        axios.get(process.env.REACT_APP_POSTS)
        .then(res => {
            let enContact = {};
            let plContact = {};
            let enHomepage = {};
            let plHomepage = {};

            res.data.map(post => {
                switch(post.post.link_id) {
                    case '7':
                        return (
                            enContact['text_' + post.post.menu_order] = post.post.post_content,
                            plContact['text_' + post.post.menu_order] = post.post.post_content,
                            post.translations.length ? (plContact['text_' + post.post.menu_order] = post.translations[0].translation) : null
                        )
                    case '4':
                        return (
                            enHomepage['text_' + post.post.menu_order] = post.post.post_content,
                            plHomepage['text_' + post.post.menu_order] = post.post.post_content,
                            post.translations.length ? (plHomepage['text_' + post.post.menu_order] = post.translations[0].translation) : null
                        )
                    default:
                        return null
                }
                // if (post.post.link_id === '7' || post.post.link_id === '4') {
                //     return (
                //         enTranslations['text_' + post.post.id] = post.post.post_content,
                //         plTranslations['text_' + post.post.id] = post.post.post_content,
                //         post.translations.length ? (plTranslations['text_' + post.post.id] = post.translations[0].translation) : null
                //     )
                // }
                // return null
            })
            return (
                setTranslations(
                    {
                        en: {
                            homepage: enHomepage,
                            contact: enContact
                        },
                        pl: {
                            homepage: plHomepage,
                            contact: plContact
                        },
                    }
                )
            )
        })
    }, [])

    useEffect(() => {
        if (cookies.get('gwlang')) {
            setLanguage(cookies.get('gwlang'))
        } else {
            cookies.set('gwlang', 'en', { path: '/' });
        }

        if (Object.keys(translations.en.homepage).length) {
            setIsLoading(false)
        }
    },[translations])

    const setLanguage = (lang) => {
        switch(lang) {
            case 'pl':
                cookies.set('gwlang', 'pl', { path: '/' });
                setLang(translations.pl)
                break;
            case 'en':
                cookies.set('gwlang', 'en', { path: '/' });
                setLang(translations.en)
                break;
            default:
                setLang(translations.en)
        }
    }

    return(
        isLoading
        ? <div className="loading-screen bg-light">
            <img src={logo} alt="logo"/>
            <div className="loader">Loading...</div>
        </div>
        : <GlobalContext.Provider
            value={{
                premiumClinics,
                premiumClinicsName,
                language,
                setLanguage
            }}
        >
        {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;