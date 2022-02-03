import React, {useState} from "react";
import mando from "../../../img/joystick.svg";
import fondo from "../../../img/b3.jpg"
import fondo1 from "../../../img/fondo.svg"
import twitter from "../../../img/twitter.svg"
import fb from "../../../img/facebook.svg"
import User from "../../../img/User2.svg";
import reddit from "../../../img/reddit-2-logo-svg-vector.svg"
import user from "../../../img/user.svg"
import Search from "../../../img/Search.svg";
import Elden4 from "../../../img/ER.png";


import {Link, BrowserRouter as Router} from "react-router-dom";
import {
	RRSS,
	Icon,
	LT,
	LFB,
	LR,
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
    Foto,
	Img,
	Parrafo,
	ContTitular
} from "../Header/HeaderAnalisis.style";
import { Container } from "../../../theme/GlobalStyles";
import Elden2 from "../../../img/Elden2.jpg"
import NavbarResp from "../../navbar/navbarResponsive";
import Navbar from "../../burgerNavBar/NavBar";
import LogNavbar from "../../lognavbar/LogNavbar";
import Prueba from "../../pruebas/Prueba";




	const HeaderAnalisis =()=>{
		return (
			
			<>
			<Router>
<Contenedor id="inicio" 

 >

	 
<Contenedor1>
	<Prueba/>
	<Link to="/">
<MandoH>
	<Mando src={mando} alt="icono web"/>
	</MandoH>
</Link>
<Header1>
	<List>
		<ListItem><NavA to="#" title="Sony ">Sony</NavA></ListItem>
		<ListItem><NavA to="#" title="Microsoft ">Microsoft</NavA></ListItem>
		<ListItem><NavA to="#" title="Nintendo ">Nintendo</NavA></ListItem>
		<ListItem><NavA to="#" title="PC">PC</NavA></ListItem>
		<ListItem><NavA to="#" title="Podcast ">Podcast</NavA></ListItem>
		<ListItem><NavA to="#" title="Reflexion">Reflexión</NavA></ListItem>

	</List>
	</Header1>



<RRSS>
<Navbar/>



	<Link2 to="# " title="Facebook " ><LFB class="lf " src={Search} alt="Facebook "/></Link2>

	<Link2 to="/login" title="User " class="redd "><LR class="lr " src={User} alt="logo Reddit "/></Link2>
	
</RRSS>

	
</Contenedor1>

<ContTitular>
<Img src={Elden4}/>
<Parrafo>Ahorarr quietooor a gramenawer te va a hasé pupitaa por la gloria de mi madre wenghuinvguirenuihnu ern gvhuerg evnert verngv ergv grh</Parrafo>
</ContTitular>
</Contenedor>
 
 

</Router>
			</>
		);
							};
							


export default HeaderAnalisis;
