import React from 'react';

const TasksMenuItem = ({className, task, percent}) => {    
    return (
        <li>
            <a href="#">
                <h3>
                    {task}
                    <small className="pull-right">{percent}</small>
                </h3>
                <div className="progress xs">
                    <div className={className} style={{width: percent}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                    <span className="sr-only">{percent} Complete</span>
                    </div>
                </div>
            </a>
        </li>
    );
};

export default TasksMenuItem;