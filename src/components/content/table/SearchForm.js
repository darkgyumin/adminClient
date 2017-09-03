import React, { Component } from 'react';

import Style from '../../../utils/Style';
import Dom from '../../../utils/Dom';

class SearchForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchKey: '',
            searchWord: ''
        };
    }

    render() {
        return (
            <div className="box-tools">			
                <div className="input-group input-group-sm pull-right">
                    <select id="searchKey" name="searchKey" 
                                onChange={this.onChangeSearchKey.bind(this)}
                                className="form-control">
                        <option value="">선택</option>
                        <option value="title">제목</option>
                    </select>
                    
                    <span className="input-group-btn"></span>
                    <input type="text" name="searchWord" value={this.state.searchWord} 
                            onChange={this.onChangeSearchWord.bind(this)}
                            className="form-control pull-right" placeholder="검색어 입력" />
                
                    <div className="input-group-btn">
                        <button type="button" id="btnSearch" 
                                    className="btn btn-default" 
                                    onClick={this.onClickSearch.bind(this)} ><i className="fa fa-search"></i></button>

                        <button type="button" id="btnRefresh" 
                                    className="btn btn-default"><i className="fa fa-refresh"></i></button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        Dom.on(Dom.selector('#btnRefresh'), 'click', function() {
            //toDo 리프래쉬 대신 화면전환 없이 리셋 되도록
            window.location.reload();
        });
    }

    onChangeSearchKey(e) {
        this.setState({searchKey: e.target.value});
    }

    onChangeSearchWord(e) {
        this.setState({searchWord: e.target.value});
    }

    onClickSearch() {
        this.props.onChangeSearch(this.state);
    }
}

export default SearchForm;