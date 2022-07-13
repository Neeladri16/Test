function Prop1(props){
  return(  <div>
        <h1>Prop1 Component</h1>
        <button onClick={props.data}>Call data function</button>
    </div>
  );
}
export default Prop1;


/*function App() {
  function getData(){
     alert("Hello from App!")
  }
    return (
    <div className="App">
      <Prop1 data={getData} />
      <Prop1 data={getData} /> 
      
        <Prop2 data={getData} />
    
    </div>
    

  );
}

export default App;*/