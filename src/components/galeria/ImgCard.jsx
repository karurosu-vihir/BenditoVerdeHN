import styled from "styled-components"

const IMG = styled.img`
    width: 300px;
    max-width: 300px;
    height: 400px;
    max-height: 70vh;
    aspect-ratio: 4/3;
    object-fit: cover;
`

const ImgCard = ({img}) => {
    return <>
        <IMG src={img} alt={img.split("/")[3]}/>
    </>
}

export default ImgCard