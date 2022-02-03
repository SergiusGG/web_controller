
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import RightNav from '../burgerNavBar/RightNav';
import { useOnClickOutside } from '../hooks/clickOutside';
import { Link } from 'react-router-dom';
import {
StyledBurger,
Div,  
Navigationsticky,
} from "../burgerNavBar/burger2.style";

// import {
//     Navigation,
  
//     Mando,
//     MandoH

// } from "./Prueba.styles";

export default function Burger(){
    // export default function Prueba() {
        const [sticky, setSticky] = useState(false);
      const [hide, show]= useState(false);
      
      
    //   const hideshow = () => {
    //       if (typeof window === "undefined") {
    //         return;
    //       } else {
    //         // show(window.scrollY <=420);
    //         show(window.scrollY <= 420);
      
    //       }
    //     };
      
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
      
        // useEffect(() => {
        //   document.addEventListener("scroll", hideshow);
      
        //   return () => {
        //     document.removeEventListener("scroll", hideshow);
        //   };
        // }, []);
        const stickyStyle = {
          transform: `translateY(${sticky ? "-30%" : "-135%"})`
          // transform: `translateY(${sticky ? "-30%" : "-90%"})`
          
         
        };
        // const stickyStyle2 = {
          
        //   transform: `translatex(${hide ? "-16%" : "8%"})`
        // };
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  
  return (

    <>
    <Navigationsticky style={stickyStyle}>
    <Div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        {/* <Link to="#"><div /></Link> */}
        {/* antes eran div y el estilo de arriba tambien */}
        {/* <Link to="#"><div /></Link>
        <Link to="#"><div /></Link> */}
        <div style={{backgroundColor: "black"}}/>
        <div style={{backgroundColor: "black"}}/>
        <div style={{backgroundColor: "black"}}/>


      </StyledBurger>
      {/* <RightNav open={open}/> */}

      <div ref={node}>
  {/* <Burger open={open} setOpen={setOpen} /> */}
  {/* <Div></Div> */}
  <RightNav open={open} setOpen={setOpen} />
</div></Div></Navigationsticky>
    </>
  );
}