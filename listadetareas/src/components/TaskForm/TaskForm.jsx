import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskForm = (props) => {
    const [item, setItem] = useState('');
    
    const handleChange = (event) => {
        setItem(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(item);
    };
    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className="row g-3 bg-light-subtle rounded border border-secondary" >
                    <div className="col-md-6">
                        <label htmlFor="nombre" className="form-label" >Tarea</label>
                        <input type="text" value = {item} onChange={handleChange} className="form-control"  />
                    </div>
                    
                    
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary">
                            Agregar
                        </button>
                    </div>
                </form>
            </div>
            
            <TaskItem/>
        </>
    );
}

export default TaskForm;
