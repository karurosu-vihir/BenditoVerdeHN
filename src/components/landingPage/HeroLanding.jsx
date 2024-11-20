import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = styled.section`
    display; grid;
    width: 100%;
    height: 90vh;
    z-index: 1;
    .container-images{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 280px 280px;
        background-color: aqua;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            &:nth-child(odd){
                object-position: left bottom;
            }
            &:nth-child(even){
                object-position: right bottom;
            }
        }
    };
    .heroInfo{
        position: absolute;
        z-index: 3;
        top: 54%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: auto;
        color: #fff;
        h3{
            text-transform: uppercase;
            line-height: 1.7;
            font-size: 1.2rem;
            font-weight: 500;
            margin-bottom: 40px;
            text-align: justify;
            span{
                color: #C1CFA5
            }
        }
        p{
            font-size: 0.8rem;
            margin-bottom: 50px;
            line-height: 1.7rem;
            text-align: justify;
        }
        a{
            display: block;
            width: 150px;
            padding: 8px;
            color: #fff;
            border: 2px solid #fff;
            border-radius: 8px;
            text-align: center;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem
        }
    }
    .modal{
        position: absolute;
        width: 100%;
        height: 86vh;
        background-color: #000;
        z-index: 2;
        top: 16%;
        opacity: 0.5;
    }

`;
const HeroLanding = () => {
    return <>
        <Hero>
            <div className="container-images">
                <img src="/public/img/menu/ensaladas2.jpg" alt="Imagen de plato" />
                <img src="/public/img/menu/tostadas.jpg" alt="Imagen de plato" />
                <img src="/public/img/menu/waffles.jpg" alt="Imagen de plato" />
                <img src="/public/img/menu/wrap2.jpg" alt="Imagen de plato" />
            </div>
            <div className="heroInfo">
                <h3><span>Bendito verde:</span> donde lo saludable es irresistible</h3>
                <p>Descubre el equilibrio perfecto entre frescura, sabor y bienestar. En Bendito Verde, cada plato es una invitación de ti mientras disfrutas de lo mejor de la naturaleza.</p>
                <Link to={'/menu'}>¡Reserva ya!</Link>
            </div>
            <div className="modal"></div>
        </Hero>
    </>;
};

export default HeroLanding;