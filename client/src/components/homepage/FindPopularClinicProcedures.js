import React from 'react';
import data from '../../database/findPopularClinicProcedures.json';
import {FormattedMessage} from 'react-intl';
import { Link } from 'react-router-dom'


const FindPopularClinicProcedures = () => {
    return (
        <div className="find-clinic">
            <div className="container">
                <div className="row">
                    <h2>
                        <FormattedMessage id="find.clinic.title" defaultMessage={`Find a Clinic for Popular Procedures`}/>
                    </h2>
                    {data.map((item, index) => {
                        return (
                            <Link className="card col-lg-3 col-sm-6 text-white" to={`/find-popular/${item.type}`} key={index}>
                                <img src={require(`../../assets/images/${item.img}`)} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">{item.title}</h5>
                                    <div className="card-information">
                                        <p className="card-text">{item.t1}</p>
                                        <p className="card-text">{item.t2}</p>
                                        <p className="card-text">{item.t3}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
     );
}

export default FindPopularClinicProcedures;