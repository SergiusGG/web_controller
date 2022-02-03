import React from "react";
import {

    List,
    ListItem, 
    NavA

} from "../navbar/navbarResponsive.styles";

import { Link } from "react-router-dom";

import Burger from "./burger";



const  NavbarResp = ({open}) => {
    return (  
<>

	
    <List open={open}>
		<ListItem><NavA to="#" title="Noticias ">Noticias</NavA></ListItem>
		<ListItem><NavA to="#" title="Análisis ">Ánalisis</NavA></ListItem>
		<ListItem><NavA to="#" title="Opinion ">Opinión</NavA></ListItem>
		<ListItem><NavA to="#" title="Reflexion">Reflexión</NavA></ListItem>
		<ListItem><NavA to="#" title="Opinion ">Opinión</NavA></ListItem>
		<ListItem><NavA to="#" title="Reflexion">Reflexión</NavA></ListItem>

	</List>


</>


    );
}
 
export default NavbarResp;