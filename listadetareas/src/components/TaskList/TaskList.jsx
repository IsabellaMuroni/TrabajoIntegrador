import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './list.css'

const TaskList = ({ tareas, completarTarea }) => {

    return (
        <div className='list bg-light-subtle rounded border border-secondary '>
            <div className='text-warning headerList'>
                <p className='d-inline headerNombre'><strong>Nombre</strong></p>
                <p className='d-inline headerDescripcion'><strong> Descripcion</strong></p>
            </div>

            {
                tareas.map((tarea, index) =>
                    <TaskItem
                        key={index}
                        id={index}
                        texto={tarea.texto}
                        nombre={tarea.nombre}
                        completada={tarea.completada}
                        completarTarea={completarTarea}
                    />
                )
            }

        </div>
    );
}

export default TaskList;