import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Hero = styled.section`
    display: grid;
    width: 100%;
    height: auto;
    z-index: 15;
    .container-images{
        position: relative;
        z-index: 14;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 42vh 42vh;
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
        z-index: 30;
        top: 54%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: auto;
        color: #fff;
        overflow-y: hidden;
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
            font-size: 0.9rem;
            transition: transform 0.3s ease-in-out;
            &:hover{
                box-shadow: 0px 0px 10px #fff;
                text-shadow: 0px 0px 10px #fff; 
            }
        }
    }
    .modal{
        position: absolute;
        width: 100%;
        height: 84vh;
        background-color: #000;
        z-index: 20;
        top: 106px;
        opacity: 0.6;
    }
    @media (min-width: 720px){
        .container-images{
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 48vh 46vh;
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
            width: 500px;
            left: 40%;
            h3{
                line-height: 1.7;
                font-size: 1.9rem;
            }
            p{
                font-size: 1.1rem;
                margin-bottom: 70px;
                line-height: 2rem;
            }
            a{
                width: 200px;
                padding: 14px;
                font-size: 1.1rem
            }
            .content-desktop{
                display: none;
            }
        }
        .modal{
            height: 94vh;
        }
    }
    @media(min-width: 1024px){
        height: 90vh;
        .container-images {
            grid-template-columns: 100%;
            grid-template-rows: 1fr;
            img{
                height: 90vh;
                object-fit: cover;
                object-position: bottom center;
                &:nth-child(even), &:nth-child(1){
                    display: none;
                }
            }
        }
        .heroInfo{
            position: absolute;
            width: 100%;
            height: 90vh;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            h3{
                position: absolute;
                font-size: 1.6rem;
                width: 350px;
                top: 14%;
                left: 3%;    
                text-align: left;
                }
            .hero-content{
                display: none;
            }
            .content-desktop{
                display: block;
                position: absolute;
                width: 350px;
                top: 80%;
                right: 3%;
                z-index: 100;
                font-size: 1.6rem;
                text-transform: uppercase;
                line-height: 1.7;
                text-align: right;
            }  
            a{
                width: 250px;
                padding: 16px 0px;
                position: absolute;
                font-size: 1.7rem;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }  
        }
        .modal{
            height: 90vh;
        }
    }

`;
const HeroLanding = () => {
    const [dynamicImages, setDinamicImages] = useState([
        {
            imgUrl: '/img/menu/ensaladas2.jpg',
            imgAlt: 'Imagen de ensalada'
        },
        {
            imgUrl: '/img/menu/tostadas.jpg',
            imgAlt: 'Imagen de tostadas'
        },
        {
            imgUrl: '/img/menu/waffles.jpg',
            imgAlt: 'Imagen de waffle'
        },
        {
            imgUrl: '/img/menu/wrap2.jpg',
            imgAlt: 'Imagen de un burrito'
        },
        {
            imgUrl: '/img/menu/ensaladas.jpg',
            imgAlt: 'Imagen de ensalada'
        },
        {
            imgUrl: '/img/menu/smooties.jpg',
            imgAlt: 'Imagen de smothies'
        },
        {
            imgUrl: '/img/menu/wrap.jpg',
            imgAlt: 'Imagen de burrito'
        },
        {
            imgUrl: '/img/menu/yogurt.jpg',
            imgAlt: 'Imagen de yogurts'
        },
    ]);
    useEffect(() => {
        const temporizador = setInterval(() => {
            setDinamicImages(images => {
                const [first, ...all] = images;
                return [...all, first];
            });
        }, 3000);
        return () => clearInterval(temporizador);
    }, []);
    return <>
        <Hero>
            <div className="container-images">
                {
                    dynamicImages.slice(0, 4).map((element, index) => {
                        return <img key={index} src={element.imgUrl} alt={element.imgAlt} className="desktopImg" />
                    })
                }

            </div>
            <div className="heroInfo">
                <h3><span>Bendito verde:</span> donde lo saludable es irresistible</h3>
                <p className="hero-content">Descubre el equilibrio perfecto entre frescura, sabor y bienestar. En Bendito Verde, cada plato es una invitación de ti mientras disfrutas de lo mejor de la naturaleza.</p>
                <p className="content-desktop">Donde la frescura se encuentra en cada sabor</p>
                <Link to={'/contactanos'}>¡Reserva ya!</Link>
            </div>
            <div className="modal"></div>
        </Hero>
    </>;
};

export default HeroLanding;