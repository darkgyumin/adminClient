import React from 'react';
import PropTypes from 'prop-types';

const TableList = props => {
    return (
        <div className="box">
            <div className="box-header">
                <div className="col-xs-5 col-lg-9">
                    <div className="box-title">
                        총 <span id="total-record">3100</span>건 | 페이지번호 <span id="now-page">1</span>/<span id="total-page">2111</span>
                    </div>
                </div>

                <div className="col-xs-7 col-lg-3">
                    <div className="box-tools">			
                        <div className="input-group input-group-sm pull-right">
                            <select id="searchKey" name="searchKey" className="form-control">
                                <option value="title">제목</option>
                            </select>
                            
                            <span className="input-group-btn"></span>
                            <input type="text" name="search_word" value="" className="form-control pull-right" placeholder="Search" />
                        
                            <div className="input-group-btn">
                                <button type="button" id="btn_search" className="btn btn-default"><i className="fa fa-search"></i></button>

                                <button type="button" id="btn_refresh" className="btn btn-default"><i className="fa fa-refresh"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-body table-responsive">
                <table id="example2" className="table table-bordered table-striped">
                    <colgroup>
                        <col width="5%" />
                        <col width="*" />
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
                            <td className="text-center">X</td>
                        </tr>
                        <tr>
                            <td className="text-center">2</td>
                            <td>Internet Explorer 4.0</td>
                            <td className="text-center">2012-10-10</td>
                            <td className="text-center">X</td>
                        </tr>
                    </tbody>
                </table>
                <div className="col-xs-12 col-lg-9">
                    <div className="dataTables_paginate paging_simple_numbers">
                        <ul className="pagination">
                            <li><a href="#">이전</a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">6</a></li>
                            <li><a href="#">7</a></li>
                            <li><a href="#">8</a></li>
                            <li><a href="#">9</a></li>
                            <li><a href="#">10</a></li>
                            <li><a href="#">다음</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

TableList.propTypes = {
    
};

export default TableList;