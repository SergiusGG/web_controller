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
// import {Container} from "theme/GlobalStyles";
import { Container } from "../../../theme/GlobalStyles";
import Navbar from "../../burgerNavBar/NavBar";
import LogNavbar from "../../lognavbar/LogNavbar";
import Prueba from "../../pruebas/Prueba";
import Prueba2 from "../../pruebas/Prueba2";
// const profilePicture =
// 	"https://sites.google.com/site/ellibrorojoesdla/_/rsrc/1349808591712/personajes/ganda/Gandalf.jpg";

// const Header = ({isLoggedIn, title}) => {
// 	const [dropdownVisible, setDropdownVisible] = useState(false);
// 	const handleClick = () => {
// 		setDropdownVisible(!dropdownVisible);
// 	};

// 	if (isLoggedIn) {
	const Header =()=>{

	
		return (
			
			<>
			<Router>
<Contenedor id="inicio" 
//  style={{ backgroundImage: `url(${fondo1})` }}
 >
{/* <LogNavbar/>					  */}
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

{/* <nav>
	<List>
		<ListItem><NavA to="#" title="Noticias ">Noticias</NavA></ListItem>
		<ListItem><NavA to="#" title="Análisis ">Ánalisis</NavA></ListItem>
		<ListItem><NavA to="#" title="Opinion ">Opinión</NavA></ListItem>
		<ListItem><NavA to="#" title="Reflexion">Reflexión</NavA></ListItem>
	</List>
</nav> */}
<RRSS>
	
	<Navbar/>
{/* Poner un link en en logo podria solucionar el problema de que toda la zona sea clickeable   */}

	{/* <NavLink to="#" title="Twitter"><LT src={twitter} alt="logo Twitter "/></NavLink> */}

	{/* <NavLink class="user" to="#"><i src={user} class="fa fa-user" aria-hidden="true"></i></NavLink> */}


	{/* <NavLink to="# " title="Facebook " ><LFB class="lf " src={fb} alt="Facebook "/></NavLink>

	<NavLink to="# " title="Reddit " class="redd "><LR class="lr " src={reddit} alt="logo Reddit "/></NavLink> */}
	<Link2 to="# " title="Facebook " ><LFB class="lf " src={Search} alt="Facebook "/></Link2>

	<Link2 to="/login" title="User " class="redd "><LR class="lr " src={User} alt="logo Reddit "/></Link2>
</RRSS>
{/* <Icon>
	<Link class="user" to="#"><i class="fa fa-user" aria-hidden="true"></i></Link>
	<form class="search">
		<div>


			<Link to="#"> */}
				{/* <FontAwesomeIcon icon={faUser} aria-hidden="true" /> */} 
				{/* {/* <img src={user} /> */}
				{/* <i class="fa fa-search" aria-hidden="true"></i> */}
				{/* </Link>
			

		</div>
	</form>
</Icon> */}
	{/* <Divprueba> */}
		<Prueba/>
	<Prueba2/>
	{/* </Divprueba> */}
</Contenedor1>
</Contenedor>
 
{/* <div style={{ backgroundImage: `url(${fondo1})` }}> */}
{/* <Contenedor1 
// style={{ backgroundImage: `url(${fondo})` }}
> */}
	{/* <List>
		<ListItem><NavA to="#" title="Noticias ">Noticias</NavA></ListItem>
		<ListItem><NavA to="#" title="Análisis ">Ánalisis</NavA></ListItem>
		<ListItem><NavA to="#" title="Opinion ">Opinión</NavA></ListItem>
		<ListItem><NavA to="#" title="Reflexion">Reflexión</NavA></ListItem>
		<ListItem><NavA to="#" title="Opinion ">Opinión</NavA></ListItem>
		<ListItem><NavA to="#" title="Reflexion">Reflexión</NavA></ListItem>

	</List> */}

{/* </div> */}
</Router>
			</>
		);
							};
							
	{/* } else { */}
{/* // 		return (
// 			<div>
// 				<Logo> Mi Empresa</Logo>
// 				<StyledHeader>
// 					<h1>{title}</h1>
// 				</StyledHeader>
// 			</div>
// 		);
// 	}
// }; */}

export default Header;
