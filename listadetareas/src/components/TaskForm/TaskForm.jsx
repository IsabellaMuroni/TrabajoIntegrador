import React, { useId, useState } from 'react';


const TaskForm = (props) => {
    //Agrego una variable de estado al componente
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault();
        let tareaNombre = document.getElementById("tarea").value;
        let tareaDescripcion = document.getElementById("descripcion").value;

        const newTask = {
            // id: useId(),// genera IDs unicas
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
                            <input type="text" onChange={handleChange} className="form-control" id="tarea" placeholder='Tarea' />
                        </div>

                        <div className="col-md-6">
                            <label className="visually-hidden" for="descripcion">Descripción</label>
                            <input type="text" className="form-control" id="descripcion" placeholder='Descripción' />
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
