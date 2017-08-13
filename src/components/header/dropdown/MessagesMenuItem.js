import React from 'react';

const MessagesMenuItem = ({user_image, name, time, message}) => {
    return (
        <li>
            <a href="#url">
                <div className="pull-left">
                    <img src={user_image} className="img-circle" alt="User Image" />
                </div>
                <h4>
                    {name}
                    <small><i className="fa fa-clock-o"></i> {time}</small>
                </h4>
                <p>{message}</p>
            </a>
        </li>
    );
};

export default MessagesMenuItem;