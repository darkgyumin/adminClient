import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from '../utils/Style';
import Dom from '../utils/Dom';

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
                            
                        </div>
                    </nav>
                </header>

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
                    </section>
                </aside>

                <div class="content-wrapper">
                    <div>dd</div>
                    <div>dd</div>
                    <div>dd</div>
                    <div>dd</div>
                </div>

                <footer className="main-footer">

                </footer>
            </div>
        );
    }
}

Layout.propTypes = {

};

export default Layout;