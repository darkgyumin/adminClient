import React from 'react';

import NotificationsMenuItem from './NotificationsMenuItem';

const NotificationsMenu = () => {
    return (
        <li className="dropdown notifications-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-bell-o"></i>
            <span className="label label-warning">10</span>
            </a>
            <ul className="dropdown-menu">
            <li className="header">You have 10 notifications</li>
            <li>
                <ul className="menu">
                    <NotificationsMenuItem className="fa fa-users text-aqua" notification="5 new members joined today" />
                    <NotificationsMenuItem className="fa fa-warning text-yellow" 
                                            notification="Very long description here that may not fit into the page and may cause design problems" />
                    <NotificationsMenuItem className="fa fa-users text-red" notification="5 new members joined today" />
                    <NotificationsMenuItem className="fa fa-shopping-cart text-green" notification="25 sales made" />
                </ul>
            </li>
            <li className="footer"><a href="#">View all</a></li>
            </ul>
        </li>
    );
};

export default NotificationsMenu;