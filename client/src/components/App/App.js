import Navbar from "../Navbar/Navbar";
import Cart from "../../pages/CartPage/Cart";
import Home from "../../pages/HomePage/Home";
import NotFound from "../../pages/NotFound/NotFound";
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";

import {routes} from "../../routes/routes";
import styles from './App.module.css';


function App() {


  return (

          <div className='container'>
              <BrowserRouter>
                  <Navbar/>
                  <Switch>
                      {routes.map(({id,exact,path,component}) =>
                              <Route
                                  id={id}
                                  exact={exact}
                                  path={path}
                                  component={component}/>

                          )}
                      {/*<Route exact path='/' component={Home}/>*/}
                      {/*<Route exact path='/cart' component={Cart}/>*/}
                      {/*<Route exact path='*' component={NotFound}/>*/}


                  </Switch>
              </BrowserRouter>



          </div>
  );
}

export default App;


