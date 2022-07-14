import { useState } from "react";

function Form(){
    const [name,setName]=useState("")
    const [tnc,setTnc]=useState(false)
    const [interest,setInterest]=useState("")
    
    function getFormData(e){
        console.warn(name,tnc,interest)
        e.preventDefault()
    }
    return(
      <div>
        <form onSubmit={getFormData}>
            <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
            <br/><br/>
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Select option</option>
                <option>Marvel</option>
                <option>Avenger</option>
                <option>DC</option>
            </select>
            <br/> <br/>
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span> Accept Terms and Coditions.</span>
            <br/> <br/>
            <button type="submit">Submit</button>

        </form>
      </div>
    );
}
export default Form;