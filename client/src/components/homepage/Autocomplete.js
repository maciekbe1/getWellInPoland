import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { clinicsObj } from '../../api/api'
import axios from "axios";

class Autocomplete extends Component {
    state = {
        suggestions: [],
        search: "",
        text: "",
        arrOfClinicsName: []
    };
    componentDidMount() {
        let clinicsNameArr = [];
        axios.get(clinicsObj).then(res => {
            res.data.map(item => {
                if (item["KlientData_businessType-21306_c2abvm"].value === "1") {
                    clinicsNameArr.push(item.nazwa.value);
                }
                return null;
            })
        });
        // axios.get(clinicsName).then(res => {
        //     return this.setState({arrOfClinicsName: res.data});
        // });
        this.setState({arrOfClinicsName: clinicsNameArr})
    }

    findClinicOnChange = e => {
        const value = e.target.value;
        let suggestions = [];
        this.setState({search: value});
        if (value.length > 0) {
           const regexp = new RegExp(`${value}`, 'i');
           suggestions = this.state.arrOfClinicsName.sort().filter(v => regexp.test(v))
        }
        this.setState({suggestions: suggestions})
    };
    suggestionSelected(value) {
        this.setState({search: value, suggestions: []})
    }
    renderSuggestion = () => {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        } else {
            return (
                <ul className="col-sm-10 clinics-search-list">{suggestions.map((item, index) => {
                    return <li onClick={() => this.suggestionSelected(item)} key={index}>{item}</li>
                })}</ul>
            )
        }
    };
    render() {
        return(
            <div className="d-flex">
                <div className="w-100">
                    <input value={this.state.search} onChange={this.findClinicOnChange} type="text" className="form-control" placeholder="find a clinic" />
                    {this.renderSuggestion()}
                </div>
                <Link to={{ pathname: '/all-clinics', state: this.state.search }} className="btn btn-primary find-clinics">Search</Link>
            </div>
        )
    }
}
export default Autocomplete;