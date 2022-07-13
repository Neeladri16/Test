import './App.css';
import React,{useState,useEffect} from 'react';

function EffectProp(props){
    useEffect(()=>{
        alert("count is"+props.count)
        alert("count is"+props.data)
    },[props.data,props.count])
    return(
        <div className="App">
         <h1>Count props:{props.count}</h1>
         <h1>Count data:{props.data}</h1>
        </div>
    );
}
export default EffectProp;

/*function App() {
    const [data,setData]=useState(10);
    const [count,setCount]=useState(100);
   
    return (<div className="App">
              <EffectProp count={count} data={data} />
              <button onClick={()=>setCount(count+1)}>Update Count</button>
              <button onClick={()=>setData(data+1)}>Update Data</button>
            </div>
    );
  }
  
  export default App;*/