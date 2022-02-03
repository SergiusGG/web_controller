import React from "react";
import { Link } from "react-router-dom";
import { EntryPage, PageHeader, MandoH, Mando } from "./style";
import EntryCard from "../components/entrycard/EntryCard";
import InputGroup from "../components/inputgroup/InputGroup";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import mando from "../img/joystick.svg";



function Signup() {


    return(
        <EntryPage>

<Link to="/">
                <MandoH>
	<Mando src={mando} alt="icono web"/>
	</MandoH>
    </Link>
            <EntryCard>

                <h2>Registrarse</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="signup-name">Apodo</label>
                        <Input type="text" placeholder="Patata" id="signup-name"/>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="signup-email">Correo electronico</label>
                        <Input type="text" placeholder="introduce@mail.com" id="signup-email"/>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="signup-password">Contraseña</label>
                        <Input type="password" placeholder="Password" id="signup-password"/>
                    </InputGroup>

                    <Button type="submit" full>Registrarse</Button>
                </form>
                <span>
                    ¿Tienes una cuenta?
                    <Link to="/login">Iniciar sesión</Link>
                </span>
            </EntryCard>

        </EntryPage>



    );
    
}

export default Signup;

