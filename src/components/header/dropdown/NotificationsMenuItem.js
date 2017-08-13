import React from 'react';

const NotificationsMenuItem = ({className, notification}) => {
    return (
        <li>
            <a href="#url">
                <i className={className}></i> {notification}
            </a>
        </li>
    );
};

export default NotificationsMenuItem;