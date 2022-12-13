function Decreament({state,changeState}){
    function decrease(){
        state-=1;
        changeState(state)
    }
    return(
        <>
            <button onClick={decrease}>-</button>
        </>
    )
}
export default Decreament;