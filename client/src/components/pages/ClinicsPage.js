import React, { Component } from 'react'
import clinics from '../../database/clinics.json';
// import FilteredClinics from '../clinicspage/FilteredClinics'
import {Link} from "react-router-dom";

class ClinicsPage extends Component {
    state = {
        search: "",
        clinics: clinics,
    };
    onChange = e => {
        this.setState({search: e.target.value})
    };
    componentDidMount(props){
        // const { match: { params } } = this.props;

        if (this.props.location.state !== undefined) {
            this.setState({search: this.props.location.state});
        } else {
            this.setState({search: ''});
        }
    }
    render() {
        let filteredItems = this.state.clinics;
        const filtered = filteredItems.filter(item => {
            return item.basicInfo.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
        return(
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
                {filtered.map((item, index) => {
                    return (
                        <div key={index} className="clinic-row">
                            <div className="d-flex">
                                <div className="clinic-row-image">
                                    <img src={require(`../../images/clinics/${item.additionalData.image}`)} alt={item.basicInfo.shortName}/>
                                </div>
                                <div className="clinic-row-description">
                                    <h3>{item.basicInfo.name}</h3>
                                    <p>{item.additionalData.facilityDescription}</p>
                                    <div className="d-flex justify-content-end">
                                        <Link className="btn-primary btn" to={`clinic/${item.id}`}>Show</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default ClinicsPage;