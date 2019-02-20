import React from 'react';
// import JumbotronSerarch from './JumbotronSearch';
import {FormattedMessage} from 'react-intl';

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="jumbotron-title-wrapper">
                    <h1 className="display-4">
                        <FormattedMessage id="jumbotron.title" defaultMessage={`Find healthcare abroad`}/>
                    </h1>
                    <ul>
                        <li>
                            <i className="fas fa-check"></i>
                            <FormattedMessage id="jumbotron.text.1" defaultMessage={`Internationally accredited hospitals`}/>
                        </li>
                        <li>
                            <i className="fas fa-check"></i>
                            <FormattedMessage id="jumbotron.text.2" defaultMessage={`Healthcare for every budget`}/>
                        </li>
                        <li>
                            <i className="fas fa-check"></i>
                            <FormattedMessage id="jumbotron.text.3" defaultMessage={`Dedicated personal assistance`}/>
                        </li>
                        <li>
                            <i className="fas fa-check"></i>
                            <FormattedMessage id="jumbotron.text.4" defaultMessage={`Completely free consultations`}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Jumbotron;