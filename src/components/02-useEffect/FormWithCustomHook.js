import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './useeffect.css';


export const FormWithCustomHook = () => {

    // Estado inicial del formulario con el customHook.
    const [formState, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formState;

    useEffect(() => {
        console.log('email cambió');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className='form-group'>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group mt-2'>
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group mt-2'>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type='submit' className='btn btn-primary mt-2'>
                Save
            </button>
        </form>
    )
}