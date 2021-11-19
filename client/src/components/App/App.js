import Navbar from "../Navbar/Navbar";
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
                  </Switch>
              </BrowserRouter>



          </div>
  );
}

export default App;


