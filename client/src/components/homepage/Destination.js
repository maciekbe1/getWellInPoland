import React, {useContext} from 'react';
import GlobalState from '../context/global-context';
import AuthContext from '../context/auth-context';
import {Link} from "react-router-dom";

const Destination = () => {
    const globalState = useContext(GlobalState);
    const authContext = useContext(AuthContext);

    const {language} = globalState

    return (
        <div className="destination container-fluid">
            <div className="container p-0">
                <div className="row">
                    <div className="text-center">
                        <h3>{language.homepage.text_38}</h3>
                        <h2>{language.homepage.text_39}</h2>
                        <p>
                            {language.homepage.text_40}
                        </p>
                        <p>
                            {language.homepage.text_41}
                        </p>
                        {
                            authContext.isAuth ? <Link to="/all-clinics">{language.homepage.text_42} {globalState.premiumClinics.length} {language.homepage.text_43}</Link> : <button data-toggle="modal" data-target="#loginModal">{language.homepage.text_42} {globalState.premiumClinics.length} {language.homepage.text_43}</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;