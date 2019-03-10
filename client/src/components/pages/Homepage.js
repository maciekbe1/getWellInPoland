import React from 'react';
import Jumbotron from '../homepage/Jumbotron';
import FindPopularClinicProcedures from '../homepage/FindPopularClinicProcedures';
import DoctorsPatientsReviews from '../homepage/DoctorsPatientsReviews';
import ChooseClinic from '../homepage/ChooseClinic';
import HelpMe from '../homepage/HelpMe';
import Destination from '../homepage/Destination';
import HowItWorks from '../homepage/HowItWorks';

class Homepage extends React.Component {
    render() {
        return (
            <div className="homepage-wrapper">
                <Jumbotron />
                <FindPopularClinicProcedures />
                <ChooseClinic />
                <DoctorsPatientsReviews />
                <HelpMe />
                <Destination />
                <HowItWorks />
            </div>
        );
    }
}

export default Homepage;