// import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Input from './Input';

function App() {
//  const [name,setName]=useState('')
//  const [btn,setBtn]=useState('')

  return (
    <>
     {/* <h1>{btn}</h1>
     <button  onClick={()=>setBtn(btn =>name)}>Click</button>
      <input type="text" value={name} onChange={e=>setName(e.target.value)} /> */}
      <Counter/>
      <Input/>
    </>
  );
}

export default App;
