import React, { Component } from 'react'
import clinics from '../../database/clinics.json';
import '../../assets/styles/clinicpage.scss'
import { Link } from "react-router-dom";
// import axios from "axios";

class ClinicsPage extends Component {
    state = {
        search: "",
        clinics: clinics,
    };
    onChange = e => {
        this.setState({search: e.target.value})
    };
    componentDidMount(){
        // const { match: { params } } = this.props;
        // let customers = [];
        // token(response => {
        //     axios.get(`http://localhost/index.php/restApi/request/model/KliSlo/pagination/{"page":1, "itemsPerPage":1000}`, {
        //         headers: {
        //             'Authorization': response.data.token
        //         }
        //     }).then( response => {
        //         response.data.data.objects.forEach(item => {
        //             Object.keys(item).filter(key => {
        //                 if(item[key] === '30002960') {
        //                     // console.log(item)
        //                     customers.push(item.KLS_ID_KLIENT);
        //                 }
        //                 return null;
        //             });
        //         });
        //
        //     });
        //     axios.get(`http://localhost/index.php/restApi/request/model/KlientOpis/pagination/{"page":1, "itemsPerPage":10000}`, {
        //         headers: {
        //             'Authorization': response.data.token
        //         }
        //     }).then(response => {
        //         response.data.data.objects.forEach(item => {
        //             Object.keys(item).filter(key => {
        //                 customers.forEach(customer => {
        //                     if (customer === item[key]) {
        //                         // arrOfClinicsDescriptions.push(item.);
        //                         console.log(item)
        //                     }
        //                 });
        //                 return null;
        //             })
        //         });
        //     })
        // });

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
                            <div className="row">
                                <div className="col-4 clinic-row-image">
                                    <img src={require(`../../assets/images/clinics/1.jpg`)} alt={index}/>
                                </div>
                                <div className="col-8 clinic-row-description">
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