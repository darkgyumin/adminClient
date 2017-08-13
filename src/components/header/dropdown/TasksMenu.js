import React from 'react';

import TasksMenuItem from './TasksMenuItem';

const TasksMenu = () => {
    return (
        <li className="dropdown tasks-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-flag-o"></i>
            <span className="label label-danger">9</span>
            </a>
            <ul className="dropdown-menu">
            <li className="header">You have 9 tasks</li>
            <li>
                <ul className="menu">
                    <TasksMenuItem className="progress-bar progress-bar-aqua" task="Design some buttons" percent="20%" />
                    <TasksMenuItem className="progress-bar progress-bar-red" task="Create a nice theme" percent="40%" />
                    <TasksMenuItem className="progress-bar progress-bar-red" task="Some task I need to do" percent="60%" />
                    <TasksMenuItem className="progress-bar progress-bar-yellow" task="Make beautiful transitions" percent="80%" />   
                </ul>
            </li>
            <li className="footer">
                <a href="#">View all tasks</a>
            </li>
            </ul>
        </li>
    );
};

export default TasksMenu;