import axios from "axios";

// let klient = `http://localhost/index.php/restApi/request/model/Klient/pagination/{"page":1, "itemsPerPage":1000}`;
// let klislo = `http://localhost/index.php/restApi/request/model/KliSlo/pagination/{"page":1, "itemsPerPage":10000}`;

export const clinicsObj = process.env.REACT_APP_CLINICS_DETAILS;

export const clinicsName = process.env.REACT_APP_CLINICS_NAME;

export function getToken(userData) {
    return axios({
        method: 'post',
        url: process.env.REACT_APP_GENERATE_AUTH_KEY,
        headers: {
            'Content-Type': 'application/json',
            'X-PINGOTHER': 'pingpong'
        },
        data: {
            "user-key": userData
        }
    })
};

export const getSessionId = (login, password) => {
    return axios({
        method: 'post',
        url: process.env.REACT_APP_SESSION_ID ,
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "username": login,
            "password": password,
            "rememberMe": false
        }
    })
}
