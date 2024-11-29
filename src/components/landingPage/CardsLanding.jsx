import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerCards = styled.section`
    width: 90%;
    height: auto;
    margin: 50px auto 50px auto;
    padding-bottom: 100px;
    position: relative;
    z-index: 18;
    h3{
        font-size: 1.3rem;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 20px;
    }
    .cards{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 20px;

        .card{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 300px;
            height: auto;
            margin: 0;
            img{
                width: 100%;
                height: 300px;
                object-fit: cover;
                border-radius: 4px;
            }

            p{
                font-weight: 500;
                margin: 12px 0;
            }
            a{
                display: block;
                padding: 2px 8px;
                text-decoration: none;
                color: #9AA387;
            }
        }
    }
    .btnMenu{
        width: 210px;
        padding: 14px;
        display: block;
        text-align: center;
        background-color: #9aa387;
        color: #fff;
        text-decoration: none;
        border-radius: 20px;
        position: absolute;
        top: 94%;
        left: 50%;
        transform: translate(-50%, -50%);
    }  
`;
const CardsLanding = () => {
    const cards = [
        {
            name: 'Wrap Sano Pecado',
            imgURL: 'img/menu/wrap2.jpg',
            link: '/menu'
        },
        {
            name: 'Avo Toast',
            imgURL: 'img/menu/tostadas.jpg',
            link: '/menu'
        },
    ];
    return <>
        <ContainerCards>
            <h3>Platillos Populares</h3>
            <div className="cards">
                {
                    cards.map((elemento, index) => {
                        return <div key={index} className="card">
                            <img src={elemento.imgURL} alt={elemento.name} />
                            <p>{elemento.name}</p>
                            <a href={elemento.link}>Ver detalle</a>
                        </div>
                    })
                }
            </div>
            <Link className="btnMenu" to={'/menu'}>Ver menú completo</Link>
        </ContainerCards>
    </>;
};

export default CardsLanding;