import React from 'react';
import Jumbotron from './homepage/Jumbotron';
import '../styles/homepage.scss'
import FindPopularClinicProcedures from './homepage/FindPopularClinicProcedures';
import DoctorsPatientsReviews from './homepage/DoctorsPatientsReviews';
import ChooseClinic from './homepage/ChooseClinic';
import HelpMe from './homepage/HelpMe';
import Destination from './homepage/Destination';
import HowItWorks from './homepage/HowItWorks';
import Footer from './Footer';
import Navbar from './Navbar';

class Homepage extends React.Component {
    render() {
        return (
            <div className="homepage-wrapper">
                <Navbar />
                <Jumbotron />
                <FindPopularClinicProcedures />
                <ChooseClinic />
                <DoctorsPatientsReviews />
                <HelpMe />
                <Destination />
                <HowItWorks />
                <Footer />
            </div>
        );
    }
}

export default Homepage;