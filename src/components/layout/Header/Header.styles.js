import { Link } from "react-router-dom";
import styled from "styled-components";


export const RRSS = styled.div`

    /* display: flex; */
    /* margin: 2.5% 0 3% 25%; */
    display: flex;
    /* -webkit-box-orient: vertical;
    -webkit-box-direction: normal; */
    flex-direction: column;
    /* -webkit-box-pack: justify;
    justify-content: space-between; */
    /* width: 3%;
    height: 70%;
    margin-top: 1.1%; */
    justify-content: space-evenly;
    width: 4%;
    /* height: 1%; */
    padding-bottom: 2%;
@media(max-width:620px){
        /* height: 88%; */
    margin-top: 10.1%;
    width: 28vw;
    flex-direction: row-reverse;
    }
    @media(max-width:425px){
        /* height: 88%; */
    /* margin-top: 7.1%; */
    width: 30vw;
    }
    @media(max-width:375px){
    width: 37vw;
    }
    /* @media(min-width:425px) and (max-width:1024px){
        /* height: 88%; */
    /* margin-top: 7.1%; */
    /* width: 6vw;
    } */
    
`


export const Icon =styled.div`

    /* display: flex; */
    margin: 3% 10% 0 11%;

`

export const NavLink=styled(Link)`
/* padding: 0% 30%;
width: 20px;
height: 30px; */
height: 20%;
@media(min-width:425px) and (max-width:1024px){
    height: 4vh; 
    width: 8vw;
    }
    /* @media(max-width:425px) {
    height: 5vh; 
    width: 11vw;
    } */
`


export const LT =styled.img`
width: 60%;
    height: 80%


`

export const LFB =styled.img`
width: 60%;
    height: 80%
    margin-top: 40%;
    margin-bottom: 25%;

`

export const LR =styled.img`
width: 60%;
    height: 80%


`
export const Divprueba=styled.div`
/* width: 100%; */

`
export const MandoH=styled.div`
align-self: flex-end;
    /* display: block; */
     position: flex;
    width: 10%;
    z-index: 3;
    /* -webkit-box-flex: 0; */
    flex: 0 0 190px;
    /* width: 100%; */
    margin-bottom: auto;
    /* margin-top: -3%; */
    /* width: 13%; */
    /* margin-left: 10%; */
    /* margin-top: 15%; */
    /* height: 174%; */


    @media (max-width:425px){
    flex: 0 0 150px;
     
    }
    /* @media (min-width:425px)and (max-width:1024px){
     height:48vw;
     margin-top: 0%;
    }
   
    @media (min-width:0px)and (max-width:320px){
        flex: 0 0 115px;
    width: 13%;
     margin-top: 0%; 
    height: 211%;
    }
    @media (min-width:321px)and (max-width:375px){
        /* flex: 0 0 115px; */
    /* width: 13%;
     margin-top: 0%; 
    /* height: 211%; */
    /* height: 310%;
    flex: 0 0 40%;
} */ 




`

export const Before =styled.div`
border-bottom: 1px solid #2c2c2c;
    content: "";
    display: block;
    height: 1px;
    width: 30px;
`


export const Link2=styled(Link)`
/* padding: 0% 30%;
width: 20px;
height: 30px; */
height: 20%;
cursor: pointer;
@media(max-width:425px) {
    height: 5vh; 
    width: 11vw;
    }
@media(max-width:375px){
    height: 65%;
}
/* @media(min-width:425px) and (max-width:1024px){
    height: 4vh; 
    width: 8vw;
    } */
`
export const Mando=styled.img`
/* width: 120%; */
    /* height: 85%; */
    /* margin-top: 30%; */
    /* margin-left: 10% */ 
    /* margin-top: 88%;
    width: 100%; */
    display: block;
    width: 70%;
    /* padding-top: 23%; */
    /* @media (max-width: 1796px) {
        margin-top: 70%;
    width: 100%;
  } 
  
  @media (max-width: 1645px) {
        /* margin-top: 60%; */
    /* width: 100%;
  } 
  @media (min-width:425px)and (max-width:1024px){
     width: 90%;
    }  */ 

    @media (max-width: 375px) {
         /* margin-top: 60%; */
           width: 65%;
  } 
    
`
export const Contenedor=styled.div`
background-color: 	#fff8df;
/* position: sticky;
top: 0; */

/* z-index: 100; */
height: 22vh;
/* display: flex; */
    /* height: 12vw; */
    
    /* width: 100%; */
    /* justiy-content: space-evenly; */
    /* display: grid;
    grid-template-columns: 360px 360px 210px;
    grid-row-gap: 30px; */
    /* @media(min-width:0px) and (max-width:1600px){
  width: 100%;
} */
 @media (max-width:425px){
     height: 30vw;
    }
    @media (min-width:426px)and (max-width:1024px){
     /* height: 17vw; */
    }

`
export const Contenedor1=styled.div`
/* position: fixed; */
    
    /* box-sizing: border-box;
    display: -webkit-box;
    display: flex;
    height: 112%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 35px 16% 30px; */
    box-sizing: border-box;
    display: flex;
    /* height: 184px; */
   
    justify-content: space-between;
    padding: 24px 50px 30px;
    max-width: 1440px;
    margin: auto;

    @media (max-width:620px){
        padding: 0% 8% 0%;
    }

    /* @media (min-width:425px)and (max-width:1024px){
        padding: 0% 5% 18%;
    }
  
    @media (min-width:0px)and (max-width:320px){
        padding: 0% 2% 0%;
        height: 112%;
    }


    @media (min-width:321px)and (max-width:375px){
        padding: 27px 5% 28px;
    height: 132%;

    } */


    

`

