import React, {useContext} from 'react';
import GlobalState from '../context/global-context';

const DoctorsPatientsRewievs = () => {
    const globalState = useContext(GlobalState);

    const {language} = globalState
    return (
        <div className="doctor-patient-reviews container-fluid">
            <div className="row">
                <h2>{language.homepage.text_27}</h2>
                    <div className="col-xl-3 col-md-4 col-12">
                        <p>{language.homepage.text_28}</p>
                        <img src={require(`../../assets/images/review1.png`)} alt="" />
                        <span>{language.homepage.text_29}</span>
                    </div>
                    <div className="col-xl-3 col-md-4 col-12">
                        <p>{language.homepage.text_30}</p>
                        <img src={require(`../../assets/images/review2.png`)} alt="" />
                        <span>{language.homepage.text_31}</span>
                    </div>
            </div>
        </div>
    );
}

export default DoctorsPatientsRewievs;