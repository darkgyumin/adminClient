import React, { Component } from 'react';
import Dom from '../../../utils/Dom';

import InputText from './InputText';

class RegisterModal extends Component {

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');    
    }

    render() {
        return (
            <div className="modal fade" id="registerModal" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">입력화면</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal">
                                <div className="box-body">
                                    <InputText label="제목" name="title" />

                                    <div className="form-group">
                                        <label for="hospitalName" className="col-sm-2 col-lg-2 control-label">내용</label>

                                        <div className="col-sm-10 col-lg-10">
                                            <textarea id="editor" name="editor" rows="10" cols="80"></textarea>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label for="hospitalName" className="col-sm-2 col-lg-2 control-label">사용여부</label>

                                        <div className="col-sm-10 col-lg-10">
                                            
                                            <div class="form-group">
                                                <label>
                                                    <input type="radio" name="useYn" value="Y" checked /> 사용
                                                </label>
                                                &nbsp;&nbsp;
                                                <label>
                                                    <input type="radio" name="useYn" value="N" /> 미사용
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                </div>          
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" id="btnSubmit">확인</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let $ = window.$;

        $(function () {
            window.CKEDITOR.replace('editor');
        });

        //확인버튼
        Dom.on(Dom.selector('#btnSubmit'), 'click', function() {
            //window.CKEDITOR.instances['editor1'].setData('<p>fdsafsdaf</p>');
            //console.log(window.CKEDITOR.instances.editor1.getData());

            $('#registerModal').modal('hide');
        });

        //icheck
        $(() => {
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%' // optional
            });
        });
    }
}

export default RegisterModal;