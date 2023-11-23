import { useId } from 'react';
import './Item.css';

const TaskItem = ({ id, texto, nombre, completada }) => {


    return (
        <div id={useId()} className=" border-bottom border-warning taskT">

            <p className="d-inline tareaNombre"><strong>{nombre}</strong></p>
            <p className="d-inline">{texto}</p>

            <button className="float-end d-inline border-0 btn">✔️</button>
            <button className="float-end d-inline border-0 btn">❌</button>

        </div>
    );
}

export default TaskItem;
//git