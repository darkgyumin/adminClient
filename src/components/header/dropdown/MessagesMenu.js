import React from 'react';

import MessagesMenuItem from './MessagesMenuItem';

const MessagesMenu = () => {
    return (
        <li className="dropdown messages-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-envelope-o"></i>
            <span className="label label-success">4</span>
            </a>
            <ul className="dropdown-menu">
            <li className="header">You have 4 messages</li>
            <li>
                <ul className="menu">
                    <MessagesMenuItem user_image="../img/user2-160x160.jpg" 
                                        name="Support Team" time="5 mins" 
                                        message="Why not buy a new awesome theme?" />
                    
                    <MessagesMenuItem user_image="../img/user3-128x128.jpg" 
                                        name="AdminLTE Design Team" time="2 hours" 
                                        message="Why not buy a new awesome theme?" />

                    <MessagesMenuItem user_image="../img/user4-128x128.jpg" 
                                        name="AdminLTE Design Team" time="2 hours" 
                                        message="Why not buy a new awesome theme?" />                
                
                </ul>
            </li>
            <li className="footer"><a href="#">See All Messages</a></li>
            </ul>
        </li>
    );
};

export default MessagesMenu;