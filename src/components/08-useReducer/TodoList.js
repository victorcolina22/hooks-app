import React from 'react';
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem';


export const TodoList = ({ todos, handleDone, handleDelete }) => {
    return (
        <ul className='list-group-flush'>
            {
                todos.map((todo, i) => (
                    <TodoListItem
                        todo={todo}
                        i={i}
                        key={todo.id}
                        handleDone={handleDone}
                        handleDelete={handleDelete} />
                ))
            }
        </ul>
    )
}


TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDone: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};