import { useState, useEffect } from "react";


export default function Api () {
const [data, setData] = useState([]);
    useEffect(() => {
    fetch("https://testecomm-api.nxgecom.in/banner/list").then((result) => {
      result.json().then((resp) => {
        console.log("result", resp);
        setData(resp);
      });
    });
    console.log("useEffect");
  }, []);
  return(
    <div>
      <h1>hello </h1>
      <table>
        <tr>
          <td>Name</td>
          <td>Class</td>
          <td>Subject</td>
          <td>Roll no.</td>
        </tr>
        {
          data.map((item,i)=>(
            <tr key={i}>    
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.position}</td>
              <td> {item.status}</td>
              </tr>
          ))
        }
       </table>
    </div>
  );
}