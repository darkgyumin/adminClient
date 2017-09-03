import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as popupActions from '../../modules/popup';

import Style from '../../utils/Style';
import Dom from '../../utils/Dom';
import Util from '../../utils/Util';

import PageInfo from '../../components/content/table/PageInfo';
import SearchForm from '../../components/content/table/SearchForm';
import Paging from '../../components/content/table/Paging';
import ConfirmModal from '../../components/content/table/ConfirmModal';

import PopupRegisterModal from '../../components/content/popup/PopupRegisterModal';
import PopupItem from '../../components/content/popup/PopupItem';

class PopupList extends Component {
    componentWillMount() {
        const {page, searchKey, searchWord, PopupActions} = this.props;
        console.log('popup componentWillMount', page, searchKey, searchWord);
        let params = {}
        params.page = page;
        params.searchKey = searchKey;
        params.searchWord = searchWord;
        params.listNum = 10;

        PopupActions.getAll(params);
    }

    componentWillReceiveProps(nextProps) {
        const {page, searchKey, searchWord, PopupActions} = this.props;
        console.log('popup componentWillReceiveProps', nextProps);

        console.log(page != nextProps.page);
        /*
        console.log((JSON.stringify(params) == JSON.stringify(nextProps.params)), JSON.stringify(params), JSON.stringify(nextProps.params));
        console.log((params.page != nextProps.params.page), params.page, nextProps.params.page);
        
        if((JSON.stringify(params) != JSON.stringify(nextProps.params)))
            */
        if(page != nextProps.page || 
            searchKey != nextProps.searchKey ||
            searchWord != nextProps.searchWord) {
                let params = {}
                params.page = nextProps.page;
                params.searchKey = nextProps.searchKey;
                params.searchWord = nextProps.searchWord;
                params.listNum = 10;
                
                PopupActions.getAll(params);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('popup shouldComponentUpdate', Util.isEmpty(nextProps.data));
        if(Util.isEmpty(nextProps.data) != undefined) 
            return true; 
        else 
            return false;
    }
    
    render() {
        const {loading, data, error, 
                page, searchKey, searchWord, 
                PopupActions} = this.props;

        if(Util.isEmpty(data)) return(<div></div>);
        
        let item = '';
        if(data.data != null) {
            let num = data.num;
            item = data.data.map(
                (item, i) => {
                    return (<PopupItem 
                        key={i}
                        num={num--}
                        {...item}
                     />)
                }
            );
        }

        let paging = data.paging;
        let firstPage = data.first_page;
        let lastPage = data.last_page;
        let totalRecord = data.total_record;
        let totalPage = data.total_page;

        return (
            <div className="box">
                <div className="box-header">
                    <div className="col-xs-5 col-lg-7">
                        {/*totalRecord:전체수, nowPage:현재페이지, totalPage:전체페이지*/}
                        <PageInfo totalRecord={totalRecord} 
                                    nowPage={page} totalPage={totalPage} />
                    </div>

                    <div className="col-xs-7 col-lg-5">
                        <SearchForm onChangeSearch={
                                        ({searchKey, searchWord}) => {
                                            PopupActions.changeSearch({searchKey, searchWord})
                                        }
                                    } />
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
                        <Paging firstPage={firstPage} 
                                    lastPage={lastPage} 
                                    nowPage={page} 
                                    paging={paging}
                                    onChangePage={
                                        (page) => {
                                            PopupActions.changePage(page)
                                        }
                                    } />

                        <div className="col-xs-12 col-md-3 col-lg-3 text-right">
                            <button type="button" className="btn btn-default" 
                                data-toggle="modal" data-target="#registerModal" 
                                data-backdrop="static">등록</button>
                        </div>
                    </div>

                    <PopupRegisterModal />

                    <ConfirmModal />
                    
                </div>
            </div>
        );
    }

    componentDidMount() {
        let $ = window.$;
        
        console.log('popup componentDidMount');
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

    insertData() {
        const {PopupActions} = this.props;

        console.log('insertData');
        let params = {};
        params.title = '제목';
        PopupActions.postData(params);
    }
}

export default connect(
    (state) => ({
        loading: state.popup.pending,
        data: state.popup.data,
        error: state.popup.error,
        page: state.popup.page,
        searchKey: state.popup.searchKey,
        searchWord: state.popup.searchWord
    }),
    (dispatch) => ({
        PopupActions: bindActionCreators(popupActions, dispatch)
    })
)(PopupList);