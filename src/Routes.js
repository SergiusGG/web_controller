import React from "react";
import { Switch, Route,
  //  BrowserRouter
  HashRouter
} from "react-router-dom";
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Frontal from './components/layout/Frontal/frontal';
import Analisis from './components/analisis/analisis';
import ScrollToTop from './components/scrollTop/ScrollTop';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Prueba from "./components/pruebas/Prueba";
import Burger from "./components/pruebas/Prueba2"

function Routes(){
    return(

        // <BrowserRouter>
        <HashRouter>
        <ScrollToTop>
    
	<Switch>
  <Route exact path="/header" 
 
 >
   <Header/>
   </Route>
  <Route exact path="/prueba2" 
 
 >
   <Burger/>
   </Route>
		<Route exact path="/" 
 
    >
      <Frontal/>
      </Route>

		<Route exact path="/analisis" 

    >

      <Analisis/>
    </Route>
    <Route exact path="/login" 
        
    >
      <Login/>
    </Route>
    <Route exact path="/signup" 
 
    >
      <Signup/>
    </Route>
    <Route exact path="/prueba" 
 
    >
      <Prueba/>
    </Route>
	</Switch>
  </ScrollToTop>
{/* // </BrowserRouter> */}
</HashRouter>








    );

}

export default Routes;