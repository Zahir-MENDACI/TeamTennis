import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Abonnement from './pages/Abonnement.js';
import Coach from './pages/Coach.js';
import photo from './photo.jpg';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './pages/Home';

const App = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Abonnement" exact component={Abonnement} />
        <Route path="/Coach" exact component={Coach} />
      </Switch>
    </BrowserRouter>
    

    // <div className="App">
      
    //   <Navbar />
    //   {/* page d'abonnement */}
    //   {/* <Abonnement /> */}

      // {/* page D'acceuil */}
      // {/* <div class="btndiv">
      //   <button class="button">S'inscrire à un cours</button>
      //   <button class="button">Prendre un abonnement</button>
      // </div> */}

    //   {/* page des Coach */}
    //    <Coach />
    //   <Footer />
    // </div>
  );
}

export default App;
