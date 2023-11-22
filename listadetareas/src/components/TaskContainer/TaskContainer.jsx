import React from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';

const TaskContainer = () => {
    return (
        <div>
            <TaskForm/>
            <TaskList/>
        </div>
    );
}

export default TaskContainer;
