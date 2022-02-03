import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import {
Nav,
} from "./navbar.style";


const Navbar = () => {
  return (
    <Nav>
      {/* <div className="logo">
     
      </div> */}
      <Burger />
      {/* <div ref={node}>
  <Burger open={open} setOpen={setOpen} />
  <RightNav open={open} setOpen={setOpen} />
</div> */}
    </Nav>
    
    
  )
}

export default Navbar