import React, {Component} from 'react';
import clinics from '../../database/clinics';
import slugify from '@sindresorhus/slugify';
import {Link} from "react-router-dom";

class Clinic extends Component {
    // state = {
    //     data :
    // };

    render() {
        return(
            <div>
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <div className="container d-flex flex-wrap">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/allClinics">All Clinics</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{this.props.match.params.clinic}</li>
                        </div>
                    </ul>
                </nav>
                <div className="container clinic-subpage">
                    {/*<p>{this.props.match.params.id}</p>*/}
                    {clinics.map((item, index) => {
                        const slug = slugify(item.basicInfo.shortName)
                        if (slug === this.props.match.params.clinic) {
                            return (
                                <div key={index}>
                                    <div className="clinic-subpage-header">
                                        <h2>{item.basicInfo.name}</h2>
                                        <p>{item.institutionAddress.region},
                                            {" "}
                                            {item.institutionAddress.city}
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div>
                                                <img className="w-100" src={require(`../../assets/images/clinics/${item.additionalData.image}`)} alt={item.basicInfo.name}/>
                                            </div>
                                            <div className="clinic-subpage-information">
                                                <h4>Overview</h4>
                                                <p>{item.additionalData.facilityDescription}</p>
                                                <h4>Staff</h4>
                                                <p>{item.additionalData.staffDescription}</p>
                                                <h4>More Informations</h4>
                                                <p>{item.additionalData.moreInformation}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="clinic-subpage-contact">
                                                <div >
                                                    <h4>Localisation</h4>
                                                    <p>Region: {item.institutionAddress.region}</p>
                                                    <p>Zip Code: {item.institutionAddress.zipCode}</p>
                                                    <p>City: {item.institutionAddress.city}</p>
                                                    <p>Street: {item.institutionAddress.street}</p>
                                                    <p>Building Number: {item.institutionAddress.buildingNumber}</p>
                                                </div>
                                                <iframe className="w-100" title="map" src={item.institutionAddress.map}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
            </div>
        )
    }
}
export default Clinic;