import React, { Component } from 'react';
import Dom from '../../../utils/Dom';

import InputText from '../table/InputText';

class PopupRegisterModal extends Component {

    componentWillMount() {
    }

    componentWillUpdate() { 
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
                        <form id="registerForm" name="registerForm" className="form-horizontal">
                            <div className="modal-body">
                                <div className="box-body">
                                    <InputText label="제목" name="title" />

                                    <div className="form-group">
                                        <div className="lnbrd">
                                            <label for="content" className="col-sm-2 col-lg-2 control-label">내용</label>

                                            <div className="col-sm-10 col-lg-10">
                                                <textarea id="content" name="content"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label for="useYn" className="col-sm-2 col-lg-2 control-label">사용여부</label>

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
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-default">확인</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let $ = window.$;
        
        $(() => {
            //icheck
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%' // optional
            });

            //validate
            $('#registerForm').bootstrapValidator({
                excluded: [':disabled'],
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    title: {
                        validators: {
                            notEmpty: {
                                message: '제목을 입력하세요.'
                            }
                        }
                    },
                    content: {
                        group: '.lnbrd',
                        validators: {
                            notEmpty: {
                                message: '내용을 입력하세요.'
                            }
                        }
                    }
                }
            }).find('[name="content"]')
            .ckeditor()
            .editor
            .on('change', function() {
                $('#registerForm').bootstrapValidator('revalidateField', 'content');
            });

            $('#registerForm').on('submit', (e) => {
                e.preventDefault();

                console.log('=====================================================');
            });
        });

        //확인버튼
        /*
        Dom.on(Dom.selector('#btnSubmit'), 'click', function() {
            //window.CKEDITOR.instances['editor1'].setData('<p>fdsafsdaf</p>');
            //console.log(window.CKEDITOR.instances.editor1.getData());

            $('#PopupRegisterModal').modal('hide');
        });
        */
    }
}

export default PopupRegisterModal;