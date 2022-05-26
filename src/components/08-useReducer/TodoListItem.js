import React from 'react';
import PropTypes from 'prop-types';


export const TodoListItem = ({ todo, i, handleDone, handleDelete }) => {
    return (
        <li className="list-group-item">
            <p
                className={todo.done ? 'complete' : ''}
                onClick={() => handleDone(todo.id)}>
                {i + 1}. {todo.desc}
            </p>
            <button
                className='btn btn-danger'
                onClick={() => handleDelete(todo.id)}>
                Borrar
            </button>
        </li>
    )
}


TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired,
    handleDone: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}