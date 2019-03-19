import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'
import { getToken } from "../../api/api";

class Clinic extends Component {
    state = {
        clinicsApi: null,
        isLoading: true,
        clinicPath: this.props.match.params.clinic,
        clinicName: null
    };
    componentDidMount() {
        const userData = "YWRtaW46ODVmZDdjODg5ZjcxY2YxMDUzNzU1OTVjZGRjMDZiOWQzOGZjNTYyY2I2OWM1NGY4YzE2NWFhNzUxZDgxYjNkOQ==";
        const url = `https://qang.bpower2.com/index.php/restApi/gwipClinics?id=${this.props.match.params.clinic}&details=true`;
        getToken(userData).then((res) => {
            axios.get(url, {
                headers: {
                    'Authorization': res.data.token
                }
            }).then(res => {
                console.log(res.data);
                return this.setState({
                    clinicsApi:res.data,
                    clinicName: res.data.nazwa.value,
                    isLoading: false
                })
            }).catch(err => {
                console.log(err);
            });
        });
    }

    render() {
        const {clinicsApi} = this.state;
        let content;
        if (this.state.isLoading) {
            content = <div>Loading...</div>;
        } else {
            content = <div>
                <div className="clinic-subpage-header">
                    <h2>{clinicsApi.nazwa.value}</h2>
                    <p>{clinicsApi.KlientAddress_town_ln1268.value}</p>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <div>
                            <img className="w-100" src={require(`../../assets/images/clinics/1.jpg`)} alt={1}/>
                        </div>
                        <div className="clinic-subpage-information">
                            <h4>Overview</h4>
                            <p>{clinicsApi.KlientOpis_facility_description_i599rc.value}</p>
                            <h4>Staff</h4>
                            <p>{clinicsApi.KlientOpis_staff_description_c8fxba.value}</p>
                            <h4>More Informations</h4>
                            <p>{clinicsApi.KlientOpis_additional_description_tnzwhr.value}</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="clinic-subpage-contact">
                            <div>
                                <h4>Localisation</h4>
                                <p>Region: {clinicsApi.KlientAddress_region_cdiuc6.value}</p>
                                <p>Zip Code: {clinicsApi.KlientAddress_zip_5m0713.value}</p>
                                <p>City: {clinicsApi.KlientAddress_town_ln1268.value}</p>
                                <p>Street: {clinicsApi.KlientAddress_street_wb4zf6.value}</p>
                                <p>Building Number: {clinicsApi.KlientAddress_bulding_no_ees54z.value}</p>
                            </div>
                            <iframe title={clinicsApi.KlientAddress_town_ln1268.value} className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80142.20463588827!2d16.948557663865405!3d51.118719710216354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c2d4b58abf%3A0xb70956aec205e0f5!2zV3JvY8WCYXc!5e0!3m2!1spl!2spl!4v1553023739990" allowFullScreen />
                            <h4>Contact</h4>
                            <p>Email: {clinicsApi.Klient_kli_email_u7284x.value}</p>
                            <p>Phone number: {clinicsApi.Klient_kli_tel_2min3u.value}</p>
                            <p>Phone number: {clinicsApi.Klient_kli_www_d0mq3u.value}</p>
                        </div>
                    </div>
                </div>
            </div>
        }
        return(
            <div>
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <div className="container d-flex flex-wrap">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/allClinics">All Clinics</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{this.state.clinicName}</li>
                        </div>
                    </ul>
                </nav>
                <div className="container clinic-subpage">
                    {content}
                </div>
            </div>
        )
    }
}
export default Clinic;