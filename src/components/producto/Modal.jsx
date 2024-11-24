import styled from "styled-components"

const Container = styled.div`
    background-color: #9ba387;
    height: 300px;
    position: absolute;
    width: 300px;
    top: 0;
`
// Lineas sagradas(no toques): 10, 11, 12, 18, 19, 20, 22
// de la 17 solo ocupas el evento onclick y lo que lleva adentro
// Lo demas cambialo a tu gusto
const Modal = ({items, setmodal}) => {
    return <>
   <Container>
        <h3>{items.nombre}</h3>
        <p>{items.descripcion}</p> 
        <button onClick={()=>{setmodal(false)}}>cerrar</button>      
        </Container>
    </>
}

export default Modal