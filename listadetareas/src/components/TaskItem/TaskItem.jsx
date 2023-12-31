import './Item.css';

const TaskItem = ({ id, texto, nombre, completada, completarTarea, eliminarElemento }) => {


    return (
        <div id={id} className=" border-bottom border-warning taskT">

            <p className={completada ? 'd-inline tareaNombre text-muted text-decoration-line-through' : 'd-inline tareaNombre' }><strong>{nombre}</strong></p>
            <p className={completada ? 'd-inline text-muted text-decoration-line-through' : 'd-inline'}>{texto}</p>

            <button className="float-end d-inline border-0 btn" onClick={() => eliminarElemento(id)}>❌</button>
            <button className="float-end d-inline border-0 btn" onClick={() => completarTarea(id)}>{completada? '↩️':'✔️'}</button>
            
        </div>
    );
}

export default TaskItem;
