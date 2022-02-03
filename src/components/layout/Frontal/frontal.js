import React from "react";
import {Link, BrowserRouter as Router, Route, BrowserRouter, Switch} from "react-router-dom";
import{
    Col,
    Col2,
    Frontal1,
    Img,
    Img1,
    Foto,
    Container,
    Foto1,
    Articulo,
    Cuerpo,
    Indice,
    Artcontainer,
    Linkart,
    Headerart,
    Linkh2,
    Desc,
    Parrafo,
    Footerart,
    Footer1,
    Footer2,
    H3,
    H2,
    Fotoart,
    Ultracuerpo,
    Linkfront,
    Titulofront,
    Titular,
    Titular2,
    Linkfront2,
    Contitular,
    Titulofront2,
    LateralD,
    Aside1,
    PriH3,
    H3link,
    ContAs1,
    Miniatura,
    Textmini,
    H2textmini,
    Leermas,
    Imgaside,
    Escaparate,
    Intesc,
    Fondoimg,
    Fondo,
    Inferioresc,
    Superioresc,
    Superiorsub,
    Tituloesc,
    Linkesc,
    Textoesc,
    Artinf,
    Articuloinf,
    Linkartinf,
    Tituloart,
    Nombreart,
    ContEsc,
    Cuerpo2,
    Containerdef,
    Col3
} from "../Frontal/frontal.styles"
import hades from "../../../img/Hades.jpg";
import Kena from "../../../img/Kena.jpg";
import Metroid from "../../../img/Metroid.jpg";
import Elden from "../../../img/Elden.jpg";
import Podcast from "../../../img/Podcast.png";
import Steam from "../../../img/Steam.jpg";
import Pixel from "../../../img/Pixel.jpg";
import Primero from "../../../img/Primero.jpg";
import DE from "../../../img/DE.jpg";
import Analisis from "../../analisis/analisis";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Frontal =()=>{


        return(
            <>
            
            <Container>
             
                    <Header/>
                        <Frontal1>
                        <Col><Img1><Foto1 src={Elden} alt="icono web"/><Titular to="#">DFHDFHDHF</Titular></Img1>
                        
                        <Linkfront to="/analisis"><Titulofront> Elden Ring se retrasa hasta el 25 de febrero de 2022</Titulofront></Linkfront>
                        </Col>
                        
                        <Col2><Img><Foto src={Metroid} alt="icono web"/><Titular2 to="#">DFHDFHDHFrgdrg</Titular2></Img>
                        <Linkfront2 to="/analisis"><Contitular><Titulofront2> Podcast Reload: Programa 6, Temporada 13</Titulofront2></Contitular></Linkfront2>
                        
                        </Col2>



                        <Col2><Img><Foto src={Kena} alt="icono web"/><Titular2 to="#">DFHDFHDHFrgdrg</Titular2></Img>
                        <Linkfront2 to="#"><Contitular><Titulofront2> Podcast Reload: Programa 6, Temporada 13</Titulofront2></Contitular></Linkfront2>
                        </Col2>


                        <Col3><Img1><Foto1 src={Podcast} alt="icono web"/><Titular to="#">DFHDFHDHF</Titular></Img1>
                        <Linkfront to="#"><Titulofront>wejbgbsegsdbgkbsdg</Titulofront></Linkfront>
                        </Col3>
                        <Col><Img1><Foto1 src={Steam} alt="icono web"/><Titular to="#">DFHDFHDHF</Titular></Img1>
                        <Linkfront to="#"><Titulofront>wejbgbsegsdbgkbsdg</Titulofront></Linkfront>
                        </Col>
                        <Col3><Img1><Foto1 src={Pixel} alt="icono web"/><Titular to="#">DFHDFHDHF</Titular></Img1>
                        <Linkfront to="#"><Titulofront>wejbgbsegsdbgkbsdg</Titulofront></Linkfront>
                        </Col3>
                        </Frontal1>
                        
                        <Ultracuerpo>
                            
                <Cuerpo>
                    <Indice>
                        <Articulo>
                        <Fotoart src={hades} alt="icono web"/>
                        <Artcontainer>
                            <Linkart to="#">5</Linkart>
                            <Headerart>
                                <H3>También podrá seguirse por streaming</H3>
                                <H2><Linkh2 to="/analisis">El festival Fun & Serious celebrará una nueva edición presencial entre el 10 y el 11 de diciembre</Linkh2></H2>
                               
                                
                            </Headerart>
                            <Desc>
                                <Parrafo>El evento bilbaíno volverá en su XI edición con aforo limitado y una programación que se concentrará en las conferencias por encima de los actos de carácter presencial.</Parrafo>
                            </Desc>

                            <Footerart>
                                <Footer1>28 OCTUBRE 2021</Footer1>
                                <Footer2>por MARTA TRIVI</Footer2>

                            </Footerart>


                        </Artcontainer>
                        

                        </Articulo>
                        <Articulo>
                        <Fotoart src={hades} alt="icono web"/>
                        <Artcontainer>
                            <Linkart to="#">5</Linkart>
                            <Headerart>
                                <H3>También podrá seguirse por streaming</H3>
                                <H2><Linkh2 to="#">El festival Fun & Serious celebrará una nueva edición presencial entre el 10 y el 11 de diciembre</Linkh2></H2>
                            </Headerart>
                            <Desc>
                                <Parrafo>El evento bilbaíno volverá en su XI edición con aforo limitado y una programación que se concentrará en las conferencias por encima de los actos de carácter presencial.</Parrafo>
                            </Desc>

                            <Footerart>
                                <Footer1>28 OCTUBRE 2021</Footer1>
                                <Footer2>por MARTA TRIVI</Footer2>

                            </Footerart>


                        </Artcontainer>
                        

                        </Articulo>
                        <Articulo>
                        <Fotoart src={hades} alt="icono web"/>
                        <Artcontainer>
                            <Linkart to="#">5</Linkart>
                            <Headerart>
                                <H3>También podrá seguirse por streaming</H3>
                                <H2><Linkh2 to="#">El festival Fun & Serious celebrará una nueva edición presencial entre el 10 y el 11 de diciembre</Linkh2></H2>
                            </Headerart>
                            <Desc>
                                <Parrafo>El evento bilbaíno volverá en su XI edición con aforo limitado y una programación que se concentrará en las conferencias por encima de los actos de carácter presencial.</Parrafo>
                            </Desc>

                            <Footerart>
                                <Footer1>28 OCTUBRE 2021</Footer1>
                                <Footer2>por MARTA TRIVI</Footer2>

                            </Footerart>


                        </Artcontainer>
                        

                        </Articulo>
                        <Articulo>
                        <Fotoart src={hades} alt="icono web"/>
                        <Artcontainer>
                            <Linkart to="#">5</Linkart>
                            <Headerart>
                                <H3>También podrá seguirse por streaming</H3>
                                <H2><Linkh2 to="#">El festival Fun & Serious celebrará una nueva edición presencial entre el 10 y el 11 de diciembre</Linkh2></H2>
                            </Headerart>
                            <Desc>
                                <Parrafo>El evento bilbaíno volverá en su XI edición con aforo limitado y una programación que se concentrará en las conferencias por encima de los actos de carácter presencial.</Parrafo>
                            </Desc>

                            <Footerart>
                                <Footer1>28 OCTUBRE 2021</Footer1>
                                <Footer2>por MARTA TRIVI</Footer2>

                            </Footerart>


                        </Artcontainer>
                        

                        </Articulo>
                        <Articulo>
                        <Fotoart src={hades} alt="icono web"/>
                        <Artcontainer>
                            <Linkart to="#">5</Linkart>
                            <Headerart>
                                <H3>También podrá seguirse por streaming</H3>
                                <H2><Linkh2 to="#">El festival Fun & Serious celebrará una nueva edición presencial entre el 10 y el 11 de diciembre</Linkh2></H2>
                            </Headerart>
                            <Desc>
                                <Parrafo>El evento bilbaíno volverá en su XI edición con aforo limitado y una programación que se concentrará en las conferencias por encima de los actos de carácter presencial.</Parrafo>
                            </Desc>

                            <Footerart>
                                <Footer1>28 OCTUBRE 2021</Footer1>
                                <Footer2>por MARTA TRIVI</Footer2>

                            </Footerart>


                        </Artcontainer>
                        

                        </Articulo>
                        


                    </Indice>


                   

                    

                </Cuerpo>
                 <LateralD>
                        <Aside1>

                            <PriH3>
                                <H3link>Analisis</H3link>
                            </PriH3>

                            <ContAs1>
                                <Miniatura><Imgaside src={Primero} /></Miniatura>
                                <Textmini>

                                    <H2textmini>Analisis The good life</H2textmini>

                                </Textmini>
                            </ContAs1>

                        </Aside1>


                         <Aside1>

                           

                            <ContAs1>
                                <Miniatura><Imgaside src={Primero} /></Miniatura>
                                <Textmini>

                                    <H2textmini>Analisis The good life</H2textmini>

                                </Textmini>
                            </ContAs1>

                        </Aside1>

                      



                         <Aside1>

                           

                            <ContAs1>
                                <Miniatura><Imgaside src={Primero} /></Miniatura>
                                <Textmini>

                                    <H2textmini>Analisis The good life</H2textmini>

                                </Textmini>
                            </ContAs1>

                        </Aside1>
                         <Aside1>

                         

                            <ContAs1>
                                <Miniatura><Imgaside src={Primero} /></Miniatura>
                                <Textmini>

                                    <H2textmini>Analisis The good life</H2textmini>

                                </Textmini>
                            </ContAs1>

                        </Aside1>
                         <Aside1>

                            

                            <ContAs1>
                                <Miniatura><Imgaside src={Primero} /></Miniatura>
                                <Textmini>

                                    <H2textmini>Analisis The good life</H2textmini>

                                </Textmini>
                            </ContAs1>

                        </Aside1>

                        <Leermas>Ver más analisis</Leermas>

                    </LateralD>






                  



                    
                </Ultracuerpo>


                        
                        <ContEsc>
                        <Escaparate>

<Intesc>

    <Fondo>
        <Fondoimg src={DE}/>
    </Fondo>

    <Inferioresc>

        <Superioresc>
            <Superiorsub>ghkhgk</Superiorsub>
            <Tituloesc><Linkesc>ghkghkghkghkghk</Linkesc></Tituloesc>
            <Textoesc>fgjgfjgjtjgyninitnitnint</Textoesc>
        </Superioresc>


        <Artinf>
            <Articuloinf>
                <Linkartinf to="#">
                    <Tituloart >jntjfgjfgj</Tituloart>
                    <Nombreart>fgjgfjgfjfggfjgjgf</Nombreart>
                </Linkartinf>
            </Articuloinf>
            <Articuloinf>
                <Linkartinf to="#">
                    <Tituloart>jntjfgjfgj</Tituloart>
                    <Nombreart>fgjgfjgfjfggfjgjgf</Nombreart>
                </Linkartinf>
            </Articuloinf>
            <Articuloinf>
                <Linkartinf to="#">
                    <Tituloart>jntjfgjfgj</Tituloart>
                    <Nombreart>fgjgfjgfjfggfjgjgf</Nombreart>
                </Linkartinf>
            </Articuloinf>
            <Articuloinf>
                <Linkartinf to="#">
                    <Tituloart>jntjfgjfgj</Tituloart>
                    <Nombreart>fgjgfjgfjfggfjgjgf</Nombreart>
                </Linkartinf>
            </Articuloinf>
            <Articuloinf>
                <Linkartinf to="#">
                    <Tituloart>jntjfgjfgj</Tituloart>
                    <Nombreart>fgjgfjgfjfggfjgjgf</Nombreart>
                </Linkartinf>
            </Articuloinf>
            <Articuloinf>
                <Linkartinf to="#">
                    <Tituloart>jntjfgjfgj</Tituloart>
                    <Nombreart>fgjgfjgfjfggfjgjgf</Nombreart>
                </Linkartinf>
            </Articuloinf>
            <Articuloinf>
                <Linkartinf to="#">
                    <Tituloart>jntjfgjfgj</Tituloart>
                    <Nombreart>fgjgfjgfjfggfjgjgf</Nombreart>
                </Linkartinf>
            </Articuloinf>

        </Artinf>
    </Inferioresc>

</Intesc>


</Escaparate>
</ContEsc>
<Ultracuerpo>


<Cuerpo2>
                    <Indice>
                        <Articulo>
                        <Fotoart src={hades} alt="icono web"/>
                        <Artcontainer>
                            <Linkart to="#">5</Linkart>
                            <Headerart>
                                <H3>También podrá seguirse por streaming</H3>
                                <H2><Linkh2 to="#">El festival Fun & Serious celebrará una nueva edición presencial entre el 10 y el 11 de diciembre</Linkh2></H2>
                            </Headerart>
                            <Desc>
                                <Parrafo>El evento bilbaíno volverá en su XI edición con aforo limitado y una programación que se concentrará en las conferencias por encima de los actos de carácter presencial.</Parrafo>
                            </Desc>

                            <Footerart>
                                <Footer1>28 OCTUBRE 2021</Footer1>
                                <Footer2>por MARTA TRIVI</Footer2>

                            </Footerart>


                        </Artcontainer>
                        

                        </Articulo>
                        <Articulo>
                        <Fotoart src={hades} alt="icono web"/>
                        <Artcontainer>
                            <Linkart to="#">5</Linkart>
                            <Headerart>
                                <H3>También podrá seguirse por streaming</H3>
                                <H2><Linkh2 to="#">El festival Fun & Serious celebrará una nueva edición presencial entre el 10 y el 11 de diciembre</Linkh2></H2>
                            </Headerart>
                            <Desc>
                                <Parrafo>El evento bilbaíno volverá en su XI edición con aforo limitado y una programación que se concentrará en las conferencias por encima de los actos de carácter presencial.</Parrafo>
                            </Desc>

                            <Footerart>
                                <Footer1>28 OCTUBRE 2021</Footer1>
                                <Footer2>por MARTA TRIVI</Footer2>

                            </Footerart>


                        </Artcontainer>
                        

                        </Articulo>
                        <Articulo>
                        <Fotoart src={hades} alt="icono web"/>
                        <Artcontainer>
                            <Linkart to="#">5</Linkart>
                            <Headerart>
                                <H3>También podrá seguirse por streaming</H3>
                                <H2><Linkh2 to="#">El festival Fun & Serious celebrará una nueva edición presencial entre el 10 y el 11 de diciembre</Linkh2></H2>
                            </Headerart>
                            <Desc>
                                <Parrafo>El evento bilbaíno volverá en su XI edición con aforo limitado y una programación que se concentrará en las conferencias por encima de los actos de carácter presencial.</Parrafo>
                            </Desc>

                            <Footerart>
                                <Footer1>28 OCTUBRE 2021</Footer1>
                                <Footer2>por MARTA TRIVI</Footer2>

                            </Footerart>


                        </Artcontainer>
                        

                        </Articulo>
                        <Articulo>
                        <Fotoart src={hades} alt="icono web"/>
                        <Artcontainer>
                            <Linkart to="#">5</Linkart>
                            <Headerart>
                                <H3>También podrá seguirse por streaming</H3>
                                <H2><Linkh2 to="#">El festival Fun & Serious celebrará una nueva edición presencial entre el 10 y el 11 de diciembre</Linkh2></H2>
                            </Headerart>
                            <Desc>
                                <Parrafo>El evento bilbaíno volverá en su XI edición con aforo limitado y una programación que se concentrará en las conferencias por encima de los actos de carácter presencial.</Parrafo>
                            </Desc>

                            <Footerart>
                                <Footer1>28 OCTUBRE 2021</Footer1>
                                <Footer2>por MARTA TRIVI</Footer2>

                            </Footerart>


                        </Artcontainer>
                        

                        </Articulo>
                        <Articulo>
                        <Fotoart src={hades} alt="icono web"/>
                        <Artcontainer>
                            <Linkart to="#">5</Linkart>
                            <Headerart>
                                <H3>También podrá seguirse por streaming</H3>
                                <H2><Linkh2 to="#">El festival Fun & Serious celebrará una nueva edición presencial entre el 10 y el 11 de diciembre</Linkh2></H2>
                            </Headerart>
                            <Desc>
                                <Parrafo>El evento bilbaíno volverá en su XI edición con aforo limitado y una programación que se concentrará en las conferencias por encima de los actos de carácter presencial.</Parrafo>
                            </Desc>

                            <Footerart>
                                <Footer1>28 OCTUBRE 2021</Footer1>
                                <Footer2>por MARTA TRIVI</Footer2>

                            </Footerart>


                        </Artcontainer>
                        

                        </Articulo>
                        <Articulo>
                        <Fotoart src={hades} alt="icono web"/>
                        <Artcontainer>
                            <Linkart to="#">5</Linkart>
                            <Headerart>
                                <H3>También podrá seguirse por streaming</H3>
                                <H2><Linkh2 to="#">El festival Fun & Serious celebrará una nueva edición presencial entre el 10 y el 11 de diciembre</Linkh2></H2>
                            </Headerart>
                            <Desc>
                                <Parrafo>El evento bilbaíno volverá en su XI edición con aforo limitado y una programación que se concentrará en las conferencias por encima de los actos de carácter presencial.</Parrafo>
                            </Desc>

                            <Footerart>
                                <Footer1>28 OCTUBRE 2021</Footer1>
                                <Footer2>por MARTA TRIVI</Footer2>

                            </Footerart>


                        </Artcontainer>
                        

                        </Articulo> 
                        <Articulo>
                        <Fotoart src={hades} alt="icono web"/>
                        <Artcontainer>
                            <Linkart to="#">5</Linkart>
                            <Headerart>
                                <H3>También podrá seguirse por streaming</H3>
                                <H2><Linkh2 to="#">El festival Fun & Serious celebrará una nueva edición presencial entre el 10 y el 11 de diciembre</Linkh2></H2>
                            </Headerart>
                            <Desc>
                                <Parrafo>El evento bilbaíno volverá en su XI edición con aforo limitado y una programación que se concentrará en las conferencias por encima de los actos de carácter presencial.</Parrafo>
                            </Desc>

                            <Footerart>
                                <Footer1>28 OCTUBRE 2021</Footer1>
                                <Footer2>por MARTA TRIVI</Footer2>

                            </Footerart>


                        </Artcontainer>
                        

                        </Articulo>
                        <Articulo>
                        <Fotoart src={hades} alt="icono web"/>
                        <Artcontainer>
                            <Linkart to="#">5</Linkart>
                            <Headerart>
                                <H3>También podrá seguirse por streaming</H3>
                                <H2><Linkh2 to="#">El festival Fun & Serious celebrará una nueva edición presencial entre el 10 y el 11 de diciembre</Linkh2></H2>
                            </Headerart>
                            <Desc>
                                <Parrafo>El evento bilbaíno volverá en su XI edición con aforo limitado y una programación que se concentrará en las conferencias por encima de los actos de carácter presencial.</Parrafo>
                            </Desc>

                            <Footerart>
                                <Footer1>28 OCTUBRE 2021</Footer1>
                                <Footer2>por MARTA TRIVI</Footer2>

                            </Footerart>


                        </Artcontainer>
                        

                        </Articulo> 


                    </Indice>


                   

                    

                </Cuerpo2>











                        </Ultracuerpo>



<Footer/>
                    
</Container>






            </>

        );

};


export default Frontal;