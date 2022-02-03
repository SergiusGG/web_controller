import React from "react";

import{StyledNavbar, NavItemLink} from "./LogNavbar.styles";


function LogNavbar(
    // { children }
    ) {

    return(
        <StyledNavbar>
            <NavItemLink to="/login">Inicio de sesión</NavItemLink>
            <NavItemLink to="/signup">Registrarse</NavItemLink>


        </StyledNavbar>
    );
}

export default LogNavbar;