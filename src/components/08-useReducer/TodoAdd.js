import React from 'react';
import { useForm } from '../../hooks/useForm';


export const TodoAdd = ({ handleAddTodo }) => {

    const [formValue, handleInputChange, reset] = useForm({
        description: '',
    })
    const { description } = formValue;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) return;

        const randomId = Math.random().toString(36).substring(2, 18);

        const newTodo = {
            id: randomId,
            desc: description,
            done: false
        }

        // const action = {
        //     type: 'add',
        //     payload: newTodo
        // };

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form className='d-grid gap-2' onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='description'
                    onChange={handleInputChange}
                    className='form-control'
                    placeholder='Agregar todo...'
                    autoComplete='off'
                    value={description} />

                <button
                    className='btn btn-outline-primary btn-block'
                    type='submit'>
                    Agregar
                </button>
            </form>
        </>
    )
}