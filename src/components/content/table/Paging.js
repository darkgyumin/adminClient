import React, { Component } from 'react';
import Dom from '../../../utils/Dom';

class Paging extends Component {
    render() {
        const {firstPage, lastPage, 
                startPage, blockPage, nowPage, 
                paging, onChangePage} = this.props;

        let arrPage = [];
        for(let i=0; i<blockPage; i++) {
            arrPage.push(startPage + i);
        }

        let arrPaging = [];
        if(paging) arrPaging = paging.split(' ');
        console.log(nowPage);

        return (
            <div className="col-xs-12 col-md-9 col-lg-9">
                <ul className="pagination">
                    <PagingLi num="이전" />
                    {arrPaging.map((num, i) => {
                        return (
                            <PagingLi num={num} nowPage={nowPage} key={i} 
                                onChangePage={(page) => {
                                    onChangePage(page)
                                }} />
                        );
                    })}
                    <PagingLi num="다음" />
                </ul>
            </div>
        );
    }

    componentDidMount() {
        Dom.on(Dom.selector('.pagination'), 'click', function(e) {
            let elem = e.target;
        });
    }
}

Paging.defaultProps = {
    startPage: 1,
    blockPage: 10,
    nowPage: 1,
    onChangePage: () => console.warn('Paging onChangePage not defined.')
};

export default Paging;

const PagingLi = ({num, nowPage, onChangePage}) => {
    const active = (parseInt(num) === parseInt(nowPage)) ? 'active' : null;
    return (
        <li className={active}><a href={'#'+num} onClick={(e)=>{onChangePage(num);}}>{num}</a></li>
    )
};

PagingLi.defaultProps = {
    onChangePage: () => console.warn('PagingLi onChangePage not defined.')
}