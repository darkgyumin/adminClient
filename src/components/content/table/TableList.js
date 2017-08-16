import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Style from '../../../utils/Style';
import Dom from '../../../utils/Dom';

import PageInfo from './PageInfo';
import SearchForm from './SearchForm';
import Paging from './Paging';
import RegisterModal from './RegisterModal';
import ConfirmModal from './ConfirmModal';

class TableList extends Component {
    
    render() {
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
                            <tr>
                                <td className="text-center">1</td>
                                <td>Internet Explorer 4.0</td>
                                <td className="text-center">2012-10-10</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-default btn-xs btnModify">수정</button>
                                    &nbsp;
                                    <button type="button" className="btn btn-default btn-xs btnDelete">삭제</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td>Internet Explorer 4.0</td>
                                <td className="text-center">2012-10-10</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-default btn-xs btnModify">수정</button>
                                    &nbsp;
                                    <button type="button" className="btn btn-default btn-xs btnDelete">삭제</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="control-area"> 
                        <Paging nowPage="2" />

                        <div className="col-xs-12 col-md-3 col-lg-3 text-right">
                            <button type="button" className="btn btn-default" data-toggle="modal" data-target="#registerModal">등록</button>
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
        
        //수정버튼
        Dom.selector('.btnModify').forEach((modify) => {
            modify.addEventListener('click', (e) => {
                let elem = e.target;
                $('#registerModal').modal('show');
            });
        });

        Dom.selector('.btnDelete').forEach((modify) => {
            modify.addEventListener('click', (e) => {
                let elem = e.target;
                $('#confirmModal').modal('show');
            });
        });
        //삭제버튼
    }
};

export default TableList;