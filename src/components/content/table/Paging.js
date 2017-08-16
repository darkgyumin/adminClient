import React, { Component } from 'react';
import Dom from '../../../utils/Dom';

class Paging extends Component {
    render() {
        const {startPage, blockPage, nowPage} = this.props;

        let arrPage = [];
        for(let i=0; i<blockPage; i++) {
            arrPage.push(startPage + i);
        }

        return (
            <div className="col-xs-12 col-md-9 col-lg-9">
                <ul className="pagination">
                    <PagingLi num="이전" />
                    {arrPage.map((num, i) => {
                        return (
                            <PagingLi num={num} nowPage={nowPage} key={i} />
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
    nowPage: 1
};

export default Paging;

const PagingLi = ({num, nowPage}) => {
    const active = (num === parseInt(nowPage)) ? 'active' : null;
    return (
        <li className={active}><a href={'#'+num}>{num}</a></li>
    )
};