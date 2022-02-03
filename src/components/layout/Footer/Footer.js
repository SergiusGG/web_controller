import React from "react";
import {Link, BrowserRouter as Router} from "react-router-dom";
import mando from "../../../img/joystick.svg"
import fondo from "../../../img/b1.jpg"
import { Container } from "../../../theme/GlobalStyles";
import { 
    Contenedor,
    Mando,
    NavA,
    List,
    ListItem,
    Derecha,
    ListItem1,
    List1


} from "../Footer/styles";


const Footer = () => {
	return (
        <>
        <Router>
<Contenedor 

>


        <Derecha>
            <Link to="#"><Mando src={mando} alt="icono web"/></Link>
            <List>

        <NavA to="#">
            <ListItem>Aviso Legal</ListItem>
    </NavA>


<NavA to="#">
    <ListItem>Todos los derechos reservados</ListItem>
</NavA>
</List>


        </Derecha>
        <List1>

          
            <NavA to="#">
                <ListItem1>Sobre nosotros</ListItem1>
            </NavA>
            <NavA to="#">
                <ListItem1>Redactores</ListItem1>
            </NavA>
            <NavA to="#">
                <ListItem1>Sponsor</ListItem1>
            </NavA>
            <NavA to="#">
                <ListItem1>Contacto</ListItem1>
            </NavA>
            <NavA to="#">
                <ListItem1>Contacto</ListItem1>
            </NavA>



        </List1>
       
        </Contenedor>
        </Router>
        </>
        );
};



export default Footer;
