import Example from './Banner';
import './App.css';
import Api from './Cards'
import NestedGrid from './products';

function App() {
  return (
    <div className="App">
     {/* <Api /> */}
     <Example />
     <NestedGrid />
    </div>
  );
}

export default App;
