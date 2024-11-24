import styled from "styled-components";
import { Context } from "../Context/globalcontext";
import { useContext, useState, useEffect } from "react";
import BtnFlitro from "../components/galeria/BtnFiltro";
import Columns from "../components/galeria/Columns";

const Galery = styled.section`
    background: url('./img/fondo.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center; 
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 1rem;
    gap: 10px;
    @media (min-width: 720px) {
        gap: 0;
    }
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
    const [colnum, setcolnum] = useState(4)

    const columns = [[], [], [], []];

    imagenes.forEach((image, index) => {
        columns[index % colnum].push(image);
    });

    const { filters, GaleriaImagenes } = useContext(Context)

    useEffect(() => {
        const min = window.matchMedia("(min-width: 720px)");
        const max = window.matchMedia("(max-width: 1023px)");

        const mediachange = () => {
            if (min.matches && max.matches) {
                setcolnum(2);
            } else {
                setcolnum(4);
            }
        };
        mediachange();
        window.addEventListener("resize", mediachange);
        return () => {
            window.removeEventListener("resize", mediachange);
        };
    }, []);

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
                columns.map((column,index)=>{
                    return <Columns key={index} imagenes={column}/>
                })
            }
        </Galery>
        <Filtros>
            {
                filters.map((filter, index)=>{
                    if(filter == filtros)
                        return <BtnFlitro key={index} setfiltros={setfiltros} active={true} lbl={filter}/>
                    else
                        return <BtnFlitro key={index} setfiltros={setfiltros} active={false} lbl={filter}/>
                })
            }
        </Filtros>
    </>
}

export default Galeria