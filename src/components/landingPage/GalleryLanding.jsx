import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerGallery = styled.section`
    width: 90%;
    height: auto;
    margin: 30px auto 50px auto;
    padding-bottom: 100px;
    position: relative;
    z-index: 16;
    h3{
        font-size: 1.3rem;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 20px;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        justify-items: center;
    }

    .grid img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border: 6px solid #fff;
    }
    .btnGaleria{
        width: 210px;
        padding: 12px;
        display: block;
        text-align: center;
        background-color: #9aa387;
        color: #fff;
        text-decoration: none;
        border-radius: 20px;
        position: absolute;
        top: 97%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 8px 0px;
    }  
    @media (min-width: 1024px){
        .btnGaleria{
            top: 94%;
        }
    }
`;

const GalleryLanding = () => {
    const galleryImages = [
        {
            imgURL: 'img/menu/bebidas.jpg',
            imgALT: 'Imagen de bebida'
        },
        {
            imgURL: 'img/menu/ensaladas.jpg',
            imgALT: 'Imagen de ensaladas'
        },
        {
            imgURL: 'img/menu/smooties.jpg',
            imgALT: 'Imagen de smothies'
        },
        {
            imgURL: 'img/menu/yogurt.jpg',
            imgALT: 'Imagen de Yogurt'
        },
        {
            imgURL: 'img/menu/waffles.jpg',
            imgALT: 'Imagen de waffles'
        },
        {
            imgURL: 'img/menu/wrap.jpg',
            imgALT: 'Imagen de wrap'
        },
        {
            imgURL: 'img/menu/ensaladas2.jpg',
            imgALT: 'Imagen de ensalada'
        },
        {
            imgURL: 'img/menu/tostadas.jpg',
            imgALT: 'Imagen de tostadas '
        },
    ];
    return <>
        <ContainerGallery>
            <h3>Visita Nuestra Galería</h3>
            <div className="grid">
                {
                    galleryImages.map((elemento, indice) => {
                        return <img src={elemento.imgURL} alt={elemento.imgALT} key={indice} />
                    })
                }
            </div>
            <Link className="btnGaleria" to={'/galeria'}>Explorar más</Link>
        </ContainerGallery>
    </>;
};

export default GalleryLanding;