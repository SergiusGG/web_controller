import logo from './logo.svg';
import React from "react";

import {Route, Switch, 
  // BrowserRouter,
  HashRouter,
   Router, Link} from "react-router-dom";
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Frontal from './components/layout/Frontal/frontal';
import { Containertotal, Page } from './App.styles';
import Analisis from './components/analisis/analisis';
import ScrollToTop from './components/scrollTop/ScrollTop';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Routes from './Routes';



function App() {
  
  return (

<HashRouter>

    {/* // <BrowserRouter> */}
<Routes/>
  </HashRouter>
// </BrowserRouter>
    
  );
}

export default App;