export const List=styled.nav`
/* display: flex; */
/* margin-left: 1%;
margin-right:50%; */
/* position: absolute; */
/* display: block; */
width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 63px 56px;
    grid-gap: 27px;
    margin-top: 3%;




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
color: black;
    text-decoration: none;
    font-size: 1.3em;
    font-family: 'Pirata One', 'Trade Winds';
    display: block;
    margin-top:5%;
    

`
export const Header1=styled.div`
    display: block;
    width: 60%;
@media(max-width:1024px){
    display: none;
}

`

// export const HeaderWrapper = styled.header`
// 	width: 100%;
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// `;

// export const StyledHeader = styled.header`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	left: 0px;
// 	font: normal normal normal 26px/32px Helvetica Neue;
// 	letter-spacing: 0px;
// 	color: #7d868b;
// 	background: var(--unnamed-color-e6f2f2) 0% 0% no-repeat padding-box;
// 	background: #e6f2f2 0% 0% no-repeat padding-box;
// 	opacity: 1;
// 	border: 1px solid #b5dddd;
// 	max-width: 100%;
// 	height: 5rem;
// 	& h1 {
// 		text-align: center;
// 		font: normal normal normal 30px/36px Helvetica Neue;
// 		font-size: clamp(1.5rem, 1.25rem + 1.5vw, 2em);
// 		letter-spacing: 0px;
// 		color: #7d868b;
// 		opacity: 1;
// 		margin: 0;
// 	}

// 	&.logged {
// 		justify-content: left;
// 	}
// `;

// export const Logo = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	width: 100%;
// 	height: 5rem;
// 	color: #823434;
// 	font: normal normal normal 15px/15px Korb-Bold;
// 	letter-spacing: 0px;
// 	text-transform: uppercase;
// 	opacity: 1;

// 	&.logged {
// 		justify-content: left;
// 	}
// `;

// export const StyledMiPerfil = styled.div`
// 	position: relative;
// 	display: inline-block;
// `;

// export const StyledLogo = styled.div`
// 	text-align: left;
// 	max-width: 50%;
// 	font: normal normal normal 18px Korb-Bold;
// 	letter-spacing: 0px;
// 	color: #005593;
// 	text-transform: uppercase;
// 	opacity: 1;
// 	justify-content: flex-end;
// 	min-width: 10rem;
// 	padding-top: 1rem;
// `;

// export const StyledImg = styled.img`
// 	width: 35px;
// 	height: 35px;
// 	border-radius: 50%;
// 	margin-left: 0px;
// 	margin-right: 5px;
// `;

// export const StyledText = styled.h6`
// 	text-align: left;
// 	font: normal normal normal 12px Helvetica Neue;
// 	letter-spacing: 0px;
// 	color: #707070;
// 	margin-left: 4px;
// 	opacity: 1;
// `;

// export const Dropdown = styled.ul`
// 	position: absolute;
// 	right: 0;
// 	list-style-type: none;
// 	padding: 0px;
// 	margin-top: 10px;
// 	position: absolute;
// 	background-color: white;
// 	box-shadow: 0px 4px 10px #00000029;
// 	border-radius: 6px;
// 	border: 1px solid #ddd;
// 	width: 180px;

// 	li {
// 		border-bottom: 1px solid #ddd;

// 		&:last-child {
// 			border-bottom: none;
// 		}

// 		a {
// 			display: inline-block;
// 			width: 100%;
// 			padding: 1rem 1rem;
// 			color: #999;
// 			text-decoration: none;
// 			&:hover {
// 				background-color: #ddd;
// 			}
// 		}
// 	}
// `;

// export const StyledButton = styled.button`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	background: #ffffff 0% 0% no-repeat padding-box;
// 	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
// 	border: none;
// 	border-radius: 10px;
// 	opacity: 1;
// 	min-width: 6rem;
// 	width: 120px;
// 	height: 50px;

// 	&:focus {
// 		outline: none;
// 	}

// 	&:hover {
// 		cursor: pointer;
// 	}

// 	&.selected {
// 		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
// 	}
// `;
