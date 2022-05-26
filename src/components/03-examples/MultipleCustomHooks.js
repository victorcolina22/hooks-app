import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/useeffect.css';


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // Al iniciarce el componente, "data" es "null", y queremos llamar el primer valor del array que viene en "data", pero como es "null" llamándolo directamente nos
    // dará un error, entonces utilizamos el operador "!!" para transformar "null" a un "boolean", es decir, "!null" es igual a "true" y "!!null" es igual a "false".
    // Esto nos permite trabajar con un condicional para y evitar errores. 
    const { author, quote } = !!data && data[0]; // Entonces, eso quiere decir si existe la "data" extrae su valor de la posición 0.

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                (loading)
                    ?
                    (
                        <div className='alert alert-info text-center'>Loading...</div>
                    )
                    :
                    (
                        <blockquote className='blockquote text-end'>
                            <p>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>
                    )
            }

            <button className='btn btn-primary text-end' onClick={() => increment()}>Next quote</button>
        </>
    )
}
