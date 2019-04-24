import React, { useContext } from 'react';
import JumbotronSearch from "./JumbotronSearch";
import AuthContext from "../context/auth-context";
import GlobalState from '../context/global-context';

const Jumbotron = () => {
    const context = useContext(AuthContext)
    const globalState = useContext(GlobalState);
    const {language} = globalState

    return (
        <div>
            <div className="jumbotron container-fluid">
                <div className="container">
                    <div className="jumbotron-title-wrapper">
                        <h1 className="display-4">
                            {language.homepage.text_1}
                        </h1>
                        <ul>
                            <li>
                                <i className="fas fa-check"></i>
                                {language.homepage.text_2}
                            </li>
                            <li>
                                <i className="fas fa-check"></i>
                                {language.homepage.text_3}
                            </li>
                            <li>
                                <i className="fas fa-check"></i>
                                {language.homepage.text_4}
                            </li>
                            <li>
                                <i className="fas fa-check"></i>
                                {language.homepage.text_5}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {context.isAuth
                ? <JumbotronSearch />
                : null
            }
        </div>

     );
};

export default Jumbotron;