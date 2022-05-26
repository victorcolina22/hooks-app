import React from 'react';


// "React.memo" o "memo" se utiliza para memorizar el componente al que se le asigna, un ejemplo es este componente, en el que se está ejecutando en el componente
// "Memorize" ya que muestra el valor al cambiar el contador, pero sucede un problema, también existe un botón en el que cambia el "state" de un valor "boolean", de
// "true" a "false", entonces al clickear el botón se ejecuta este componente también, por qué? Porque React entiende que existe un cambio en el componente y lo vuelve
// a renderizar y dentro de ese componente se encuentra este("Small.js"), entonces se utiliza el "memo" para indicarle a React que memorice el componente y así cuando
// haya un cambio en "Memorize" solo lo ejecute una sola vez. Ahora, si hay un cambio en "Small" entonces ahí si se ejecutará y lo volverá a renderizar pero mantendra
// la referencia del cambio en "memo", y así se solventaría este problema que podría ser útil para los componentes contienen peticiones http.
export const Small = React.memo(({ value }) => {

    console.log('Me volvi a llamar :(');

    return (
        <small>{value}</small>
    )
})