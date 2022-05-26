import React, { useEffect, useState } from "react";


export const Message = () => {
    const [state, setState] = useState({ x: 0, y: 0 });
    const { x, y } = state;

    useEffect(() => {
        // Lo que esté arriba del "return" será lo que se renderizará cuando se ejecute o se monte el componente.

        const mouseMouve = (e) => {
            const coors = { x: e.x, y: e.y };
            setState(coors);
            console.log(coors);
        }
        window.addEventListener('mousemove', mouseMouve)

        return () => {
            // Lo que esté dentro del "return" será lo que se renderizará cuando se deje de ejecutar o se desmonte el componente.
            window.removeEventListener('mousemove', mouseMouve);
        }
    }, []); // El array es la dependencia del "useEffect" que usa para ejecutarse, si es está vacío solo se ejecutará una vez.

    return (
        <>
            <h1>Eres genial</h1>
            <p>x: {x}</p>
            <p>y: {y}</p>
        </>
    )
}