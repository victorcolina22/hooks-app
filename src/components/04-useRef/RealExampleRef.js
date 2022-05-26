import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/useeffect.css';


export const RealExampleRef = () => {

    // Caso useRef: Este código nos indica que, tenemos un estado inicial el cual es "false", se estableció de esta forma para renderizar de manera condicional
    // el componente "MultipleCustomHooks" el cual posee la petición a la API para mostrar los quotes. Entonces, el problema de esto es que si cambiamos el estado
    // "show" para mostrar el componente y luego lo volvemos a cambiar para ocultarlo sin esperar a que la petición se haya completado nos dará un error porque
    // estaríamos cargando un componente desmontado. Ahora iremos a nuestro custom hook "useFetch" para solucionar ese problema.
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <>
            <h1>Real example</h1>
            <hr />

            {show && <MultipleCustomHooks />}
            <button
                className={(show) ? 'btn btn-danger mx-2' : 'btn btn-success'}
                onClick={handleShow}
            >
                Show/Hide
            </button>
        </>
    )
}