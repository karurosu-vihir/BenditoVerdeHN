import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Context } from "../../Context/globalcontext"

const Container = styled.div`
    width: 300px;
    height: 500px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    background-color: #A9B58B;
    border-radius: 20px;
    `

const Content = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    h3{
        font-size: 20px;
        font-weight: bolder;
        padding: 0 10px;
        color: #FEFDF2;
        text-align: center;
    }
    p{
        font-size: 20px;
        font-weight: bolder;
        color: #FEFDF2;
    }
    button{
        width: 150px;
        border-radius: 1.5rem;
        padding: 0.5rem 0;
        background-color: #9ba387;
        color:#FEFDF2;
        border: #9ba387;
        font-weight: bold;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover{
            background-color: #3e4733;
        }
    }
`

const Imagen = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 20px 20px 0 0;
    }
`

const Cards = ({items, setModalitem, setmodal}) => {
    return<Container>
        <Imagen>
            <img src={items.img} alt={items.nombre} />
        </Imagen>
       <Content>
            <h3>{items.nombre}</h3>
            <p>{items.precio}</p>
            <button onClick={()=>{
                setModalitem(items);
                setmodal(true);
            }}>Ver Más</button>
        </Content> 
    </Container>
}

export default Cards