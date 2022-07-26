import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Details from './components/Details/Details';
import Photos from './components/Menu/Photos';
import Products from './components/Menu/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path={"/"} element={<Home />} />
       <Route path={"/Products"} element={<Products />} />
       <Route path={"/Details/:id"} element={<Details />} />
       <Route path={"/Photos"} element={<Photos />} />
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
