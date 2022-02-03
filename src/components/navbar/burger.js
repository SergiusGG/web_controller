import React, {useState} from "react";
import { StyledBurger } from "./burger.styles";
import NavbarResp from "./navbarResponsive";


const Burger = () => {

    const[open, setOpen]=useState(false)
    return ( 
<>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>

            <div/>
            <div/>
            <div/>
        </StyledBurger>
        <NavbarResp open={open}/>
        </>


     );
}
 
export default Burger;