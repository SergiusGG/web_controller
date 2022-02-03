import React from 'react';
import styled from 'styled-components';
import {
Ul,
Div,
Blurry
} from "./rightnav.style";



const RightNav = ({ open }) => {
  return ( 
  
    
  
  <>
 
<Blurry open={open}></Blurry>

    <Ul open={open}>
     
      <li>Noticias</li>
      <li>Articulos</li>
      <li>Analisis</li>
      <li>Reflexiones</li>
      <br></br>
      <li>Entrar</li>
    </Ul>
  
    </>
  )
}

export default RightNav


