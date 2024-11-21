import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerGallery = styled.section`
    width: 90%;
    height: auto;
    margin: 30px auto 50px auto;
    padding-bottom: 100px;
    position: relative;

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
        padding: 14px;
        display: block;
        text-align: center;
        background-color: #9aa387;
        color: #fff;
        text-decoration: none;
        border-radius: 20px;
        position: absolute;
        top: 96%;
        left: 50%;
        transform: translate(-50%, -50%);
    }  
`;
const GalleryLanding = () => {
    return <>
        <ContainerGallery>
            <h3>Visita Nuestra Galería</h3>
            <div className="grid">
                <img src="/public/img/menu/bebidas.jpg" alt="Imagen de galeria" />
                <img src="/public/img/menu/ensaladas.jpg" alt="Imagen de galeria" />
                <img src="/public/img/menu/smooties.jpg" alt="Imagen de galeria" />
                <img src="/public/img/menu/yogurt.jpg" alt="Imagen de galeria" />
                <img src="/public/img/menu/waffles.jpg" alt="Imagen de galeria" />
                <img src="/public/img/menu/wrap.jpg" alt="Imagen de galeria" />
            </div>
            <Link className="btnGaleria" to={'/galeria'}>Explorar más</Link>
        </ContainerGallery>
    </>;
};

export default GalleryLanding;