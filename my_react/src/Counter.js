import Decreament from "./Decreament";
import Increament from "./Increament";
import './Counter.css'
import { useState } from "react";
function Counter() {
    const [say,setSay]=useState(0)
    return (
        <>
            <div className="Sayi">
                <Decreament state={say} changeState={setSay}/>
                <h1>{say}</h1>
                <Increament  state={say} changeState={setSay}/>
            </div>
        </>
    )
}
export default Counter;