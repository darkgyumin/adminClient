import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from '../utils/Style';
import Dom from '../utils/Dom';

class Login extends Component {

    render() {
        Style.initAddClass(Dom.selector('body'), 'hold-transition login-page');

        return (
            <div>
                <div className="register-box">
                    <div className="register-logo">
                        <a href="#admin"><b>Admin</b></a>
                    </div>

                    <div className="register-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form action="" method="post">
                            <div className="form-group has-feedback">
                                <input type="email" className="form-control" placeholder="Email" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" placeholder="Password" />
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            </div>
                            <div className="row">
                                <div className="col-xs-8">
                                    <div className="checkbox icheck">
                                        <label>
                                        <input type="checkbox" /> Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                                </div>
                            </div>
                        </form>

                        <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#facebook" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using Facebook</a>
                        <a href="#google" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using Google+</a>
                        </div>

                        <a href="login.html" className="text-center">I already have a membership</a>
                        
                    </div>
                    
                </div>
            </div>
        );
    }

    componentDidMount() {
        let $ = window.$;
        
        $(() => {
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%' // optional
            });
        });
    }
};

Login.propTypes = {
    
};

export default Login;