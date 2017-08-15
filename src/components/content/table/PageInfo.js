import React from 'react';

const PageInfo = ({totalRecord, nowPage, totalPage}) => {
    return (
        <div className="box-title">
            총 <span id="totalRecord">{totalRecord}</span>건 | 페이지번호 <span id="nowPage">{nowPage}</span>/<span id="totalPage">{totalPage}</span>
        </div>
    );
};

export default PageInfo;