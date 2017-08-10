import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from '../utils/Style';
import Dom from '../utils/Dom';

import MessagesMenu from '../component/dropdown/MessagesMenu';
import NotificationsMenu from '../component/dropdown/NotificationsMenu';
import TasksMenu from '../component/dropdown/TasksMenu';
import UserMenu from '../component/dropdown/UserMenu';

import SidebarMenu from '../component/sidebar/SidebarMenu';

import Footer from '../layout/Footer';

class Layout extends Component {

    render() {
        Style.initAddClass(Dom.selector('body'), 'hold-transition skin-blue sidebar-mini');

        return (
            <div className="wrapper">

                <header className="main-header">
                    <a href="../../index2.html" className="logo">
                        <span className="logo-mini"><b>A</b>LT</span>
                        <span className="logo-lg"><b>Admin</b>LTE</span>
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
                                <li>
                                    <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                                </li> 
                            </ul>
                        </div>
                    </nav>
                </header>

                <SidebarMenu />

                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Page Title
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                            <li><a href="#">Depth</a></li>
                            <li className="active">Page Title</li>
                        </ol>
                    </section>

                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Hover Data Table</h3>
                                    </div>
                                    <div className="box-body">
                                        <table id="example2" className="table table-bordered table-hover">
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
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Rendering engine</th>
                                                    <th>Browser</th>
                                                    <th>Platform(s)</th>
                                                    <th>Engine version</th>
                                                    <th>CSS grade</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        );
    }
}

Layout.propTypes = {

};

export default Layout;