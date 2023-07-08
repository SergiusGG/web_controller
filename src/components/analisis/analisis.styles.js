import styled from "styled-components";



export const Cont=styled.div`
width: 100%;
min-width:375px;



`

export const Container=styled.div`
margin: auto;

@media(min-width:0px){
    width: 80%;
}
@media(min-width:768px){
    width: 70%;
} 
@media(min-width:1024px){
    width: 55%;
}
width:55% ;


/* @media(max-width:2000px){
    width: 55%;
}
@media(max-width:1024px){
    width: 70%;
} 
@media(max-width:768px){
    width: 80%;
} */

    
`

export const Img=styled.img`
width: 80%;
margin-left:10%;

`

export const Parrafo=styled.p`
@media(min-width:0px){
    font-size: 1.1em;
    line-height: 30px;
}
@media(min-width:425px){
    font-size: 1.2em;
    line-height: 35px;
}
@media(min-width:768px){
    font-size: 1.3em;
    line-height: 35px;
}


    /* font-size: 1.3em;
    line-height: 35px; */
`


export const Headerart=styled.div`

color: #9b9b9b;
    display: flex;
    font-size: 14px;
 
    justify-content: normal;
 
`


