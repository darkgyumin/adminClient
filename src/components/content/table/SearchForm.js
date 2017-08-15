import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Style from '../../../utils/Style';
import Dom from '../../../utils/Dom';

class SearchForm extends Component {
    render() {
        return (
            <div className="box-tools">			
                <div className="input-group input-group-sm pull-right">
                    <select id="searchKey" name="searchKey" className="form-control">
                        <option value="title">제목</option>
                    </select>
                    
                    <span className="input-group-btn"></span>
                    <input type="text" name="searchWord" value="" className="form-control pull-right" placeholder="검색어 입력" />
                
                    <div className="input-group-btn">
                        <button type="button" id="btnSearch" className="btn btn-default"><i className="fa fa-search"></i></button>

                        <button type="button" id="btnRefresh" className="btn btn-default"><i className="fa fa-refresh"></i></button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        Dom.selector('#btnSearch').addEventListener('click', () => {

        });
        Dom.selector('#btnRefresh').addEventListener('click', () => {
            //toDo 리프래쉬 대신 화면전환 없이 리셋 되도록
            window.location.reload();
        });
    }
}

SearchForm.propTypes = {

};

export default SearchForm;