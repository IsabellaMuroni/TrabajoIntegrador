import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskForm = () => {
    const [tarea, setTarea] = useState('');
    const [descripcion, setDescripcion] = useState();
    return (
        <>
            <section className='container-fluid bg-light-subtle rounded border border-secondary'>
                <main className='row'>
                    <h3>Nueva Tarea</h3>
                    <form className='row' onSubmit = {handleSubmit}>
                    
                        <div className="col-4">
                            <label class="visually-hidden" for="tarea">Tarea</label>
                            <input type="text" value = {tarea} className="form-control" id="tarea" placeholder='Tarea'/>
                        </div>
    
                        <div className="col-md-6">
                            <label class="visually-hidden" for="descripcion">Descripción</label>
                            <input type="text" value = {descripcion} className="form-control" id="descripcion" placeholder='Descripción'/>
                        </div>
                        <div className="col-md-2">    
                            <button type="submit" className='btn btn-warning' ><i class="bi bi-plus-circle-fill"></i></button>
                        </div>
                    </form>
                </main>
            </section>
        </>
    );
}

export default TaskForm;
