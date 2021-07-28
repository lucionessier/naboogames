// En este index importo el video y los componentes de HeroElements

import React from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg } from './HeroElements';

// Esta va a ser la funcion creadora del HeroSection, con el Container, el HeroBg para el video y el video importado como {Video} previamente de su source, con los estilos correspondientes
const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <video autoPlay loop muted src={Video} type='video/mp4' style= {{
                            position: "absolute",
                            width: "100%",
                            left: "50%",
                            top: "50%",
                            height: "100%",
                            objectFit: "cover",
                            transform: "translate(-50%,-50%)",
                            zIndex: "-1"
                }}/>
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection;


