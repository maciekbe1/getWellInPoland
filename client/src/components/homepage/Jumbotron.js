import React, { useContext } from 'react';
import JumbotronSearch from "./JumbotronSearch";
import AuthContext from "../context/auth-context";

const Jumbotron = () => {
    const context = useContext(AuthContext)
    return (
        <div>
            <div className="jumbotron container-fluid">
                <div className="container">
                    <div className="jumbotron-title-wrapper">
                        <h1 className="display-4">
                            Find healthcare abroad
                        </h1>
                        <ul>
                            <li>
                                <i className="fas fa-check"></i>
                                Internationally accredited hospitals
                            </li>
                            <li>
                                <i className="fas fa-check"></i>
                                Healthcare for every budget
                            </li>
                            <li>
                                <i className="fas fa-check"></i>
                                Dedicated personal assistance
                            </li>
                            <li>
                                <i className="fas fa-check"></i>
                                Completely free consultations
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {context.isAuth
                ? <JumbotronSearch />
                : null
            }
        </div>

     );
};

export default Jumbotron;