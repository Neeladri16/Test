import {useState} from 'react'

function State(){
    const [data,setData]=useState("HI") //const [data,setData]=useState(0)
    function updateData(){
        setData("Hello")                //setData(data+1)
    }
    return(
        <div >
            <h1>{data}</h1>
            <button onClick={updateData}>Update Data</button>
        </div>
    );
}
export default State;