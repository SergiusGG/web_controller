import styled from "styled-components";
import Colors from "../../../theme/Colors"
import { Link } from "react-router-dom";


export const Contenedor= styled.div`
background-color: #e44445;
    display: flex;
	justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1vh;
    -webkit-box-pack: justify;
    padding: 60px 0 70px;
    color: #fff;

    @media(min-width:0px) {
   padding:0 0 0 0;
    color: #fff;

    height: 100%;
    
    margin-top: 10%;
    min-height: 310px;
    }
    
    @media(min-width:620px){
        min-height: 360px;
    }


`


export const Mando=styled.img`

    width: 65%;
    margin-bottom: 5%;

    @media (min-width:320px){
        width: 50%;
    margin-bottom: 5%
    }
	

`

export const NavA=styled(Link)`
color: rgb(240, 233, 233);
    text-decoration: none;
    font-size: .8vw;
    font-family: 'Pirata One', 'Trade Winds';
	margin-left: 1%;
	margin-right: 1%;
    
    @media (min-width:320px){
        font-size: 1.2em;
        margin:0;
    }
	
`


export const List=styled.nav`
margin-left: 5%;


`
export const List1=styled.nav`
margin-right: 36%;     
    width: 15%;

    @media(max-width:1205px){
        display: none;
    }


`

export const Derecha=styled.div`
display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-left: 25%;

    @media(max-width:1235px){
        margin-left: 10%;
    }
    @media(min-width:1235px){
        margin-left: 18%;
    }


`

export const ListItem=styled.nav`

text-decoration: none;
    font-size: 1 em;
	
` 

export const ListItem1=styled.nav`

text-decoration: none;

font-size: 2vw
    
	
` 
