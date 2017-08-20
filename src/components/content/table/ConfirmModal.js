import React, { Component } from 'react';
import Dom from '../../../utils/Dom';

class ConfirmModal extends Component {
    render() {
        return (
            <div className="modal fade" id="confirmModal" role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">확인화면</h4>
                        </div>
                        <div className="modal-body">
                            정말로 삭제하시겠습니까?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" id="btnConfirmOk">확인</button>
                            <button type="button" className="btn btn-default" id="btnConfirmCancel">취소</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let $ = window.$;
        
        //확인버튼
        Dom.on(Dom.selector('#btnConfirmOk'), 'click', function() {
            //window.CKEDITOR.instances['editor1'].setData('<p>fdsafsdaf</p>');
            //console.log(window.CKEDITOR.instances.editor1.getData());

            $('#confirmModal').modal('hide');
        });

        //취소버튼
        Dom.on(Dom.selector('#btnConfirmCancel'), 'click', function() {

            $('#confirmModal').modal('hide');
        });
    }
}

export default ConfirmModal;