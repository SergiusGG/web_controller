import { Link } from "react-router-dom";
import styled from "styled-components";
import Elden2 from "../../../img/Elden2.jpg";

export const Foto=styled.img`
width: 100%;
height: 20vh;


`
export const RRSS = styled.div`

   
    display: flex;
    
    flex-direction: column;
    
    justify-content: space-evenly;
    width: 4%;
    
    padding-bottom: 2%;


    @media(min-width:425px) and (max-width:1024px){
    
    width: 9vw;
    }
    @media(max-width:620px){
    margin-top: 7.1%;
    width: 28vw;
    flex-direction: row;
    }

`

export const Icon =styled.div`

    margin: 3% 10% 0 11%;

`

export const Link2=styled(Link)`

height: 20%;
cursor: pointer;
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


`

export const LR =styled.img`
width: 60%;
    height: 80%


`

export const MandoH=styled.div`
align-self: flex-end;
    display: block;
    flex: 0 0 190px;
    





`
export const Mando=styled.img`

    display: block;
    width: 55%;
  


    
`
export const Contenedor=styled.div`
background-image: url(${Elden2});
background-size: cover;
background-position: 80% 0%;
background-repeat: no-repeat;
position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    z-index: 0;


height: 100vh;

 @media (max-width:375px){
     
     min-width: 375px;
    }
    @media (min-width:426px)and (max-width:1024px){
    }
    @media (max-width:2000px){
     
     background-size:cover;
    }
`

export const Contenedor1=styled.div`
position: sticky;
   
    box-sizing: border-box;
    display: flex;
   
    justify-content: space-between;
    padding: 24px 50px 30px;
    max-width: 1440px;
    margin: auto;

 


    

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
color: white;
    text-decoration: none;
    font-size: 1.3em;
    font-family: 'Pirata One', 'Trade Winds';
    display: block;
    

`
export const Header1=styled.div`
    display: block;
    width: 60%;
@media(max-width:1024px){
    display: none;
}

`

export const Img=styled.img`
width: 100%;

`

export const Parrafo=styled.p`
@media(max-width:2400px){
font-size: 1.3em;
    line-height: 35px;
    color: white;
    margin: auto;
    text-align:center;

}

    
`

export const ContTitular=styled.div`
@media(max-width:2000px){
width: 40%;
    margin: auto;
    padding-top: 15%;
}
@media(max-width:1024px){
   width: 50%;
    margin: auto;
    padding-top: 25%; 
}

@media(max-width:768px){
    width: 70%;
    margin: auto;
    padding-top: 30%;
}
@media(max-width:425px){
   width: 87%;
    margin: auto;
    padding-top: 80%; 
}


`