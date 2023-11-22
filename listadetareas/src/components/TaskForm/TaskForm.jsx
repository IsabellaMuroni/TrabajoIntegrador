import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskForm = () => {
    return (
        <>
            <section className='container-fluid bg-light-subtle rounded border border-secondary'>
                <main className='row'>
                    <h3>Nueva Tarea</h3>
                    <form className='row' >
                    
                        <div className="col-md-4">
                            <label for="tarea" className="form-label">Tarea</label>
                            <input type="text" className="form-control" id="tarea"/>
                        </div>
                        <div className="col-md-6">
                            <label for="descripcion" className="form-label">Descripción</label>
                            <input type="text" className="form-control" id="descripcion"/>
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
