import styled from "styled-components";
// import Elden from "../../../img/Elden.jpg";
// import Elden from "../../img/Elden.jpg"


export const Cont=styled.div`
width: 100%;
min-width:375px;



`
// export const Video=styled.video`

// width: 100%;
//     height: 105vh;
//     margin: auto;

// `

export const Container=styled.div`
/* text-align: center; */
margin: auto;
@media(max-width:2000px){
    width: 55%;
    /* margin: auto; */
}
@media(max-width:1024px){
    width: 70%;
    /* margin: auto; */
} 
@media(max-width:768px){
    width: 80%;
    /* margin: auto; */
}

    
`

export const Img=styled.img`
width: 80%;
margin-left:10%;

`

export const Parrafo=styled.p`
@media(max-width:768px){
    font-size: 1.2em;
    line-height: 35px;
}
@media(max-width:425px){
    font-size: 1.1em;
    line-height: 30px;
}
    font-size: 1.3em;
    line-height: 35px;
`
// export const Header=styled.div`
// background-image: url(${Elden});


// `

export const Headerart=styled.div`

color: #9b9b9b;
    /* display: -webkit-box; */
    display: flex;
    font-size: 14px;
    /* -webkit-box-pack: justify; */
    /* justify-content: space-between; */
    justify-content: normal;
    /* text-transform: uppercase; */
    /* @media(min-width:0px) and (max-width:625px){
       
    display: none;
  } */
`
// export const prueba=styled.div`
//    width: 75%;
//     margin: auto;
//     height: 80vh;
//     marginLeft:12.5%;
//     // margin: "auto",
//     @media(max-width:768px){
//         width: 75%;
//         margin: auto auto auto 12.5%;
//         height: 40vh;
//     }


// `
