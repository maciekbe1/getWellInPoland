import React, { Component } from 'react'
// import clinics from '../../database/clinics.json';
import '../../assets/styles/clinicpage.scss'
import { Link } from "react-router-dom";
// import axios from "axios";
import slugify from '@sindresorhus/slugify';
import {clinicsObj, getToken} from "../../api/api";
import axios from "axios";

class ClinicsPage extends Component {
    state = {
        search: "",
        clinicsApi: [],
        isLoading: true
    };
    onChange = e => {
        this.setState({search: e.target.value})
    };

    componentDidMount(props) {
        const userData = "YWRtaW46ODVmZDdjODg5ZjcxY2YxMDUzNzU1OTVjZGRjMDZiOWQzOGZjNTYyY2I2OWM1NGY4YzE2NWFhNzUxZDgxYjNkOQ==";
        getToken(userData).then((res) => {
            axios.get(clinicsObj, {
                headers: {
                    'Authorization': res.data.token
                }
            }).then(res => {
                console.log(res.data);
                return this.setState({
                    clinicsApi:res.data,
                    isLoading: false
                })
            }).catch(err => {
                console.log(err);
            });
        });

        if (this.props.location.state !== undefined) {
            this.setState({search: this.props.location.state});
        } else {
            this.setState({search: ''});
        }
    }
    render() {
        let content;
        if (this.state.isLoading) {
            content = <div>Loading...</div>;
        } else {
            let filteredItems = this.state.clinicsApi;
            const filtered = filteredItems.filter(item => {
                return item.nazwa.value.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            });

            content = filtered.map((item, index) => {
                return (
                    <div key={index} className="clinic-row row">
                        <div className="col-sm-4 clinic-row-image">
                            <img src={require(`../../assets/images/clinics/1.jpg`)} alt={index}/>
                        </div>
                        <div className="col-sm-8 clinic-row-description">
                            <h3>{item.nazwa.value}</h3>
                            <p>{item.KlientOpis_facility_description_i599rc.value}</p>
                            <div className="d-flex justify-content-end">
                                <Link className="btn-primary btn" to={`/allClinics/clinic/${slugify(item.kli_id.value)}`}>Show</Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return(
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <div className="container d-flex flex-wrap">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">All Clinics</li>
                        </div>
                    </ol>
                </nav>

                <div className="container clinics-page">
                    <div className="clinic-banner d-flex align-items-end">
                        <div className="clinic-search d-flex align-items-center justify-content-center">
                            <div className="col-sm-5 text-center">
                                <h2>Help me find a clinic</h2>
                                <input value={this.state.search} onChange={this.onChange} type="text" className="form-control" placeholder="find a clinic"/>
                            </div>
                        </div>
                    </div>
                    <h1>List of clinics</h1>
                    {content}
                </div>
            </div>
        );
    }
}
export default ClinicsPage;