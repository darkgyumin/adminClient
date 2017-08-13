import React from 'react';
import PropTypes from 'prop-types';

const ContentHeader = ({title, depth1, depth2}) => {
    return (
        <section className="content-header">
            <h1>
                {title}
            </h1>
            <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                {(depth1 == undefined) ? null : (<li><a href="#">{depth1}</a></li>)}
                {(depth2 == undefined) ? null : (<li><a href="#">{depth2}</a></li>)}
                <li className="active">{title}</li>
            </ol>
        </section>
    );
};

export default ContentHeader;