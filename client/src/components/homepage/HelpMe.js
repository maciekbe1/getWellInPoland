import React, {useContext} from 'react';
import GlobalState from '../context/global-context';

const HelpMe = () => {
    const globalState = useContext(GlobalState);

    const {language} = globalState

    return (
        <div className="help-me container">
            <div className="row">
                <p>{language.homepage.text_32}</p>
                <div className="help-me-icons w-100">
                    <ul>
                        <li className="help1">
                            <span>{language.homepage.text_33}</span>
                        </li>
                        <li className="help2">
                            <span>{language.homepage.text_34}</span>
                        </li>
                        <li className="help3">
                            <span>{language.homepage.text_35}</span>
                        </li>
                        <li className="help4">
                            <span>{language.homepage.text_36}</span>
                        </li>
                        <li className="help5">
                            <span>{language.homepage.text_37}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HelpMe;