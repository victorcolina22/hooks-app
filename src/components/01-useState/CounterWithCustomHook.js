import React from "react";
import { useCounter } from "../../hooks/useCounter";
import './counter.css'


export const CounterWithCustomHook = () => {

    const { state: counter, increment, reset, decrement } = useCounter(100);

    return (
        <>
            <h1>Counter with Hook {counter}</h1>
            <hr />

            <button className="btn btn-primary m-1" onClick={() => increment()}>+1</button>
            <button className="btn btn-success m-1" onClick={reset}>Reset</button>
            <button className="btn btn-danger m-1" onClick={() => decrement()}>-1</button>
        </>
    )
}