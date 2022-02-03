import React from 'react';
import styled from 'styled-components';
import {
Ul,
Div,
Blurry
} from "./rightnav.style";



const RightNav = ({ open }) => {
  return ( 
  
    
  // <Div>
  <>
  {/* <Ul open={open}>
     
     <li>Noticias</li>
     <li>Articulos</li>
     <li>Analisis</li>
     <li>Reflexiones</li>
     <br></br>
     <li>Entrar</li>
   </Ul> */}
<Blurry open={open}></Blurry>

    <Ul open={open}>
     
      <li>Noticias</li>
      <li>Articulos</li>
      <li>Analisis</li>
      <li>Reflexiones</li>
      <br></br>
      <li>Entrar</li>
    </Ul>
     {/* </Div> */}
    </>
  )
}

export default RightNav


// Crear otra Ul para poner efecto blur u opacity o crear un componente como el burger pero que aparezca desde la izquierda con blur u opacity