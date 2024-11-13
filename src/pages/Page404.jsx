import styled from "styled-components"

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
`

const H2 = styled.h2`
    color: #9aa387;
    font-size: 190px;
`

const P = styled.p`
    color: #A9B58B;
    font-size: 45px;
    font-weight: bold;
`

const Page404 = () => {
    return<Section>
        <H2>404</H2>
        <P>Esta pagina no existe</P>
    </Section>
} 

export default Page404