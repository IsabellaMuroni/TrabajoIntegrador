import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './list.css'

const TaskList = ({ tareas }) => {

    return (
        <div className='list bg-light-subtle rounded border border-secondary '>
            <div className='text-warning headerList'>
                <p className='d-inline headerNombre'><strong>Nombre</strong></p>
                <p className='d-inline headerDescripcion'><strong> Descripcion</strong></p>
            </div>

            {
                tareas.map((tarea) =>
                    <TaskItem
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        nombre={tarea.nombre}
                    />
                )
            }

        </div>
    );
}

export default TaskList;