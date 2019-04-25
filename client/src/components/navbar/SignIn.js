import React, { useContext } from 'react';
import AuthContext from "../context/auth-context";
import GlobalState from '../context/global-context';

const SignIn = (props) => {

    const context = useContext(AuthContext)
    const globalState = useContext(GlobalState);
    const {language} = globalState

    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="loginModalLabel">{language.navigation.text_6}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form id="signInModal" onKeyPress={e => e.key === 'Enter' ? context.signIn() : null}>
                        <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label">{language.navigation.text_7}</label>
                            <input type="text" className="form-control" id="login" onChange={(e) => context.login(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label">{language.navigation.text_8}</label>
                            <input type="password" className="form-control" id="password" onChange={(e) => context.password(e.target.value)} />
                        </div>
                    </form>
                    {context.alert ? <div className="text-danger">{language.navigation.text_11}</div> : null}
                </div>
                <div className="modal-footer">
                    <button id="closeLoginModal" type="button" className="d-none btn btn-secondary" data-dismiss="modal">{language.navigation.text_9}</button>
                    <a id="remindPassword" href="https://qang.bpower2.com/index.php/site/restore" className="btn btn-secondary text-white">{language.navigation.text_12}</a>
                    <button type="button" className="btn btn-primary" onClick={context.signIn}>
                        {context.loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : language.navigation.text_2}
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;