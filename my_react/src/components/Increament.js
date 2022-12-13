function Increament({state,changeState}){
    function increase(){
        state+=1;
        changeState(state)
    }
    return(
        <>
            <button onClick={increase}>+</button>
        </>
    )
}
export default Increament;