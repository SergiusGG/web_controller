import React from "react";
import {Link, BrowserRouter as Router} from "react-router-dom";
import mando from "../../../img/joystick.svg"
import fondo from "../../../img/b1.jpg"

// Styles
// import {Anchor, Copyright, Rights, Information, Legal, Logo, StyledFooter, Mando} from "./styles";
// import {Container} from "theme/GlobalStyles";
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
// id="inicio"  
// style={{ backgroundImage: `url(${fondo})` }}
>
		{/* <footer class="pie "> */}


        <Derecha>
            <Link to="#"><Mando src={mando} alt="icono web"/></Link>
            <List>

        <NavA to="#">
            <ListItem>Aviso Legal</ListItem>
    </NavA>
{/* <NavA to="#">
    <ListItem>Términos de uso</ListItem>
</NavA> */}

<NavA to="#">
    <ListItem>Todos los derechos reservados</ListItem>
</NavA>
</List>


        </Derecha>
        {/* <Link to="#"> <img class="mando" src="img/joystick.svg" alt="icono web"></Link> */}
        <List1>

            {/* <NavA to="#">
                <ListItem>Aviso Legal</ListItem>
            </NavA>
            <NavA to="#">
                <ListItem>Términos de uso</ListItem>
            </NavA>
            <NavA to="#">
                <ListItem>Política de cookies</ListItem>
            </NavA>
            <NavA to="#">
                <ListItem>Todos los derechos reservados</ListItem>
            </NavA> */}

        {/* </List>

        <List> */}
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
        {/* <a href="#inicio">
            <p>Volver arriba</p>
        </a> */}
        </Contenedor>
        </Router>
        </>
        );
};




    {/* </footer> */}

{/* 
		// <Container column>
		// 	<StyledFooter>
		// 		<Logo>LOGO EMPRESA</Logo>
		// 		<Information>
		// 			<Copyright>©miempresa.com</Copyright>
		// 			<Rights>Todos los derechos reservados.</Rights>
		// 			<Legal>
		// 				<Anchor href="#">Aviso Legal</Anchor>-<Anchor href="#">Privacidad</Anchor>-
		// 				<Anchor href="#">Cookies</Anchor>
		// 			</Legal>
		// 		</Information>
		// 	</StyledFooter>
		// </Container> */}

export default Footer;
