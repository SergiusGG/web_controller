import React from 'react';
import styled from 'styled-components';
import {Link, BrowserRouter as Router} from "react-router-dom";
import {
Ul,
Div,
Blurry,
Link2
} from "./rightnav.style";



const RightNav = ({ open }) => {
  return ( 
  
    
  
  <>
  
 {/* <Router> */}
<Blurry open={open}></Blurry>

    <Ul open={open}>
     
      <li>Noticias</li>
      <li>Articulos</li>
      <li>Analisis</li>
      <li>Reflexiones</li>
      <br></br>
         <Link to="/login"><li>
    
          Entrar </li>
          </Link>
         
    </Ul>
  {/* </Router> */}
    </>
  )
}


export default RightNav


