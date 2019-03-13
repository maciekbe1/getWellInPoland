import React from 'react';
import {AuthConsumer} from "../context/AuthContext";

const SignIn = (props) => {

    // const wrongText = props.wrongText ? <div className="text-danger">Wrong login or password!</div> : null;

    return (
        <AuthConsumer>

            {(context) => (
                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">Please sign in</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className="form-group">
                                <label htmlFor="recipient-name" className="col-form-label">Login:</label>
                                <input type="text" className="form-control" id="login" onChange={(e) => context.login(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="recipient-name" className="col-form-label">Password:</label>
                                <input type="password" className="form-control" id="password" onChange={(e) => context.password(e.target.value)} />
                            </div>
                            </form>
                            {context.alert ? <div className="text-danger">Wrong login or password!</div> : null}
                        </div>
                        <div className="modal-footer">
                            <button id="closeLoginModal" type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={context.signIn}>Sign in</button>
                        </div>
                        </div>
                    </div>
                </div>
            )}
        </AuthConsumer>
    );
};

export default SignIn;