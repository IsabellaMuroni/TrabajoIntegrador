import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './list.css'

const TaskList = () => {



    return (
        <div className='list bg-light-subtle rounded border border-secondary '>
            <div className='text-warning headerList'>
                <p className='d-inline headerNombre'><strong>Nombre</strong></p>
                <p className='d-inline headerDescripcion'><strong> Descripcion</strong></p>
            </div>

            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />

        </div>
    );
}

export default TaskList;