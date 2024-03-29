import { Link } from "react-router-dom";
import styled from "styled-components";


// export const RRSS = styled.div`


/* 

   
    display: flex;
  
    flex-direction: column;
   
    justify-content: space-evenly;
    width: 4%;
    
    padding-bottom: 2%;


@media(min-width:0px){
    width: 37vw;
    flex-direction: column;

    }
    @media(min-width:375px){
        
    width: 30vw;
    }
    @media(min-width:425px){
    /* margin-top: 10.1%;
    width: 28vw;
    flex-direction: row-reverse; */
    /* margin-top: 2.1%;
    width: 20vw;
    flex-direction: column;
    height:14vh ;
    } */
    
    // 620 */


/* @media(max-width:620px){
    margin-top: 10.1%;
    width: 28vw;
    flex-direction: row-reverse;
    }
    @media(max-width:425px){
        
    width: 30vw;
    }
    @media(max-width:375px){
    width: 37vw;
    } */


// `
export const RRSS = styled.div`

   
    display: flex;
    
    flex-direction: row-reverse;
    
    /* justify-content: space-evenly; */
    width: 95%;
    padding-top:8%;
    padding-bottom: 2%;


    /* @media(min-width:425px) and (max-width:1024px){
    
    width: 9vw;
    } */
     @media(min-width:620px){
    margin-top: 1.1%;
    /* width: 28vw; */
flex-direction:column; 
width: 10%;
    padding-top:0%;
    }
    @media(min-width:1024px){
    /* margin-top: 7.1%;
    width: 28vw; */
flex-direction:column; 
width: 4%;
    padding-top: 1%;
    }
    /* @media(min-width:0px){
    margin-top: 7.1%;
    width: 28vw;
    flex-direction: row;
    } */

`


export const Icon =styled.div`

    margin: 3% 10% 0 11%;

`

export const NavLink=styled(Link)`

height: 20%;
@media(min-width:425px) and (max-width:1024px){
    height: 4vh; 
    width: 8vw;
    }

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

`
export const MandoH=styled.div`
align-self: flex-end;
     position: flex;
    width: 10%;
    z-index: 3;
    flex: 0 0 190px;
    margin-bottom: auto;
   


    @media (max-width:425px){
    flex: 0 0 150px;
     
    }
   




`

export const Before =styled.div`
border-bottom: 1px solid #2c2c2c;
    content: "";
    display: block;
    height: 1px;
    width: 30px;
`


export const Link2=styled(Link)`

height: 75%;
cursor: pointer;
@media(max-width:768px) {
    /* height: 5vh; 
    width: 11vw; */
display:none
    }
@media(max-width:425px) {
    height: 5vh; 
    width: 11vw;
/* display:none */
    }
@media(max-width:375px){
    height: 65%;
}

`
export const Mando=styled.img`

    display: block;
    width: 90%;
  

    @media (max-width: 375px) {
           width: 65%;
  } 
    
`
export const Contenedor=styled.div`
background-color: 	#fff8df;

height: 22vh;

 @media (max-width:425px){
     height: 30vw;
    }
    @media (min-width:426px)and (max-width:1024px){
    }

`
export const Contenedor1=styled.div`

    box-sizing: border-box;
    display: flex;
   
    justify-content: space-between;
    padding: 24px 50px 30px;
    max-width: 1440px;
    margin: auto;

    @media (max-width:620px){
        padding: 0% 8% 0%;
    }

   


    

`

export const List=styled.nav`

width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 63px 56px;
    grid-gap: 27px;
    margin-top: 3%;




`

export const ListItem=styled.nav`

padding: 0 14%;
    
    margin: 0% 0 0 0;

  

	
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
    display: none;
    width: 60%;
@media(min-width:1024px){
    display: block;
}

`

export const Foto=styled.img`
width: 100%;
    height: 96.8%;
    
    object-fit: cover;
    @media (max-width: 620px) {
        position: relative;
    padding-bottom: 1.25%;
    height: 22vh;
    width: 100%;
   
  
   
  }`
  
  export const Linkfront2=styled(Link)`
position: relative;
    padding: 20px;
    display: block;
    color: white;
    text-decoration: none;
    

`
