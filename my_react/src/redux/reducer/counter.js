export const counterReducer=(state=0,action)=>{
    switch (action.type){
        case 'ICREMENT' :
            return (state+=1);
        case 'DECREMENT' :
            return (state-=1);
        default:
            return state;
    }    
}