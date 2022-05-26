import React, { useCallback, useState } from 'react';
import '../02-useEffect/useeffect.css';
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    // El "useCallback" se puede utilizar para mandar funciones a componentes hijos memorizados("React.memo"), si bien el memo se utiliza para que un componente hijo
    // no se renderice cada vez que el componente padre cambie de estado, en este caso si se quiere enviar una función declarada en el padre al hijo siempre se va
    // a ejecutar la función, y para evitar esto en vez de enviar la función normal se hace uso del "useCallback", se usa muy parecido al "useMemo", en el que se
    // se utiliza el "setState" para cambiar de estado en el padre pero se utiliza utilizando la función de callback del "setState", y se pasa como dependencia
    // el "setState". También puede recibir parámetros del hijo, en este caso el "num" es un parámetro que recibe para incrementar en diferentes cantidades el contador.
    const increment = useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter]);

    return (
        <>
            <h1>useCallbackHook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </>
    )
}