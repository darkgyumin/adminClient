import React from 'react';
import PropTypes from 'prop-types';

const TableList = props => {
    return (
        <div className="box">
            <div className="box-header">
                <div className="col-xs-5">
                    <div className="box-title">
                        총 <span id="total-record">3100</span>건 | 페이지번호 <span id="now-page">1</span>/<span id="total-page">2111</span>
                    </div>
                </div>

                <div className="col-xs-7">
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
                    <thead>
                        <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 4.0
                            </td>
                            <td>Win 95+</td>
                            <td> 4</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 4.0
                            </td>
                            <td>Win 95+</td>
                            <td> 4</td>
                            <td>X</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

TableList.propTypes = {
    
};

export default TableList;