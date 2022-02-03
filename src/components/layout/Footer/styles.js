import styled from "styled-components";
// import Colors from "theme/Colors.js";
import Colors from "../../../theme/Colors"
import { Link } from "react-router-dom";


export const Contenedor= styled.div`
background-color: #e44445;
    display: flex;
    /* justify-content: space-evenly; */
	justify-content: space-between;
    align-items: center;
    /* padding-top: 1%; */
    width: 100%;
    height: 1vh;
    /* height: 6vw; */
    -webkit-box-pack: justify;
    padding: 60px 0 70px;
    color: #fff;
    /* min-height: 310px; */

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
/* width: 30%; */
    /* height: 60%; */
	/* margin-top: 1%; */
	/* padding-left: 100%; */
	/* margin-left: 60%; */
    width: 65%;
    /* padding-left: 20%; */
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
	/* text-decoration: none; */
	margin-left: 1%;
	margin-right: 1%;
    
    @media (min-width:320px){
        font-size: 1.2em;
        margin:0;
    }
	
`
// export const NavA1=styled(Link)`
// color: rgb(240, 233, 233);
//     text-decoration: none;
//     font-size: .8vw;
//     font-family: 'Pirata One', 'Trade Winds';
// 	/* text-decoration: none; */
// 	margin-left: 1%;
// 	margin-right: 1%;
    
	
// `

export const List=styled.nav`
/* display: flex; */
margin-left: 5%;
/* padding-right: 25% */


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
    /* margin-right: 25%; */
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
/* padding: 0 14%; */
    font-size: 1 em;
    /* margin: 0 4% 10% 0; */
	
` 

export const ListItem1=styled.nav`

text-decoration: none;

font-size: 2vw
    
	
` 
// export const Wrapper = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	width: 100%;
// 	max-width: 600px;
// 	margin: 0 auto;
// 	padding-left: 30px;
// 	padding-right: 30px;

// `



// columna del centro 
// margin-right: 36%;
//     width: 15%;

// Para el texto
//     font-size: 2vw