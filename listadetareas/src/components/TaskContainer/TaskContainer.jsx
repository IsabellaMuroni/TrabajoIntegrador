import React from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import { useState } from 'react';

const TaskContainer = () => {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {

        const tareasActualizadas = [tarea, ...tareas];
        setTareas(tareasActualizadas);
        console.log(tareas);
    };
    return (
        <div>
            <TaskForm onSubmit={agregarTarea} />
            <TaskList tareas={tareas} />
        </div>
    );
}

export default TaskContainer;
