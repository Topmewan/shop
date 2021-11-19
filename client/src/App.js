import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/CartPage/Cart";
import Home from "./pages/HomePage/Home";
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";
import styles from './App.module.css';


function App() {


  return (

          <div className='container'>
              <BrowserRouter>
                  <Navbar/>
                  <Switch>
                      <Route exact path='/' component={Home}/>
                      <Route exact path='/cart' component={Cart}/>

                  </Switch>
              </BrowserRouter>



          </div>
  );
}

export default App;


