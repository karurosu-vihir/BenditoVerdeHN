import styled from "styled-components"

const Btn = styled.button`
 background-color: transparent;
 border: none;
`

const H3 = styled.h3`
    font-size: 15px;
    @media (min-width: 720px) {
        font-size: 20px;
    }
    color: ${props => (props.show ? '#FFF' : '#000')};
`

const BtnFlitro = ({active, lbl, setfiltros}) => {
    return <>
        <Btn onClick={()=>{setfiltros(lbl)}}>
            <H3 show={active}>{lbl}</H3>
        </Btn>
    </>
}

export default BtnFlitro