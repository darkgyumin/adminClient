import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SidebarMenu extends Component {

    render () {

        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="../img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div> 
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                                <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="../../index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                                <li><a href="../../index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>Layout Options</span>
                                <span className="pull-right-container">
                                <span className="label label-primary pull-right">4</span>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="../layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                                <li><a href="../layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                                <li><a href="../layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                            </ul>
                        </li>
                        <li className="header">LABELS</li>
                        <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                        <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                        <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
                    </ul> 
                </section>
            </aside>
        );
    }
}

SidebarMenu.propTypes = {

};

export default SidebarMenu;