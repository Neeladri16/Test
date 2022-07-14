function Student(props) {
  return (
    <div>
      <h1>Hi {props.name}</h1>
    </div>
  );
}
export default Student;

/*function App() {
    const [name,setName]=useState("Neel")
    return (
      <div className="App">
        <h1>Props</h1>
          <Student name={name}/>
          <button onClick={()=>{setName("Mukherjee")}}>Update</button>
      </div>
    );
  }
  
  export default App;*/
