import React from "react";
import {Link, BrowserRouter as Router} from "react-router-dom";
import hades from "../../img/Hades.jpg";
import fondo1 from "../../img/fondo.svg";
import {
    Body,
    Cabecera,
    Imghades,
    Titulo
} from "../news/new1.styles"

const New1=()=>{


    return (
			
        <>
         <Body  
         style={{ backgroundImage: `url(${fondo1})` }}
         >
        <Router>
            
          
            <Cabecera Link to="#">
            <Link to="#"><Titulo>Un vistazo a... la nueva actualización de Hades</Titulo>
            <Imghades src={hades}/></Link>
            

            </Cabecera>

        </Router>
        </Body>
        </>
    )
};


export default New1;