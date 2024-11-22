import Hero from "../components/landingPage/HeroLanding"
import CardsLanding from "../components/landingPage/CardsLanding";
import GalleryLanding from "../components/landingPage/GalleryLanding";
import styled from "styled-components";

const BackgroundGreen = styled.div`
    position: fixed;
    z-index: 1;
    background-color: #CAD6B0;
    width: 50%;
    height: 100%;
    right: 0;
`;
const BackgroundBeige = styled.div`
position: fixed;
    z-index: 2;
    width: 50%;
    height: 100%;
    background-color: #FEFDF2;
`;

const Inicio = () => {
    return <>
        <BackgroundBeige></BackgroundBeige>
        <BackgroundGreen></BackgroundGreen>
        <Hero></Hero>
        <CardsLanding></CardsLanding>
        <GalleryLanding></GalleryLanding>
    </>

}

export default Inicio;