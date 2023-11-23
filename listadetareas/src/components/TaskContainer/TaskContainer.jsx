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
    //función ppara eliminar tarea
    /*const eliminarTarea = (id) => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id != id);
        setTareas(tareasActualizadas);
    };

    const completarTarea = (id) => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id == id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }*/
    return (
        <div>
            <TaskForm onSubmit={agregarTarea} />
            <TaskList tareas={tareas} />
        </div>
    );
}

export default TaskContainer;
