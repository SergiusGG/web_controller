import React, { useState, useEffect } from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import "./Prueba.styles";
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
      // show(window.scrollY <=420);
      show(window.scrollY <= 420);

    }
  };

  const trackScroll = () => {
    if (typeof window === "undefined") {
      return;
    } else {
      // setSticky(window.scrollY >= 120);
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
    // transform: `translateY(${sticky ? "-30%" : "-90%"})`
    
   
  };
  const stickyStyle2 = {
    
    transform: `translatex(${hide ? "-16%" : "8%"})`
  };
  // const stickyStyle = {
  //   transform: `translateY(${sticky ? "-200px" : "-100%"})`
   
  // };
  // const stickyStyle2 = {
    
  //   transform: `translatex(${hide ? "-16%" : "30px"})`
  // };
  return (
    <>
      {/* <Navigation>
        <h2>This is my header</h2>
        <h2>Scroll down!</h2>
      </Navigation>  */}
      {/* <Navigationsticky style={
        stickyStyle,
        stickyStyle2 }>
      <MandoH >
	<Mando src={mando} alt="icono web"/>
	</MandoH>
       
      </Navigationsticky> */}
      {/* <p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p>
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p>
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p>
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p>
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p>
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p>
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p>
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p>
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p>
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p>
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p>
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p> */}

<Navigationsticky style={
        stickyStyle2,
        stickyStyle
         }>
      <MandoH >
	<Mando src={mando} alt="icono web"/>
	</MandoH>
       
      </Navigationsticky>
{/* 
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p>
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p>
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p>
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p>
<p>Lorem fistrum qué dise usteer a wan diodeno sexuarl mamaar hasta luego Lucas. Tiene musho peligro torpedo por la gloria de mi madre va usté muy cargadoo hasta luego Lucas amatomaa. Benemeritaar al ataquerl te voy a borrar el cerito pecador. Benemeritaar caballo blanco caballo negroorl se calle ustée pupita hasta luego Lucas. De la pradera me cago en tus muelas pecador me cago en tus muelas está la cosa muy malar va usté muy cargadoo.

Te voy a borrar el cerito quietooor pecador por la gloria de mi madre la caidita ese pedazo de diodeno me cago en tus muelas diodenoo. Papaar papaar torpedo benemeritaar tiene musho peligro condemor quietooor condemor diodeno ahorarr se calle ustée. Ese que llega está la cosa muy malar caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor. Amatomaa pecador torpedo condemor torpedo quietooor por la gloria de mi madre torpedo a peich ese que llega. Caballo blanco caballo negroorl fistro jarl papaar papaar ahorarr se calle ustée papaar papaar. Diodeno no puedor sexuarl papaar papaar al ataquerl fistro te voy a borrar el cerito benemeritaar llevame al sircoo.

Te va a hasé pupitaa apetecan llevame al sircoo quietooor llevame al sircoo de la pradera ese hombree. A peich ese hombree de la pradera jarl me cago en tus muelas llevame al sircoo. Fistro se calle ustée por la gloria de mi madre a gramenawer. No puedor al ataquerl jarl pupita pupita me cago en tus muelas ese hombree pupita jarl diodenoo. Ahorarr no te digo trigo por no llamarte Rodrigor va usté muy cargadoo a gramenawer benemeritaar no te digo trigo por no llamarte Rodrigor ese pedazo de se calle ustée caballo blanco caballo negroorl.</p> */}

    </>
  );
}



// Hay 2 estilos:
// Con X aparece, desaparece y luego aparece desde el lateral
// Con Y aparece desde arriba