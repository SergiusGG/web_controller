
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
import { useOnClickOutside } from '../hooks/clickOutside';
import { Link } from 'react-router-dom';
import {
StyledBurger,
Div,
} from "./burger.style";


const Burger = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  
  return (

    <>
    <Div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        
        <div style={{backgroundColor: "black"}}/>
        <div style={{backgroundColor: "black"}}/>
        <div style={{backgroundColor: "black"}}/>


      </StyledBurger>

      <div ref={node}>
  
  <RightNav open={open} setOpen={setOpen} />
</div></Div>
    </>
  )
}

export default Burger


// // hacer un div para la X y ponerle inline block