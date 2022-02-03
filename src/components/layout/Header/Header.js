import React, {useState, useEffect} from "react";
import mando from "../../../img/joystick.svg";
import fondo from "../../../img/b3.jpg"
import fondo1 from "../../../img/fondo.svg"
import twitter from "../../../img/twitter.svg"
import fb from "../../../img/facebook.svg"
import reddit from "../../../img/reddit-2-logo-svg-vector.svg"
import user from "../../../img/user.svg"
import Search from "../../../img/Search.svg";
import User from "../../../img/User2.svg";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {Link, BrowserRouter as Router} from "react-router-dom";
import {
	RRSS,
	Before,
	Icon,
	LT,
	LFB,
	LR,
	NavLink,
	Link2,
	Mando,
	Contenedor,
	Contenedor1,
	Nav,
	NavIl,
	NavA,
	List,
	ListItem,
	Header1,
	MandoH,
	Divprueba
} from "../Header/Header.styles";
import { Container } from "../../../theme/GlobalStyles";
import Navbar from "../../burgerNavBar/NavBar";
import LogNavbar from "../../lognavbar/LogNavbar";
import Prueba from "../../pruebas/Prueba";
import Prueba2 from "../../pruebas/Prueba2";

	const Header =()=>{

	
		return (
			
			<>
			<Router>
<Contenedor id="inicio" 
 >
<Contenedor1>
	
	
<MandoH>
	<Mando src={mando} alt="icono web"/>
	</MandoH>

<Header1 style={{margin:"auto"}}>
	<List>
	<ListItem>
		<Before></Before><NavA to="#" title="Sony ">Sony</NavA></ListItem>
		<ListItem><Before></Before><NavA to="#" title="Microsoft ">Microsoft</NavA></ListItem>
		<ListItem><Before></Before><NavA to="#" title="Nintendo ">Nintendo</NavA></ListItem>
		<ListItem><Before></Before><NavA to="#" title="PC">PC</NavA></ListItem>
		<ListItem><Before></Before><NavA to="#" title="Podcast ">Podcast</NavA></ListItem>
		<ListItem><Before></Before><NavA to="#" title="Reflexion">Reflexión</NavA></ListItem>

	</List>
	</Header1>


<RRSS>
	
	<Navbar/>

	<Link2 to="# " title="Facebook " ><LFB class="lf " src={Search} alt="Facebook "/></Link2>

	<Link2 to="/login" title="User " class="redd "><LR class="lr " src={User} alt="logo Reddit "/></Link2>
</RRSS>

		<Prueba/>
	<Prueba2/>

</Contenedor1>
</Contenedor>
 

</Router>
			</>
		);
							};
							


export default Header;
