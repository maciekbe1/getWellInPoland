import React from 'react'
import axios from 'axios'

class Test extends React.Component {

    componentDidMount() {
        const get = process.env.REACT_APP_CLINICS_NAME;
        const post = process.env.REACT_APP_GENERATE_AUTH_KEY;
        const userData = process.env.REACT_APP_USER_DATA_KEY;
        axios.get(get).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        });

        axios.post(post, {
            headers: {
                'X-PINGOTHER': 'pingpong',
                'Content-Type': 'application/json'
            },
            data: {
                "user-key": userData
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                Przerwa techniczna...
            </div>
        )
    }
}

export default Test