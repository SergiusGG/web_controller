import { Link } from "react-router-dom";
import styled from "styled-components";
import Elden2 from "../../../img/Elden2.jpg";

export const Foto=styled.img`
width: 100%;
height: 20vh;


`
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


    @media(min-width:425px) and (max-width:1024px){
        /* height: 88%; */
    /* margin-top: 7.1%; */
    width: 9vw;
    }
    @media(max-width:620px){
        /* height: 88%; */
    margin-top: 7.1%;
    width: 28vw;
    flex-direction: row;
    }

`

export const Icon =styled.div`

    /* display: flex; */
    margin: 3% 10% 0 11%;

`

export const Link2=styled(Link)`
/* padding: 0% 30%;
width: 20px;
height: 30px; */
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
    /* -webkit-box-flex: 0; */
    flex: 0 0 190px;
    /* width: 13%; */
    /* margin-left: 10%; */
    /* margin-top: 15%; */
    /* height: 174%; */

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
export const Mando=styled.img`
/* width: 120%; */
    /* height: 85%; */
    /* margin-top: 30%; */
    /* margin-left: 10% */ 
    /* margin-top: 88%;
    width: 100%; */
    display: block;
    width: 55%;
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


    
`
export const Contenedor=styled.div`
/* background-color: 	#fff8df; */
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
    /* min-width: 375%; */


height: 100vh;
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
 @media (max-width:375px){
     /* antes 425px */
     /* height: 24vw; */
     min-width: 375px;
    }
    @media (min-width:426px)and (max-width:1024px){
     /* height: 17vw; */
    }
    @media (max-width:2000px){
     /* antes 425px */
     /* height: 24vw; */
     background-size:cover;
    }
`

export const Contenedor1=styled.div`
position: sticky;
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