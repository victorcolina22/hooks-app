import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/useeffect.css';


export const MemoHook = () => {

    const { counter, increment } = useCounter(500);
    const [show, setShow] = useState(true);

    const procesoPesado = (iteraciones) => {
        for (let i = 0; i < iteraciones; i++) {
            console.log('ahí vamos');
        }

        return `${iteraciones} iteraciones realizadas`;
    }

    //            función                 dependencias(parecido al useEffect en el que si algo cambia memoriza el resultado).
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />

            <p>{memoProcesoPesado}</p>

            <button
                className='btn btn-outline-primary'
                onClick={() => increment()}>
                +1
            </button>

            <button className='btn btn-outline-danger mx-2' onClick={() => setShow(!show)}>show/hide {JSON.stringify(show)}</button>
        </>
    )
}