import React, {useContext} from 'react';
import GlobalState from '../context/global-context';

const HowItWorks = () => {
    const globalState = useContext(GlobalState);
    const {language} = globalState

    return (
        <div className="how-it-works container">
            <div className="row">
                <div className="column col-md-4">
                    <span></span>
                    <p className="title">{language.homepage.text_44}</p>
                    <p>{language.homepage.text_45}</p>
                    {/*<a href="#test">Browse our clinics</a>*/}
                </div>

                <div className="column col-md-4">
                    <span></span>
                    <p className="title">{language.homepage.text_46}</p>
                    <p>{language.homepage.text_47}</p>
                    {/*<a href="#test">Browse our clinics</a>*/}
                </div>

                <div className="column col-md-4">
                    <span></span>
                    <p className="title">{language.homepage.text_48}</p>
                    <p>{language.homepage.text_49}</p>
                    {/*<a href="#test">Browse our clinics</a>*/}
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;