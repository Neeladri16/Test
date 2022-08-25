import './App.css';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Details from './components/Details/Details';
import Photos from './components/Menu/Photos';
import Cart from './components/AddToCart/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path={"/"} element={<Home />} />
       <Route path={"/Details/:id"} element={<Details />} />
       <Route path={"/Cart"} element={<Cart />} />
       <Route path={"/Photos"} element={<Photos />} />
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
