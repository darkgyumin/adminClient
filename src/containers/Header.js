import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MessagesMenu from '../components/header/dropdown/MessagesMenu';
import NotificationsMenu from '../components/header/dropdown/NotificationsMenu';
import TasksMenu from '../components/header/dropdown/TasksMenu';
import UserMenu from '../components/header/dropdown/UserMenu';

class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <a href="../../index2.html" className="logo">
                    <span className="logo-mini"><b>A</b></span>
                    <span className="logo-lg"><b>Admin</b></span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </a>

                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <MessagesMenu />   
                            <NotificationsMenu />
                            <TasksMenu />
                            <UserMenu />
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

Header.propTypes = {

};

export default Header;