import styled from "styled-components";
import { Link } from "react-router-dom";
import { conditionalExpression } from "@babel/types";


export const Frontal1=styled.div`
display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: minmax(300px,auto);
    grid-gap: 2px;
    margin: 0 auto;
    max-width: 1440px;

    @media(min-width:0px) and (max-width:620px){
        display: block;
    grid-template-columns: repeat(1,1fr);
    grid-auto-rows: minmax(300px,auto);
    grid-gap: 2px;
    
  } 
  @media (min-width:620px) and (max-width:918px){
   
    grid-template-columns: repeat(3,1fr);
    grid-auto-rows: minmax(300px,auto);
    grid-gap: 2px;
    }

 

    


`
export const Linkfront=styled(Link)`
padding: 20px;
    display: block;
    max-width: 100%!important;
    text-decoration: none;
    color: black;


    @media(min-width:0px) and (max-width:620px){
        
    display: block;
    max-width: 100%!important;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: black;
    text-align: center;
    padding: 60px 15px 1px;
    }

`

export const Linkfront2=styled(Link)`
position: relative;
    padding: 20px;
    display: block;
    color: white;
    text-decoration: none;
    

`

export const Contitular=styled.div`
width: 100%;

`


export const Titulofront=styled.h2`

font-size: 26px;
    line-height: 28.6px;
    
`

export const Titulofront2=styled.h2`

font-size: 26px;
    line-height: 28.6px;
    
`


export const Titular=styled(Link)`
position: absolute;
    bottom: 50%;
    right: 0;
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
    color: #fff;
    background-color: #e44445;
    display: block;
    padding: 5px 10px;
    bottom: 0;
    text-decoration:none;
`

export const Titular2=styled(Link)`
position: absolute;
    bottom: 50%;
    right: 0;
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
    color: #fff;
    background-color: #e44445;
    display: block;
    padding: 5px 10px;
    text-decoration:none;

    
    
`

export const Col= styled.div`

-webkit-box-pack: start;
    justify-content: flex-start;
    height: 100%; 


`

export const Col3=styled.div`
-webkit-box-pack: start;
    justify-content: flex-start;
    height: 100%; 
    @media (min-width:624px) and (max-width:918px){
        display: none;
    }



`

export const Col2= styled.div`

grid-row-end: span 2;
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    height: 105%;
    @media (max-width: 620px) {
      
        -webkit-box-pack: start;
    justify-content: flex-start;
    height: 55%;
    margin-bottom: 15%;
      
      }


`

// Se podria quitar el padding y poner height en %
export const Img1=styled.div`
position: relative;
    height: 0;
    padding-bottom: 56.25%;
    width: 100%;
    @media(min-width:0px) and (max-width:620px){
        padding-bottom: 20.25%;
      
  
  } 
 
    
    

`

export const Img=styled.div`

position: absolute;
    width: 100%;
    height: 100%;
    @media (max-width: 620px) {
      
        width: 100%;
    height: 100%;
    
    
    
    }
 


`
export const Foto1=styled.img`
    position: relative;
    padding-bottom: 1.25%;
    height: 22vh;
    width: 100%;
    object-fit: cover;
   


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
   
  
   
  }



`
export const Container=styled.div`
    overflow-x: hidden
`



export const Cuerpo=styled.div`
-webkit-box-flex: 0;
    flex: 0 0 774px;
    padding: 170px 0 60px;
    display: block;

    width: 40%;

    @media(min-width:320px) and (max-width:374px){
        flex: 0 1 774px;
    }
`

export const Indice=styled.div`
border-top: 1px solid #9b9b9b;

  @media(min-width:665px) and (max-width:1600px){
  width:80%;
  }
  @media(min-width:519px) and (max-width:665px){
    width:60%;
  }
  @media(min-width:375px) and (max-width:519px){
    width:42%;
  }
`


export const Articulo=styled.div`
display: flex;
    padding: 26px 0;
    border-bottom: 1px solid #9b9b9b;


`

export const Artcontainer=styled.div`
display: -webkit-box;
    display: flex;
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: relative;

`

export const Linkart =styled(Link)`
background-color: #e44445;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    top: 0;
    right: 0;
    min-width: 14px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    padding: 0 7px;


`

export const Headerart=styled.div`



`


