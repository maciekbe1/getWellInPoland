import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { getClinicsName, arrOfClinicsName } from '../../api/api'

class Autocomplete extends Component {
    state = {
        suggestions: [],
        search: "",
        text: "",
        arrOfClinicsName: []
    };
    componentWillMount() {
        const userData = "YWRtaW46ODVmZDdjODg5ZjcxY2YxMDUzNzU1OTVjZGRjMDZiOWQzOGZjNTYyY2I2OWM1NGY4YzE2NWFhNzUxZDgxYjNkOQ==";
        getClinicsName(userData);
        this.setState({arrOfClinicsName: arrOfClinicsName});
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
                <Link to={{ pathname: '/allClinics', state: this.state.search }} className="btn btn-primary find-clinics">Search</Link>
            </div>
        )
    }
}
export default Autocomplete;