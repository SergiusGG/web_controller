import logo from './logo.svg';
// import './App.css';
import React from "react";
import {Route, Switch, BrowserRouter, Router, Link} from "react-router-dom";
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
// import New1 from './components/news/cabecera';
import Frontal from './components/layout/Frontal/frontal';
import { Containertotal, Page } from './App.styles';
import Analisis from './components/analisis/analisis';
// import Frontal from './components/layout/Frontal/frontal';
import ScrollToTop from './components/scrollTop/ScrollTop';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Routes from './Routes';



function App() {
  
  return (



    <BrowserRouter>
<Routes/>
    {/* <ScrollToTop> */}
    {/* <Containertotal> */}
	{/* <Header /> */}
	{/* <Switch> */}
		{/* <Route exact path="/"  */}
    {/* // component={Frontal}
    // >
    //   <Frontal/>
    //   </Route>

		// <Route exact path="/analisis"  */}
    {/* // // component={Analisis}
    // >

    //   <Analisis/>
    // </Route>
    // <Route exact path="/login" 
         */}
    {/* // >
    //   <Login/>
    // </Route>
    // <Route exact path="/signup"  */}
 
    {/* // >
    //   <Signup/>
    // </Route> */}
		{/* <Route exact path="/users" component={Users} /> */}
	{/* </Switch>
	<Footer /> */}

  {/* </Containertotal> */}
  {/* </ScrollToTop>  */}
</BrowserRouter>














    // <BrowserRouter>
    /* // <div> */
    // <Containertotal>
    /* <Page> */
    /* <Header/>  
    <Frontal/> */

    /* <New1/> */

   
    /* <Footer/> */
    /* </div> */
    /* </Page> */
    /* <Switch>
                                <Route path="/Analisis">
                                    <Analisis/>
                                </Route>
                                </Switch> */
    // </Containertotal>
    // </BrowserRouter>
    
  );
}

export default App;