export const H3 =styled.h3`
font-size: 1.2em;
    font-style: italic;
    font-weight: 400;
    line-height: 19px;
    margin: 8px 40px 10px 0;
    @media(min-width:375px) and (max-width:519px){
        font-size: 0.9em;
    font-weight: 200;
    line-height: 10px;
  }
  @media(min-width:622px) and (max-width:666px){
    font-size: 1em;
  }
   
`

export const H2 =styled.h2`
font-size: 1.5em;
    line-height: 20.6px;
    width: 90%;
    @media(min-width:0px) and (max-width:519px){
        font-size: 0.9em;
    line-height: 12.6px;
    width: 90%;
    }
 
    @media(min-width:622px) and (max-width:666px){
        font-size: 1.2em;
    line-height: 20.6px;
    width: 100%;
  }

`

export const Linkh2=styled(Link)`
text-decoration: none;
    color: black;

`


export const Desc =styled.div`
font-size: 16px;
    line-height: 24px;
    max-width: 80%;
 
  @media(min-width:622px) and (max-width:666px){
        max-width: 100%;
  }

`

export const Parrafo=styled.p`
display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 1.1em;
    line-height: 24px;
    @media(min-width:0px) and (max-width:622px){
        
    display: none;
  }
 
    @media(min-width:622px) and (max-width:666px){
   
    font-size: .9em;
    
  }

   


`


export const Footerart=styled.div`

color: #9b9b9b;
    display: -webkit-box;
    display: flex;
    font-size: 14px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    text-transform: uppercase;
    @media(min-width:0px) and (max-width:625px){
       
    display: none;
  }


`

export const Footer1=styled.div`


`

export const Footer2=styled.div`


`
export const Fotoart=styled.img`
width: 35%;
    margin-right: 2%;
    height: 30vh;
    object-fit: cover;
    @media(min-width:0px) and (max-width:520px){
       width: 25%;
       height: 10vh;
    margin-right: 5%;
    object-fit: cover;
  }
  @media(min-width:520px) and (max-width:625px){
    width: 25%;
    height: 18vh;
    margin-right: 5%;
    margin-top: 3%;
    object-fit: cover;
  }

  @media(min-width:320px) and (max-width:375px){
   height: 13vh;
  }
  


`

export const Ultracuerpo=styled.div`
display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    max-width: 1180px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto;

`


export const LateralD=styled.div`
-webkit-box-flex: 0;
    flex: 0 0 346px;
    padding: 148px 0 60px;
    
  @media (max-width: 1140px) {
       display: none;
  } 

`

export const Aside1=styled.div`
margin-bottom:50px;

`

export const PriH3=styled.h3`
border-top: 1px solid #9b9b9b;
    content: "";
    color: #e44445;
    display: block;
    font-size: 20px;
    font-weight: 700;
    padding: 16px 0;
    text-transform: lowercase;

`

export const H3link=styled(Link)`
color: inherit;
    text-decoration: none;
`
export const ContAs1=styled.div`
margin: 26px 0;
    position: relative;
`
export const Miniatura=styled.div`
display: block;
    width: 100%;
    height: 0;
    padding-bottom: 77.5%;
    overflow: hidden;
    position: relative;

`

export const Textmini=styled.div`
color: #fff;
    position: absolute;
    padding: 30px;
    
    bottom: 0;

`


/* Falta titulo texto */

export const H2textmini=styled.h2`
font-size: 24px;
    line-height: 26.4px;
    margin: 0;
`

export const Leermas=styled(Link)`
color: #e44445;
    display: block;
    text-align: right;
    text-decoration: none;

`

export const Imgaside=styled.img`
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;

`





export const Escaparate=styled.div`
color: rgb(255, 255, 255);
    
`

export const Intesc=styled.div`
display: block;

    @media(min-width:320px) and (max-width:425px){
    }
    @media(min-width:425px) and (max-width:725px){
    }
`
export const Fondo=styled.div`

    position: absolute;
  
    
    @media (min-width:425px) and (max-width: 725px) {
    position: absolute;
    width: 100%;
    height: 65%;
    
    }
    @media (min-width:725px) and (max-width: 875px) {
    position: absolute;
    width: 100%;
    height: 75%;
    
    }
    @media(min-width:0px) and (max-width:425px){
        width: 100%;
    height: 50%;
    }

    @media (min-width:875px) and (max-width: 1200px) {
    position: absolute;
    width: 100%;
    height: 95%;
    
    }
    @media (min-width:1201px)  and (max-width:1440px){
         width: 100%;
    height: 94%;
    }
    @media (min-width:1441px)  and (max-width:2560px){
         width: 80%;
    height: 94%;
    margin: auto;
    margin-left:10%
    }

    
` 
export const Fondoimg=styled.img`
width: 100%;
    height: 78%;
    object-fit: cover;
    @media(min-width:0) and (max-width:425px){
    height: 165%;
}
`

