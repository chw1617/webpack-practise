import React,{useState} from 'react'
export default function App(){
    const [count,setCount] = useState(0)
    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
        </>
    )
}