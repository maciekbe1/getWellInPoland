import React, {Component} from 'react';
import clinics from '../../database/clinics';

class Clinic extends Component {
    // state = {
    //     data :
    // };
    render() {
        return(
            <div className="container clinic-subpage">
                {/*<p>{this.props.match.params.id}</p>*/}
                {clinics.map((item, index) => {
                    if (item.id === this.props.match.params.id) {
                        return (
                            <div key={index}>
                                <div className="clinic-subpage-header">
                                    <h2>{item.basicInfo.name}</h2>
                                    <p>{item.institutionAdress.region},
                                        {" "}
                                        {item.institutionAdress.city}
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div>
                                            <img className="w-100" src={require(`../../images/clinics/${item.additionalData.image}`)} alt={item.basicInfo.name}/>
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
                                    <div className="col-4">
                                        <div className="clinic-subpage-contact">
                                            <div >
                                                <h4>Localisation</h4>
                                                <p>Region: {item.institutionAdress.region}</p>
                                                <p>Zip Code: {item.institutionAdress.zipCode}</p>
                                                <p>City: {item.institutionAdress.city}</p>
                                                <p>Street: {item.institutionAdress.street}</p>
                                                <p>Building Number: {item.institutionAdress.buildingNumber}</p>
                                            </div>
                                            <iframe title="map" src={item.institutionAdress.map}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    // return <p>{this.props.match.params.id}</p>
                })}
            </div>
        )
    }
}
export default Clinic;