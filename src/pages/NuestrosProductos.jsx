import styled from "styled-components";
import Hero from "../../src/components/Heroproductosnuestros.jsx/index";
import ProductGranola from "../../src/components/ProductGranola/index";

const Fondo = styled.div`
    background: url('./img/fondo.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center; 
`

const ProductosUnicos = () => {
    return <>
        <div>
            <Hero />
            <Fondo>
            <ProductGranola />
            </Fondo>
        </div>

    </>
}

export default ProductosUnicos