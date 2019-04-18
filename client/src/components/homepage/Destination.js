import React, {useContext} from 'react';
import GlobalState from '../context/global-context';
import AuthContext from '../context/auth-context';
import {Link} from "react-router-dom";

const Destination = () => {
    const globalState = useContext(GlobalState);
    const authContext = useContext(AuthContext);


    // console.log(globalState.premiumClinics)
    return (
        <div className="destination container-fluid">
            <div className="container p-0">
                <div className="row">
                    <div className="text-center">
                        <h3>Featured destination</h3>
                        <h2>Poland</h2>
                        <p>
                            With over 1,000 public hospitals and 400 private hospitals, Poland is recognized as one of the world's leading destinations for medical tourism. More than 1.4 million medical tourists are treated in Poland hospitals and clinics each year./>
                        </p>
                        <p>
                            The Poland medical system has experience treating a range of medical conditions: the most common procedures include dental treatments, plastic and cosmetic surgery, as well as orthopedic surgery (knee and hip replacements), gender reassignment surgery, and heart surgery. Wrocław, Warszawa, and Krakw cater to visitors who are eager to discover the country's lush natural resources and rich cultural traditions./>
                        </p>
                        {
                            authContext.isAuth ? <Link to="/all-clinics">See {globalState.premiumClinics.length} clinics in Poland</Link> : <button data-toggle="modal" data-target="#loginModal">See {globalState.premiumClinics.length} clinics in Poland</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;