function Map(){
    const students=[
        {name:"Rick",email:'rick@test.com',contact:888},
        {name:"Monty",email:'monty@test.com',contact:999},
        {name:"John",email:'john@test.com',contact:222},
        {name:"Peter",email:'peter@test.com',contact:444}
    ]
    return(
        <div>
            <h1>Handle Table with array</h1>
            <table border="1">
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                </tr>
              { 
                students.map((data) => 
               <tr> 
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.contact}</td>
                </tr>
            )
       }
           </table>
        </div>
    );
}
export default Map;