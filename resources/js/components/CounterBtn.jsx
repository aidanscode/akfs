import { useState } from "react"

function CounterBtn() {

    const [counter, setCounter] = useState(0);

    const decrement = () => {
        setCounter(counter - 1);
    };

    const increment = () => {
        setCounter(counter + 1);
    };

    return <>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <p>Your count is: {counter}</p>
    </>
}

export default CounterBtn;
