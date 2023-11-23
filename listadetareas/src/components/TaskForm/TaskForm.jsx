import React, { useEffect, useState } from 'react';


const TaskForm = (props) => {

    const [tareaNombre, setTareaNombre] = useState('');
    const [tareaDescripcion, setTareaDescripcion] = useState('');

    const handleChange = (event) => {
        if(event.target.id=='descripcion'){
            setTareaDescripcion(event.target.value);
        }else{
            setTareaNombre(event.target.value);
        }
    }

    useEffect ( () => {
        document.title =  `Nueva tarea: ${tareaNombre} `;
       
    });

    const manejarEnvio = e => {
        e.preventDefault();

        const newTask = {
            texto: tareaDescripcion,
            nombre: tareaNombre,
            completada: false
        }

        props.onSubmit(newTask);
    };

    return (
        <>
            <section className='container-fluid bg-light-subtle rounded border border-secondary'>
                <main className='row'>
                    <h3>Nueva Tarea</h3>
                    <form className='row align-items-center' onSubmit={manejarEnvio}>

                        <div className="col-4">
                            <label className="visually-hidden" for="tarea">Tarea</label>
                            <input type="text" onChange={handleChange} className="form-control" id="tarea" placeholder='Tarea' required/>
                        </div>

                        <div className="col-md-6">
                            <label className="visually-hidden" for="descripcion">Descripción</label>
                            <input type="text" onChange={handleChange} className="form-control" id="descripcion" placeholder='Descripción' required/>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className='btn btn-warning' ><i className="bi bi-plus-circle-fill"></i></button>
                        </div>
                    </form>
                </main>
            </section>
        </>
    );
}

export default TaskForm;
