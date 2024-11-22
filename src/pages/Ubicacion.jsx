import HeroUbicacion from "../components/ubicacionHorarios/HeroUbicacion";
import Map from "../components/ubicacionHorarios/Map";
import Horario from "../components/ubicacionHorarios/Horario";
import styled from "styled-components";

const Main = styled.main`
  background: url("/img/fondo.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

const Ubicacion = () => {
  return (
    <>
      <HeroUbicacion />
      <Main>
        <Map />
        <Horario />
      </Main>
    </>
  );
};

export default Ubicacion;
