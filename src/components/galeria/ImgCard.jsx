import styled from "styled-components"

const IMG = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: center;
`

const ImgCard = ({img}) => {
    return <>
        <IMG src={img} alt={img.split("/")[3]}/>
    </>
}

export default ImgCard