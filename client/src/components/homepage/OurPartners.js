import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import AuthContext from '../context/auth-context'
import GlobalState from '../context/global-context';

function OurPartners() {
    const authContext = useContext(AuthContext);
    const globalState = useContext(GlobalState);

    let content = null;
    if (globalState.clinicsDetails.length === 0) {
        content = <h1>Loading...</h1>
    } else {
        content = globalState.premiumClinics.slice(0, 3).map((item, index) => {
            return (
                <div key={index} className="col-sm-3 col-6">
                    <div className="">
                        <Link to={`/all-clinics/clinic/${item.kli_id.value}`}><img alt={""} src={require(`../../assets/images/${item.kli_id.value}.jpg`)}/></Link>
                    </div>
                </div>
            )
        });
    }
    return (
        <div className="our-partners">
            <div className="container">
                {
                    authContext.isAuth ? <div className="text-center">
                        <h2>Our Partners</h2>
                    </div> : null
                }
                <div className="row">
                { authContext.isAuth ? content : null }
                </div>
            </div>
        </div>
    );
}

export default OurPartners