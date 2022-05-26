import React, { useRef } from 'react';
import '../02-useEffect/useeffect.css';


export const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input
                className='form-control'
                placeholder='Victor'
                ref={inputRef}
            />
            <button
                className='btn btn-outline-primary mt-5'
                onClick={handleClick}
            >
                Focus
            </button>
        </>
    )
}