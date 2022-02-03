import styled from "styled-components";
import { Link } from "react-router-dom";


export const List=styled.nav`
/* display: flex; */
/* margin-left: 1%;
margin-right:50%; */
/* position: absolute; */
/* display: block; */
width: 100%;
    display: flex;
    /* grid-template-columns: repeat(3,1fr);
    grid-template-rows: 63px 56px; */
    grid-gap: 27px;
    margin-top: 3%;
    flex-flow:column nowrap;
    background-color:red;
    position: fixed;
    top:0;
    right: 0;
    height: 200hv;
    width: 40%;
    padding-top:3.5rem
    transform:${({open}) => open ? "translateX(0)" : "translate(100%)"} ;
    transition: transform 0.3s ease-in-out;



`

export const ListItem=styled.nav`

padding: 0 14%;
    /* font-size: 1vw; */
    margin: 0% 0 0 0;
    /* display: grid;
    grid-template-columns: 360px 360px 210px;
    grid-row-gap: 30px;
  */
  

	
`

export const NavA=styled(Link)`
color: rgb(240, 233, 233);
color: white;
    text-decoration: none;
    font-size: 1.3em;
    font-family: 'Pirata One', 'Trade Winds';
    display: block;
    

`