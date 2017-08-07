import React from 'react';
import PropTypes from 'prop-types';
import Style from '../utils/Style';
import Dom from '../utils/Dom';

const Register = ({}) => {

    Style.initAddClass(Dom.selector('body'), 'hold-transition register-page');

    return (
        <div>
            <div className="register-box">
                <div className="register-logo">
                    <a href="#admin"><b>Admin</b></a>
                </div>

                <div className="register-box-body">
                    <p className="login-box-msg">Register a new membership</p>

                    <form action="" method="post">
                        <div className="form-group has-feedback">
                            <input type="text" className="form-control" placeholder="Full name" />
                            <span className="glyphicon glyphicon-user form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Email" />
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password" />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Retype password" />
                            <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <div className="checkbox icheck">
                                    <label>
                                    <input type="checkbox" /> I agree to the <a href="#terms">terms</a>
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-4">
                            <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
                            </div>
                        </div>
                    </form>

                    <div className="social-auth-links text-center">
                    <p>- OR -</p>
                    <a href="#facebook" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign up using
                        Facebook</a>
                    <a href="#google" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign up using
                        Google+</a>
                    </div>

                    <a href="login.html" className="text-center">I already have a membership</a>
                    
                </div>
                
            </div>
        </div>
    );


};

Login.propTypes = {
    
};

export default Login;