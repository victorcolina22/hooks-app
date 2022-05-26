import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './useeffect.css';


export const SimpleForm = () => {

    // Estado inicial del formulario
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // Este "useEffect" se utilizaría si queremos ejecutar alguna acción cuando se renderice el componente.
    useEffect(() => {
        // console.log('hey');
    }, []); // El array es la dependencia del "useEffect" que usa para ejecutarse, si es está vacío solo se ejecutará una vez.

    // Este "useEffect" se ejecutará cada vez que el estado del formulario cambie, por eso se le pasa dentro de la dependencia el "formState" para avisarle a React que 
    // se ejecute cada vez que el estado del formulario cambie.
    useEffect(() => {
        // console.log('formState cambió');
    }, [formState]);

    // Este "useEffect" sería lo mismo que el de arriba pero para cuando la propiedad "email" del formulario cambie.
    useEffect(() => {
        // console.log('email cambió');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            // Aquí se está computando el name del input, en este caso puede ser para el name o el email.
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
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

            {(name === '123') && <Message />}
            {/*
                Este condicional quiere decir, si existe el "name" entonces que se renderice "<Message />".
                Es como decir:
                    if(name) {
                        <Message />
                    }
            */}
        </>
    )
}