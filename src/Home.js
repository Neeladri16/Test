import  MenuAppBar from "./components/Appbar/Appbar";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div>
      < MenuAppBar /><br />
      <Banner />
      <Card />
        </div>
    )
}

export default Home;