import { useState } from "react";
import "./style.css";

function Counter() {

    const [count, setCount] = useState(0);
    const goal = 8;


    function increment() {
        setCount(count + 1)
    }

    function decrement() {
       setCount(count > 0 ? count - 1 : 0);
    }
    function reset() {
        setCount(0)
    }
    return (
        <div className="container">
            <div className="card">
                <h1 className="title"><i class="fa-solid fa-droplet" style={{color: "#75CFFF"}}></i> Water Tracker</h1>
                <h2 className="count">{count}</h2>
                <p className="label">Water Consumed Today</p> 

                <div className="buttons">
                    <button onClick={increment}><i class="fa-solid fa-plus" style={{color: "rgb(236, 235, 240)"}}></i></button>
                    <button onClick={decrement} disabled={count === 0}><i class="fa-solid fa-minus" style={{color: "rgb(236, 235, 240)"}}></i></button>
                    <button onClick={reset}><i class="fa-solid fa-arrows-rotate" style={{color: "rgb(236, 235, 240)"}}></i></button>
                </div>

                {count === 0 && <p className="warning">Minimum limit reached</p>}
                {count > 0 && count < goal && (
                    <p className="info">Keep going! <i class="fa-solid fa-trophy" style={{color: "rgb(255, 212, 59)"}}></i></p>
                )}
                {count >= goal && (
                    <p className="success">Goal reached <i class="fa-solid fa-check" style={{color: "rgb(16, 172, 124)"}}></i></p>
                )}
            </div>
        </div>

    )
}
export default Counter;