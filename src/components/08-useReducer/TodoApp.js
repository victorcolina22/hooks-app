import React, { useEffect, useReducer } from 'react';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { todoReducer } from './todoReducer';
import './style.css';



const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    // Snippet del "useReducer".
    // const [state, dispatch] = useReducer(reducer, initialState, init);
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        };

        dispatch(action);
    }

    const handleDone = (id) => {
        // Esta es la forma corta de utilizar el payload sin necesidad de crear el objeto "action" en una variable.
        dispatch({
            type: 'toggle',
            payload: id
        });
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todos={todos}
                        handleDone={handleDone}
                        handleDelete={handleDelete}
                    />
                </div>

                <div className='col-5'>
                    <TodoAdd
                        handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </>
    )
}