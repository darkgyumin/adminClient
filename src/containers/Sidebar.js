import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sidebarActions from '../modules/sidebar';

import Header from '../components/sidebar/Header';
import Menu from '../components/sidebar/Menu';

class Sidebar extends Component {
    componentDidMount() {
        console.log('componentDidMount');
        const {SidebarActions} = this.props;

        SidebarActions.getAll();
    }

    render() {
        const {loading, data, error} = this.props;

        const menu = data.map(
            (menu, i) => {
                let arrSubLink = [];
                let arrSubName = [];
                if(menu.subMenu) menu.subMenu.forEach((subMenu) => {
                    arrSubLink.push(subMenu.link);
                    arrSubName.push(subMenu.name);
                });
                const subLink = arrSubLink.join(',');
                const subName = arrSubName.join(',');

                return (<Menu key={i}
                            link={menu.link} 
                            name={menu.name} 
                            label={menu.label} 
                            subLinks={subLink}
                            subNames={subName} />)
            }
        );

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
                        <Header name="MAIN NAVIGATION" />
                        {menu}
                        {/*<Menu className="fa fa-dashboard" name="Dashboard" subNames="Dashboard v1, Dashboard v2">*/}

                        <Header name="LABELS" />
                        <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                        <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                        <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
                    </ul> 
                </section>
            </aside>
        );
    }
}

export default connect(
    (state) => ({
        loading: state.sidebar.pending,
        data: state.sidebar.data,
        error: state.sidebar.error
    }),
    (dispatch) => ({
        SidebarActions: bindActionCreators(sidebarActions, dispatch)
    })
)(Sidebar);