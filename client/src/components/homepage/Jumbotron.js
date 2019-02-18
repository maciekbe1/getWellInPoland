import React from 'react';
import JumbotronSerarch from './JumbotronSearch';
import {FormattedMessage} from 'react-intl';

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="jumbotron-title-wrapper">
                    <h1 className="display-4">
                    <FormattedMessage id="app.title"
                              defaultMessage={`Find healthcare abroad`}/>
                    </h1>
                    <ul>
                        <li><i className="fas fa-check"></i><span>Internationally accredited hospitals</span></li>
                        <li><i className="fas fa-check"></i><span>Healthcare for every budget</span></li>
                        <li><i className="fas fa-check"></i><span>Dedicated personal assistance</span></li>
                        <li><i className="fas fa-check"></i><span>Completely free consultations</span></li>
                    </ul>
                </div>
            </div>
            <JumbotronSerarch />
        </div>
     );
}

export default Jumbotron;