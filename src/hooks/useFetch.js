import { useEffect, useRef, useState } from "react";


export const useFetch = (url) => {

    // Solución del problema en el componente "RealExampleRef":
    // Iniciamos un "useRef" llamado "isMounted" en "true" para dar a entender que el componente está montado cuando se cargue por primera vez. La idea es hacer una
    // referencia del componente cuando esté montado o desmontado, es decir, cuando se cambie el valor del useRef renderizará o no el componente.
    const isMounted = useRef(true);

    const [state, setState] = useState({ data: null, loading: true, error: null });

    // Creamos un "useEffect" en el que solo usaremos su función de "cleanUp", haciendo un return y ejecutando la función. Entonces cuando el componente se desmonte
    // cambiaremos el valor del "useRef" a "false" para indicar que no se mostrará el componente.
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                // Y acá hacemos uso de ese "isMounted" para ejecutar el "setState", esto quiere decir que si el valor de "isMounted" es igual a "true" entonces renderiza
                // el componente, sino  que lo deje como estaba al inicio.
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }
            })
            .catch(error => console.log(error))
    }, [url]);

    return state;
}