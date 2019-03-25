import React, { useState, useEffect } from 'react';
import {clinicsObj} from "../../api/api";
import axios from "axios";

function OurPartners() {
    const [clinicsApi, setClinicsApi] = useState(null);
    // const [isUpdate, setUpdate] = useState(null);

    useEffect(() => {
        axios.get(clinicsObj).then(res => {
            return setClinicsApi(res)
        }).catch(err => {
            console.log(err);
        });
    }, []);
    // console.log(clinicsApi);
    let content = "";
    return (
        <div>
            {content}
        </div>
    );
}

export default OurPartners