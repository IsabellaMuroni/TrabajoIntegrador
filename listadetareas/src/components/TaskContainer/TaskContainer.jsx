import React from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskContainer = () => {
    const localTask = JSON.parse(localStorage.getItem('items'))
    const [tareas, setTareas] = useState(localTask ? localTask : []);

    const agregarTarea = tarea => {

        const tareasActualizadas = [tarea, ...tareas];
        setTareas(tareasActualizadas);
        localStorage.setItem('items', JSON.stringify(tareasActualizadas))

    };

    const completarTarea = id => {
        const task = tareas.map((tarea, index) => {
            if (index == id) {
                tarea.completada = !tarea.completada;
            }
            console.log(tarea);
            return tarea;

        });

        setTareas(task);

    };


    function eliminarElemento(index) {
        const nuevaLista = [...tareas]
        nuevaLista.splice(index, 1)
        setTareas(nuevaLista)
    }
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

            <TaskList tareas={tareas} completarTarea={completarTarea} eliminarElemento={eliminarElemento} />
        </div>
    );
}

export default TaskContainer;
