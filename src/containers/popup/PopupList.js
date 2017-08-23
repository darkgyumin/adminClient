import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as popupActions from '../../modules/popup';

import Style from '../../utils/Style';
import Dom from '../../utils/Dom';

import PageInfo from '../../components/content/table/PageInfo';
import SearchForm from '../../components/content/table/SearchForm';
import Paging from '../../components/content/table/Paging';
import RegisterModal from '../../components/content/table/RegisterModal';
import ConfirmModal from '../../components/content/table/ConfirmModal';

import PopupItem from '../../components/content/popup/PopupItem';

class PopupList extends Component {
    componentWillMount() {
        console.log('componentWillMount');
        const {PopupActions} = this.props;

        PopupActions.getAll();
    }
    
    render() {
        const {loading, data, error} = this.props;

        let item = '';
        if(data.data != null) {
            let num = data.num;
            item = data.data.map(
                (item, i) => {

                    console.log(item);
                    return (<PopupItem 
                        key={i}
                        num={num--}
                        {...item}
                     />)
                }
            );
        }

        return (
            <div className="box">
                <div className="box-header">
                    <div className="col-xs-5 col-lg-7">
                        {/*totalRecord:전체수, nowPage:현재페이지, totalPage:전체페이지*/}
                        <PageInfo totalRecord="3100" nowPage="1" totalPage="310" />
                    </div>

                    <div className="col-xs-7 col-lg-5">
                        <SearchForm />
                    </div>
                </div>
                <div className="box-body table-responsive">
                    <table id="example2" className="table table-bordered">
                        <colgroup>
                            <col width="80px" />
                            <col width="*" />
                            <col width="150px" />
                            <col width="120px" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th className="text-center">번호</th>
                                <th className="text-center">제목</th>
                                <th className="text-center">등록일</th>
                                <th className="text-center">관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            {item}
                        </tbody>
                    </table>
                    <div className="control-area"> 
                        <Paging nowPage="1" />

                        <div className="col-xs-12 col-md-3 col-lg-3 text-right">
                            <button type="button" className="btn btn-default" data-toggle="modal" data-target="#registerModal" data-backdrop="static">등록</button>
                        </div>
                    </div>

                    <RegisterModal />

                    <ConfirmModal />
                    
                </div>
            </div>
        );
    }

    componentDidMount() {
        let $ = window.$;
        
        console.log('componentDidMount');
        /*
        //수정버튼
        Dom.on(Dom.selector('.btnModify'), 'click', function() {
            $('#registerModal').modal({backdrop: 'static'});
        });

        //삭제버튼
        Dom.on(Dom.selector('.btnDelete'), 'click', function() {
            $('#confirmModal').modal({backdrop: 'static'});
        });
        */        
    }
}

export default connect(
    (state) => ({
        loading: state.popup.pending,
        data: state.popup.data,
        error: state.popup.error
    }),
    (dispatch) => ({
        PopupActions: bindActionCreators(popupActions, dispatch)
    })
)(PopupList);