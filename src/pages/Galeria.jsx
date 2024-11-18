import styled from "styled-components";
import { Context } from "../Context/globalcontext";
import { useContext, useState, useEffect } from "react";
import BtnFlitro from "../components/galeria/BtnFiltro";
import ImgCard from "../components/galeria/ImgCard";

const Galery = styled.section`
    background: url('./img/fondo.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center; 
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
    gap: 4px;
`

const Filtros = styled.div`
    width: min-content;
    height: min-content;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    gap: 10px;
    background-color: #9aa387;
    border-radius: 0.5rem;
    position: fixed;
    bottom: 100px;
    right: calc(50vw - 150px);
    @media (min-width: 720px) {
        right: calc(50vw - 200px); 
    }
    z-index: 2;
`

const Galeria = () => {

    const [filtros, setfiltros] = useState('Comidas')
    const [imagenes, setimagenes] = useState([])

    const { filters, GaleriaImagenes } = useContext(Context)

    useEffect(() => {
        if (filtros === 'Comidas') {
            setimagenes(GaleriaImagenes.Comidas);
        } else if (filtros === 'Personas') {
            setimagenes(GaleriaImagenes.Personas);
        } else {
            setimagenes(GaleriaImagenes.Lugares);
        }
    }, [filtros]);

    return<>
        <Galery>
            {
                imagenes.map((imagen)=>{
                    return <ImgCard img={imagen.img}/>
                })
            }
        </Galery>
        <Filtros>
            {
                filters.map((filter)=>{
                    if(filter == filtros)
                        return <BtnFlitro setfiltros={setfiltros} active={true} lbl={filter}/>
                    else
                        return <BtnFlitro setfiltros={setfiltros} active={false} lbl={filter}/>
                })
            }
        </Filtros>
    </>
}

export default Galeria