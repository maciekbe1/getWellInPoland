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
import JumbotronSerarch from './homepage/JumbotronSearch';

class Homepage extends React.Component {
    render() {
        return (
            <div className="homepage-wrapper">
                <Navbar languages={this.props.languages} changeLanguage={this.props.changeLanguage} language={this.props.language}/>
                <Jumbotron />
                <JumbotronSerarch />
                <FindPopularClinicProcedures />
                <ChooseClinic />
                <DoctorsPatientsReviews />
                <HelpMe />
                <Destination />
                <HowItWorks />
                <Footer changeLanguage={this.props.changeLanguage} />
            </div>
        );
    }
}

export default Homepage;