import styled from "styled-components";


export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  /* top: 15px; */
  /* right: 15%; */
  /* right:${({ open }) => open ? '-180%' : '85%'}; */
  /* antes habia un -350% */
  /* right:${({ open }) => open ? '0%' : '85%'}; */
  right:${({ open }) => open ? '-80%' : '75%'};



  z-index: 20;
  display: none;
  cursor: pointer;
  @media (max-width: 2068px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  @media (max-width:768px){
    /* right:${({ open }) => open ? '-60%' : '75%'}; */
    right:${({ open }) => open ? '600%' : '75%'};
    /* margin-right:10%; */
  }
  div{
    width: 2rem;
    height: 0.35rem;
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



export const Div=styled.div`
z-index: 3;





`



export const Navigationsticky = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.6rem;
    position: fixed;
    top: 3.6%;
    left: 0;
    right: 0;
    height: 97px;
    right: 0px;
    align-items: center;
    transition: transform ease .1s;
    margin-left: 90%;
    z-index: 1;
  
  `;