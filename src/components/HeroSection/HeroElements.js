// En este archivo JS primero importo los styles de styled- components

import styled from 'styled-components';

// Agrego lo que va a ser el contenedor de la Hero section
export const HeroContainer = styled.div`
        background: #0c0c0c;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
        height: 500px;
        position: relative;
        z-index: 1;
`;

// El background donde voy a poner el video
export const HeroBg = styled.div`
        position:absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
`;

