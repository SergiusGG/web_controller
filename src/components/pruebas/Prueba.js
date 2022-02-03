import React, { useState, useEffect } from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
    Navigation,
    Navigationsticky,
    Mando,
    MandoH

} from "./Prueba.styles";
import mando from "../../img/joystick.svg";

export default function Prueba() {
  const [sticky, setSticky] = useState(false);
const [hide, show]= useState(false);


const hideshow = () => {
    if (typeof window === "undefined") {
      return;
    } else {
      show(window.scrollY <= 420);

    }
  };

  const trackScroll = () => {
    if (typeof window === "undefined") {
      return;
    } else {
      setSticky(window.scrollY >= 120);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", trackScroll);

    return () => {
      document.removeEventListener("scroll", trackScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", hideshow);

    return () => {
      document.removeEventListener("scroll", hideshow);
    };
  }, []);
  const stickyStyle = {
    transform: `translateY(${sticky ? "-30%" : "-135%"})`
    
   
  };
  const stickyStyle2 = {
    
    transform: `translatex(${hide ? "-16%" : "8%"})`
  };
 
  return (
    <>
      
<Navigationsticky style={
        stickyStyle2,
        stickyStyle
         }>
      <MandoH >
	<Mando src={mando} alt="icono web"/>
	</MandoH>
       
      </Navigationsticky>

    </>
  );
}



