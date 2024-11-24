import styled from "styled-components"
import ImgCard from "./ImgCard"

const Col = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    @media (min-width: 720px) {
        width: calc((100%/2) - 10px); 
    }
    @media (min-width: 1024px) {
        width: calc((100%/4) - 20px); 
    }
`

const Columns = ({imagenes}) => {
    return <>
        <Col>
            {
                imagenes.map((imagen, index)=>{
                    return <ImgCard key={index} img={imagen.img} />
                })
            }
        </Col>
    </>
}

export default Columns