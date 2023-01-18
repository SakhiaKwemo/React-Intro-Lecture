import { useState } from "react";

function Counter (props) {

    let [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => {
                setCount(count++); 
                console.log(count)
            }}> Click Me!</button>
            <p>Hello</p>
            <p>You have clicked {count} times</p>
        </div>
    )
}

export default Counter