import React, {useState, useEffect, useContext} from 'react';
import {Link} from "react-router-dom";
import {clinicsObj} from "../../api/api";
import axios from "axios";
import AuthContext from '../../components/context/auth-context'

function OurPartners() {
    const [clinicsApi, setClinicsApi] = useState(null);
    const [isUpdate, setUpdate] = useState(true);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        axios.get(clinicsObj).then(res => {
            return setClinicsApi(res.data)
        }).then(() => {
            return setUpdate(false);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    let content = null;
    if (isUpdate) {
        content = <h1>Loading...</h1>
    } else {
        content = clinicsApi.slice(0, 3).map((item, index) => {
            // if(item["KlientData_businessType-21306_c2abvm"].value === "1") {
                return (
                    <div key={index} className="col-lg-3 col-sm-6">
                        <div className="card">
                            <Link to={`/all-clinics/clinic/${item.kli_id.value}`}><img alt={""} src={require(`../../assets/images/${item.kli_id.value}.jpg`)}/></Link>
                        </div>
                    </div>
                )
            // }
            // return null
        });
    }
    return (
        <div className="container">
            {
                authContext.isAuth ? <div className="text-center">
                    <h2>Our Partners</h2>
                </div> : null
            }
            <div className="row">
            { authContext.isAuth ? content : null }
            </div>
        </div>
    );
}

export default OurPartners