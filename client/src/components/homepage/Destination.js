import React from 'react';
import {FormattedMessage} from 'react-intl';

const Destination = () => {
    return (
        <div className="destination container-fluid">
            <div className="container p-0">
                <div className="row">
                    <div className="">
                        <h3><FormattedMessage id="destination.featured" defaultMessage={`Featured destination`}/></h3>
                        <h2>                        
                            <FormattedMessage id="destination.country" className="text-center" defaultMessage={`Poland`}/>
                        </h2>
                        <p>
                            <FormattedMessage id="destination.text.1" defaultMessage={`With over 1,000 public hospitals and 400 private hospitals, Poland is recognized as one of the world's leading destinations for medical tourism. More than 1.4 million medical tourists are treated in Poland hospitals and clinics each year.`}/>
                        </p>
                        <p>
                            <FormattedMessage id="destination.text.2" defaultMessage={`The Poland medical system has experience treating a range of medical conditions: the most common procedures include dental treatments, plastic and cosmetic surgery, as well as orthopedic surgery (knee and hip replacements), gender reassignment surgery, and heart surgery. Wrocław, Warszawa, and Krakw cater to visitors who are eager to discover the country's lush natural resources and rich cultural traditions.`}/>
                        </p>
                        <button>See 47 clinics in Poland</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;