import React from 'react';
import './Item.css'

const TaskItem = () => {
    return (
        <div className=" border-bottom border-warning taskT">

            <p className="d-inline tareaNombre"><strong>Primer tarea</strong></p>
            <p className="d-inline">   Limpiar la casa y el patio</p>

            <button className="float-end d-inline border-0 btn">✔️</button>
            <button className="float-end d-inline border-0 btn">❌</button>

        </div>
    );
}

export default TaskItem;
//git