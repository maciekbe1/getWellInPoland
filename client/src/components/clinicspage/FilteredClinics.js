// import React, {Component} from 'react';
// import {Route, Link} from "react-router-dom";
// import Clinic from './Clinic';
// import Pagination from 'react-paginating';
//
// class FilteredClinics extends Component{
//     state = {
//         currentPage: 1,
//         clinicsLength: this.props.filtered.length,
//         clinicspage: this.props.filtered
//     };
//     // handlePageChange = (page, e) => {
//     //     this.setState({
//     //         currentPage: page
//     //     });
//     // };
//     clinicSelectedHandler = (id) => {
//         this.props.history.push( `/clinicspage/${id.id}` );
//     };
//     componentWillReceiveProps(nextProps) {
//         if (nextProps.filtered.length !== this.state.clinicsLength) {
//             this.setState({clinicsLength: nextProps.filtered.length, currentPage: 1})
//         }
//     }
//     clinicsRender = () => {
//         if (this.props.history.location.pathname === '/clinicspage') {
//             return (
//                 <div className="container">
//                     <div className="row">
//                         {this.state.clinicspage.map((item, index) => {
//                             return <p>{item.basicInfo.name}</p>
//                         })}
//                     </div>
//                 </div>
//             )
//         }
//     };
//     render() {
//         // const limit = 2;
//         // const displayClinics = 5;
//         // const pageCount = 3;
//         // const total = Math.ceil(this.state.clinicsLength * limit / displayClinics);
//         // const { currentPage } = this.state;
//         // const { filtered } = this.props;
//         return(
//             <div className='container'>
//                 {/*{*/}
//                     {/*this.state.clinicsLength !== 0 ?*/}
//                         {/*filtered.slice((currentPage - 1)*displayClinics, currentPage*displayClinics).map(clinic => {*/}
//                             {/*return (*/}
//                                 {/*<div className="filtered-form-component" key={clinic.id} >*/}
//                                     {/*<div className="d-flex">*/}
//                                         {/*<p>{clinic.basicInfo.name}</p>*/}
//                                     {/*</div>*/}
//                                     {/*<div className="d-flex justify-content-end">*/}
//                                         {/*<Link to={`/${clinic.id}`} onClick={() => this.clinicSelectedHandler(clinic)} className="d-flex justify-content-center align-items-center btn btn-primary docas-btn-primary">Show</Link>*/}
//                                     {/*</div>*/}
//                                 {/*</div>*/}
//                             {/*)*/}
//                         {/*}) : <div><h1 className="text-center">Brak wyników</h1></div>*/}
//                 {/*}*/}
//                 {this.clinicsRender()}
//                 <Route path={this.props.match.url + '/:id'} component={Clinic} />
//             </div>
//         )
//     }
// }
// export default FilteredClinics;