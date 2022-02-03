import styled from "styled-components";


export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  /* top: 15px; */
  /* right: 15%; */
  /* right:${({ open }) => open ? '-180%' : '85%'}; */
  /* antes habia un -350% */
  right:${({ open }) => open ? '0%' : '85%'};


  z-index: 20;
  display: none;
  cursor: pointer;
  @media (max-width: 2068px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div{
    width: 2rem;
    height: 0.25rem;
    background-color: white;
    /* ${({ open }) => open ? '#ccc' : '#333'}; */
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

// export const Div=styled.div`
// color: blue;
// width: 30%;
// height: 100%;
// z-index:2;


// `

export const Div=styled.div`
/* position: fixed; */
z-index: 3;
/* color: black;
background-color: black;
border-block-color: black; */
/* width: 100%; */




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
    /* top: 10%; */
    top: 3.6%;
    /* top:90%; */
    left: 0;
    /* left: -16%; */
    right: 0;
    /* right: 10%; */
    height: 97px;
    right: 0px;
    align-items: center;
    transition: transform ease .1s;
    /* margin-left:90%; */
    margin-left: 90%;
    z-index: 1;
  
    /* background: aquamarine; */
  `;