import axios from "axios";

// let klient = `http://localhost/index.php/restApi/request/model/Klient/pagination/{"page":1, "itemsPerPage":1000}`;
// let klislo = `http://localhost/index.php/restApi/request/model/KliSlo/pagination/{"page":1, "itemsPerPage":10000}`;

export const clinicsObj = `https://qang.bpower2.com/index.php/restApi/gwip-clinics?details=true`;

export const clinicsName = `https://qang.bpower2.com/index.php/restApi/gwip-clinics`;

export function getToken(userData) {
    return axios({
        method: 'post',
        url: 'https://qang.bpower2.com/index.php/restApi/generateJWT',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "user-key": userData
        }
    })
};

export const getSessionId = (login, password) => {
    return axios({
        method: 'post',
        url: 'https://qang.bpower2.com/index.php/restApi/session-id',
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
