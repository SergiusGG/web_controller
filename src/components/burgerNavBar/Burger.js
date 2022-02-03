
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
</div></Div>
    </>
  )
}

export default Burger


// // hacer un div para la X y ponerle inline block