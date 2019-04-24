import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth-context'
import GlobalState from '../context/global-context';

const FindPopularClinicProcedures = () => {
    const authContext = useContext(AuthContext)
    const globalState = useContext(GlobalState);
    const {language} = globalState

    return (
        <div className="find-clinic">
            <div className="container">
                <div className="row">
                    <h2>
                        {language.homepage.text_9}
                    </h2>
                    {authContext.isAuth
                        ? (
                            <>
                                <Link className="card col-lg-3 col-sm-6 text-white" to={`/find-popular/dentistry`}>
                                    <img src={require(`../../assets/images/dentist.jpg`)} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">{language.homepage.text_10}</h5>
                                        <div className="card-information">
                                            <p className="card-text">{language.homepage.text_11}</p>
                                            <p className="card-text">{language.homepage.text_12}</p>
                                            <p className="card-text">{language.homepage.text_13}</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="card col-lg-3 col-sm-6 text-white" to={`/find-popular/oncology`}>
                                    <img src={require(`../../assets/images/oncology.jpg`)} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">{language.homepage.text_14}</h5>
                                        <div className="card-information">
                                            <p className="card-text">{language.homepage.text_15}</p>
                                            <p className="card-text">{language.homepage.text_16}</p>
                                            <p className="card-text">{language.homepage.text_17}</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="card col-lg-3 col-sm-6 text-white" to={`/find-popular/ophthalmology`}>
                                    <img src={require(`../../assets/images/ophtalmology.jpg`)} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">{language.homepage.text_18}</h5>
                                        <div className="card-information">
                                            <p className="card-text">{language.homepage.text_19}</p>
                                            <p className="card-text">{language.homepage.text_20}</p>
                                            <p className="card-text">{language.homepage.text_21}</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="card col-lg-3 col-sm-6 text-white" to={`/find-popular/orthopedics`}>
                                    <img src={require(`../../assets/images/orthopedics.jpg`)} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">{language.homepage.text_22}</h5>
                                        <div className="card-information">
                                            <p className="card-text">{language.homepage.text_23}</p>
                                            <p className="card-text">{language.homepage.text_24}</p>
                                            <p className="card-text">{language.homepage.text_25}</p>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        )
                        : (
                            <>
                                <div className="card col-lg-3 col-sm-6 text-white" data-toggle="modal" data-target="#loginModal">
                                    <img src={require(`../../assets/images/dentist.jpg`)} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">{language.homepage.text_10}</h5>
                                        <div className="card-information">
                                            <p className="card-text">{language.homepage.text_11}</p>
                                            <p className="card-text">{language.homepage.text_12}</p>
                                            <p className="card-text">{language.homepage.text_13}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card col-lg-3 col-sm-6 text-white" data-toggle="modal" data-target="#loginModal">
                                    <img src={require(`../../assets/images/oncology.jpg`)} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">{language.homepage.text_14}</h5>
                                        <div className="card-information">
                                            <p className="card-text">{language.homepage.text_15}</p>
                                            <p className="card-text">{language.homepage.text_16}</p>
                                            <p className="card-text">{language.homepage.text_17}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card col-lg-3 col-sm-6 text-white" data-toggle="modal" data-target="#loginModal">
                                    <img src={require(`../../assets/images/ophtalmology.jpg`)} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">{language.homepage.text_18}</h5>
                                        <div className="card-information">
                                            <p className="card-text">{language.homepage.text_19}</p>
                                            <p className="card-text">{language.homepage.text_20}</p>
                                            <p className="card-text">{language.homepage.text_21}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card col-lg-3 col-sm-6 text-white" data-toggle="modal" data-target="#loginModal">
                                    <img src={require(`../../assets/images/orthopedics.jpg`)} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">{language.homepage.text_22}</h5>
                                        <div className="card-information">
                                            <p className="card-text">{language.homepage.text_23}</p>
                                            <p className="card-text">{language.homepage.text_24}</p>
                                            <p className="card-text">{language.homepage.text_25}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                        }
                </div>
            </div>
        </div>
     );
}

export default FindPopularClinicProcedures;