import React,{useState,useEffect} from "react";

function Effect(){
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.warn("Use Effect")
    })
    return(
       <div>
        <h1>Use Effect in React {count}</h1>
        <button onClick={()=>setCount(count+1)}>Update</button>
       </div>
    );
}
export default Effect;