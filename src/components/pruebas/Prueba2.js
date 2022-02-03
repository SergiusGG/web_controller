
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



export default function Burger(){
    
        const [sticky, setSticky] = useState(false);
      const [hide, show]= useState(false);
      
     
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
      
      
        const stickyStyle = {
          transform: `translateY(${sticky ? "-30%" : "-135%"})`
         
          
         
        };
       
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  
  return (

    <>
    <Navigationsticky style={stickyStyle}>
    <Div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        
        <div style={{backgroundColor: "black"}}/>
        <div style={{backgroundColor: "black"}}/>
        <div style={{backgroundColor: "black"}}/>


      </StyledBurger>
      

      <div ref={node}>
  <RightNav open={open} setOpen={setOpen} />
</div></Div></Navigationsticky>
    </>
  );
}