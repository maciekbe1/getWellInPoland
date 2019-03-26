import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalContext from './global-context';

const GlobalState = props => {
    // const [clinicsDetails, setClinicsDetails] = useState([])
    const [premiumClinics, setPremiumClinics] = useState([])
    const [clinicsName, setClinicsName] = useState([])
    // const [content, setContent] = useState([])

    useEffect(() => {
        axios.get('https://qang.bpower2.com/index.php/restApi/gwipClinics')
        .then(res => {
            setClinicsName(res.data)
        })
        axios.get('https://qang.bpower2.com/index.php/restApi/gwipClinics?details=true')
        .then(res => {
            let arr = []
            res.data.forEach( clinic => {
                if(clinic["KlientData_businessType-21306_c2abvm"].value === "1"){
                    arr.push(clinic)
                }
            })
            return (
                // setClinicsDetails(res.data),
                setPremiumClinics(arr)
            )
        })
    }, [])

    // console.log(premiumClinics, clinicsDetails);


    return(
        <GlobalContext.Provider
            value={{
                // clinicsDetails,
                premiumClinics,
                clinicsName
            }}
        >
        {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;