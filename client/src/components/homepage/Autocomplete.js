import React, {Component} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
// import {token} from "../api/api";

class Autocomplete extends Component {
    state = {
        suggestions: [],
        search: "",
        text: "",
        arrOfClinicsName: []
    };
    componentWillMount() {
        let customers = [];
        let arrOfClinicsName = [];
        let klient = `http://localhost/index.php/restApi/request/model/Klient/pagination/{"page":1, "itemsPerPage":1000}`;
        let klislo = `http://localhost/index.php/restApi/request/model/KliSlo/pagination/{"page":1, "itemsPerPage":10000}`;
        axios({
            method: 'post',
            url: 'http://localhost/index.php/restApi/generateJWT',
            headers: {
                'X-PINGOTHER': 'pingpong',
                'Content-Type': 'application/json'
            },
            data: {
                "user-key":"YWRtaW46ODVmZDdjODg5ZjcxY2YxMDUzNzU1OTVjZGRjMDZiOWQzOGZjNTYyY2I2OWM1NGY4YzE2NWFhNzUxZDgxYjNkOQ=="
            }
        }).then( response => {
            axios.get(klislo, {
                headers: {
                    'Authorization': response.data.token
                }
            }).then( response =>{
                response.data.data.objects.forEach(item => {
                    Object.keys(item).filter(key => {
                        if(item[key] === '30002960') {
                            customers.push(item.KLS_ID_KLIENT);
                        }
                        return null;
                    });
                });
            });
            axios.get(klient, {
                headers: {
                    'Authorization': response.data.token
                }
            }).then(response => {
                response.data.data.objects.forEach(item => {
                    Object.keys(item).filter(key => {
                        customers.forEach(customer => {
                            if (customer === item[key]) {
                                console.log(item);
                                arrOfClinicsName.push(item.kli_nazwa);
                            }
                        });
                        return null;
                    })
                });
                this.setState({arrOfClinicsName: arrOfClinicsName})
            })
        }).catch(errors => console.log(errors));
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
                <Link to={{ pathname: '/clinics', state: this.state.search }} className="btn btn-primary find-clinics">Search</Link>
            </div>
        )
    }
}
export default Autocomplete;