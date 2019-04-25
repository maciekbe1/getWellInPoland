import React, {useState, useContext} from 'react';
import success from '../../assets/images/checked.png';
import axios from 'axios'
import { sha256 } from 'js-sha256';
import Input from '../skeletons/Input'
import '../../assets/styles/registerpage.scss'
import { Link } from "react-router-dom";
import GlobalState from '../context/global-context';

const RegisterPage = props => {
    const globalState = useContext(GlobalState);
    const {language} = globalState

    console.log(language.register);

    const [postMessage, setPostMessage] = useState({});
    const [sent, setSent] = useState(false);
    const [values, setValues] = useState({ login: "", email: "", password: "", passwordRepeat: "" });
    const onChange = (name, value) => setValues({ ...values, [name]: value });
    const handlePasswordError = (values) => {
        if (values.password.length !== 0) {
            if (values.password !== values.passwordRepeat) {
                return <div className="text-danger"><p>password is not compatible</p></div>
            } else {
                return null
            }
        }
    };
    const handleEmailError = () => {
        if ("email" in postMessage) {
            return <div className="text-danger"><p>{ postMessage.email }</p></div>
        }
    };
    const handleLoginError = () => {
        if ("login" in postMessage) {
            return <div className="text-danger"><p>{ postMessage.login }</p></div>
        }
    };
    const handleSubmit = (event, values) => {
        event.preventDefault();
        const password = sha256(values.password);
        const passwordRepeat = sha256(values.passwordRepeat);
        if(password === passwordRepeat) {
            axios({
                method: 'post',
                url: 'https://qang.bpower2.com/index.php/api/registerDocasUser?groupId=208d1458ba9870fdb3212293e03a6c57',
                headers: {
                    'X-PINGOTHER': 'pingpong',
                    'Content-Type': 'application/json'
                },
                data: {
                    "user": {"login": values.login, "password": password, "password_repeat": passwordRepeat, "email": values.email},
                    "userInfo": {}
                }
            }).then(function (response) {
                // console.log(response)
                if (response.data.code === 200) {
                    setSent(true)
                } else {
                    setPostMessage(response.data.message)
                }
            }).catch(errors => console.log(errors));
        } else {
            console.log("passwords is not valid");
        }
    };
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <div className="container d-flex flex-wrap">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Register</li>
                    </div>
                </ol>
            </nav>
            <div className="container register-page">
                <h1 className="text-center">{language.register.text_1}</h1>
                <div className="row justify-content-center">
                    {!sent ?
                        <form className="col-lg-6" onSubmit={event => handleSubmit(event, values)}>
                            <div className="form-group">
                                <label>{language.register.text_2}</label>
                                <Input
                                    name="login"
                                    placeholder=""
                                    type="login"
                                    value={values.login}
                                    onChange={onChange}
                                    className="form-control"
                                />
                                { ("login" in postMessage) ? handleLoginError() : null }
                            </div>
                            <div className="form-group">
                                <label>{language.register.text_3}</label>
                                <Input
                                    name="email"
                                    placeholder=""
                                    type="email"
                                    value={values.email}
                                    onChange={onChange}
                                    className="form-control"
                                    required
                                />
                                { ("email" in postMessage) ? handleEmailError() : null }
                            </div>
                            <div className="form-group">
                                <label>{language.register.text_4}</label>
                                <Input
                                    name="password"
                                    placeholder=""
                                    type="password"
                                    value={values.password}
                                    onChange={onChange}
                                    className="form-control"
                                    required
                                />
                                { handlePasswordError(values) }
                            </div>
                            <div className="form-group">
                                <label>{language.register.text_5}</label>
                                <Input
                                    name="passwordRepeat"
                                    placeholder=""
                                    type="password"
                                    value={values.passwordRepeat}
                                    onChange={onChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <button type="submit">{language.register.text_6}</button>
                        </form>
                        : <div className="d-flex justify-content-center align-items-center flex-column register-success">
                            <h2 className="text-success">{language.register.text_7}</h2>
                            <img alt="success" className="register-success-image" src={success}/>
                            <h4>{language.register.text_8}</h4>
                            <h3 className="text-center">{language.register.text_9}</h3>
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;