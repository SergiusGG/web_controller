import styled from "styled-components";



export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  /* margin-left:35%;
  width:107%; */
  /* top: 15px; */
  /* right: 15%; */
  /* right:${({ open }) => open ? '-180%' : '85%'}; */
  /* antes habia un -350% */
  right:${({ open }) => open ? '1950%' : '75%'};


  z-index: 20;
  display: none;
  cursor: pointer;
  @media (max-width: 2068px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  @media (max-width:768px){
 
 /* right:${({ open }) => open ? '990%' : '75%'}; */
 right:${({ open }) => open ? '41vw' : '75%'};
 /* right:${({ open }) => open ? '300px' : '75%'}; */

}
  @media (max-width:425px){
 
 /* right:${({ open }) => open ? '470%' : '75%'}; */

}
  @media (max-width:375px){
 
    /* right:${({ open }) => open ? '390%' : '75%'}; */
   
  }
  @media (max-width:320px){
    /* right:${({ open }) => open ? '-60%' : '75%'}; */
    /* right:${({ open }) => open ? '320%' : '75%'}; */
    /* margin-right:10%; */
    /* position: fixed; */
  }
  div{
    /* position: fixed; */
    width: 2rem;
    height: 0.35rem;
    background-color: white;
    /* ${({ open }) => open ? '#ccc' : '#333'}; */
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      /* position: fixed; */
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      /* position: fixed; */
    }
  }
`;



export const Div=styled.div`
z-index: 3;
/* width: 3vw; */



`

// fixed para img de header 
// position: fixed;
// width: 10%;
// z-index: 3;


// para el div que contiene la img 
//     /* display: block; */
//     /* position: relative; */
//     width: 100%;
//     margin-bottom: auto;
//     /* margin-bottom: 11%; */
//     margin-top: -3%;


// para los div del menu
// background-color:black

// Hacer componente con icono y menu burger fixed

export const Navigationsticky = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.6rem;
    position: fixed;
    top: 7.6%;
    left: 0;
    right: 0;
    height: 97px;
    right: 0px;
    align-items: center;
    transition: transform ease .1s;
    margin-left:90%
  
   
  `;