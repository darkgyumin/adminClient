import React from 'react';

const Menu = ({link, name, subNames, label}) => {
    let subName = null;
    if(subNames) {
        subName = subNames.split(',').map(
            (subName, i) => (
                <li key={i}><a href={link}><i className="fa fa-circle-o"></i> {subName}</a></li>
            )
        );
    }
    return (
        <li className="treeview active">
            <a href={link}>
                <i className="fa fa-circle"></i> <span>{name}</span>
                <span className="pull-right-container">
                    {(subNames === undefined || subNames === '') ? null : (<i className="fa fa-angle-left pull-right"></i>)}
                    {(label === undefined) ? null : (<span className="label label-primary pull-right">{label}</span>)}
                </span>
            </a>
            {(subNames === undefined || subNames === '') ? null : (
                <ul className="treeview-menu">
                   {subName}
                </ul>
            )}
        </li> 
    );
};

export default Menu;