export const Inferioresc=styled.div`
position: relative;
    margin: 0 auto;
`

export const Superioresc=styled.div`
margin-left: auto;
max-width: 50%;
margin-bottom: 12%;
margin-top: 3%;
`
export const Superiorsub=styled.div`
font-size: 20px;
    font-weight: 700;
    color: #eb9faf;
    font-style: italic;
    margin-bottom: 10px;
`

export const Tituloesc=styled.div`
font-size: 64px;
    font-weight: 700;
`

export const Linkesc=styled(Link)`
color: inherit;
    text-decoration: none;
    text-decoration: transparent;
`
export const Textoesc=styled.div`
line-height: 26.4px;
@media(min-width:320px) and (max-width:768px){
    font-size: 0.6em;
}
`

export const Artinf=styled.div`



    width: 100%;
    display: flex;
    margin-top: 6%;
    margin-left: 3%;
    @media (max-width:2560px){
        margin-top: 13%;
    margin-left: 18%;
    width: 90%;
    }
    @media (max-width: 1440px) {
        display: flex;
    margin-top: 6%;
    margin-left: 5%;
    width: 25%;
    }
    @media (max-width:1024px){
    margin-left: 5%;
    width: 23%;
    }
@media(max-width:840px){
    overflow-x: scroll;
    overflow-y: hidden;
    width: 55%;
}
@media(max-width:768px){
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100vw;
    height:25vh ;
}
@media(max-width:425px){
    overflow-x: scroll;
    overflow-y: hidden;
    width: 25%;
    margin-top:20%;
    margin-left:3%;
    height: 32vh;
}

    
    
   
`
export const Articuloinf=styled.div`
-webkit-box-flex: 1;
    flex: 1;
    border-top: 1px solid;
    border-right: 1px solid;
    @media(max-width:2000px){
        -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-top: 1px solid;
    border-right: 1px solid;
    width: 0%;
  }
    @media(max-width:1440px){
        -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-top: 1px solid;
    border-right: 1px solid;
    width: 55%;
  }
  @media(max-width:1024px){
        -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-top: 1px solid;
    border-right: 1px solid;
    width: 40%;
  }
  @media(max-width:425px){
        -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-top: 1px solid;
    border-right: 1px solid;
    
    width: auto;
  }
  


`
export const Linkartinf=styled(Link)`
display: block;
    padding: 10px;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 90%;

    @media (max-width: 1500px) {
        display: block;
    padding: 10px;
    height: 35vh;
    box-sizing: border-box;
     padding-bottom: 90%;
  } 
  @media (max-width: 1024px) {
     
    height: 32vh;
    
  } 
  @media (max-width: 768px) {
       
    height: 28vh;
    width: 44vw;
   
  } 
  @media (max-width: 768px) {
     
    height: 66vh;
    width: 44vw;
    
  } 
  
`
export const Tituloart=styled.div`
font-size: 16px;
    color: #e44445;
    font-style: italic;
    margin-bottom: 10px;
`
export const Nombreart=styled.div`
font-size: 24px;
    font-weight: 700;
    @media (max-width: 1850px) {
        font-size: 21px;
  }
`
export const Irart=styled.svg`
width: 20px;
    height: 20px;
    border: 2px solid;
    border-radius: 100%;
    padding: 5px 4px 5px 6px;
`
export const ContEsc=styled.div`
display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    max-width: 1180px;
    
    margin-bottom: 5%;
   
    @media (max-width:1600px){
  margin-bottom: 15%;
    }
    @media (max-width:425px){
        margin-bottom:30%
    }


`


export const Cuerpo2=styled.div`
    flex: 0 0 774px;
    display: block;
    width: 40%;
    margin-top: 10%;

    @media(min-width:320px) and (max-width:374px){
        flex: 0 1 774px;
    }

    
   `



 

