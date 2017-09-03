import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from '../../utils/Style';
import Dom from '../../utils/Dom';

import Header from '../../containers/Header';
import Sidebar from '../../containers/Sidebar';
import Footer from '../../containers/Footer';

import ContentHeader from '../../components/content/ContentHeader';
import PopupList from '../../containers/popup/PopupList';

class Popup extends Component {
    render() {
        Style.initAddClass(Dom.selector('body'), 'hold-transition skin-blue sidebar-mini');

        return (
            <div className="wrapper">

                <Header />

                <Sidebar />

                <div className="content-wrapper">                    
                    <ContentHeader title="팝업관리" />

                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                
                                <PopupList />

                            </div>
                        </div>
                    </section>
                </div>

                <Footer />
                
            </div>
        );
    }
}

export default Popup;