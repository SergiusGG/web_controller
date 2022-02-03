import React from "react";
import { Link } from "react-router-dom";
import { EntryPage, PageHeader, Mando, MandoH } from "./style";
import EntryCard from "../components/entrycard/EntryCard";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import InputGroup from "../components/inputgroup/InputGroup";
import mando from "../img/joystick.svg";


function Login() {


    return(
        <EntryPage>

            <Link to="/">
                <MandoH>
	<Mando src={mando} alt="icono web"/>
	</MandoH>
    </Link>
            <EntryCard>

                <h2>Iniciar sesión</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="login-email">Correo electronico</label>
                        <Input type="text" placeholder="introduce@mail.com" id="login-email"/>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="login-password">Contraseña</label>
                        <Input type="password" placeholder="Contraseña" id="login-password"/>
                    </InputGroup>

                    <Button type="submit" full>Iniciar sesión</Button>
                </form>
                <span>
                    ¿No tienes una cuenta?
                    <Link to="/signup">Registrarse</Link>
                </span>
            </EntryCard>

        </EntryPage>



    );
    
}

export default Login;

