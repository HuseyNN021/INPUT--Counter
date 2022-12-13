import Decreament from "./Decreament";
import Increament from "./Increament";
import './Counter.css'
import {useSelector} from 'react-redux'
function Counter() {
    const counter=useSelector(count =>count.counter)
    return (
        <>
            <div className="Sayi">
                <Decreament/>
                <h1>{counter}</h1>
                <Increament/>
            </div>
        </>
    )
}
export default Counter;