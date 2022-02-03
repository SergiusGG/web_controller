import styled from "styled-components";


export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    cursor: pointer;
    font-size: 3em;
    font-family: 'Pirata One', 'Trade Winds';
    width: 25%;
  }
  @media (max-width: 2068px) {
    flex-flow: column nowrap;
    /* background-color: red; */
    background-color:#e44445;
    z-index:3;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    /* height: 100vh; */
    height: 100vh;
    margin:auto;
    width: 50vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

export const Div=styled.div`
width: 100vw;
height: 100vh;


`

export const Blurry=styled.div`
width: 100vw;
    z-index: 1;
    background-color: white;
    opacity: 70%;
    height: 100vh;
    @media (max-width: 2068px) {
    flex-flow: column nowrap;
    /* background-color: red; */
    /* background-color:white; */
    /* z-index:2; */
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    /* height: 100vh; */
    margin:auto;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    


`
