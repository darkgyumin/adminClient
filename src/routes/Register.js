import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from '../utils/Style';
import Dom from '../utils/Dom';

class Register extends Component {

    render() {
        Style.initAddClass(Dom.selector('body'), 'hold-transition register-page');

        return (
            <div>
                <div className="register-box">
                    <div className="register-logo">
                        <a href="#admin"><b>Admin</b></a>
                    </div>

                    <div className="register-box-body">
                        <p className="register-box-msg">Sign in to start your session</p>

                        <form id="form">
                            <div className="form-group has-feedback">
                                <input type="email" name="email" className="form-control" placeholder="Email" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" name="password" className="form-control" placeholder="Password" />
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

                        <a href="Register.html" className="text-center">I already have a membership</a>
                        
                    </div>
                    
                </div>
            </div>
        );
    }

    componentDidMount() {
        let $ = window.$;
        
        //icheck
        $(() => {
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%' // optional
            });
        });
        
        //validate
        $('#form').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                email: {
                    validators: {
                        notEmpty: {
                            message: '이메일을 입력하세요.'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: '비밀번호를 입력하세요.'
                        }
                    }
                }
            }
        }).on('submit', function (e) {
            if (e.isDefaultPrevented()) {
                //invalide
            } else {
                //valide

                //fnRegister();
                return false;
            }
        });
    }
};

Register.propTypes = {
    
};

export default Register;