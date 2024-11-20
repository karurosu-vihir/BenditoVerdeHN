import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Context } from "../../Context/globalcontext"
import Cards from "../../components/producto/Cards"

const MainContainer = styled.section`
    width: 90%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    h2{
        display: flex;
        justify-content: center;
        background-color: #FEFDF2;
        padding: 20px 0;
        text-align: center;
        img{
            width: 70%;
            height: 70px;
        }
    }
`

const CardsMenu = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    gap: 20px;
    justify-content: center;
`

const Productos = () => {
    const { categoria } = useParams()
    const { menuproductos } = useContext(Context)
    const [Categoriaproductos, setCategoriaproductos] = useState({})
    const nav = useNavigate()
    const [verdad, setverdad] = useState(false)

    useEffect(() => {
        let encontrado = false
        menuproductos.map((menuproducto)=>{
            if(categoria === menuproducto.de){
                encontrado = true
                setCategoriaproductos(menuproducto)
            }
        })

        setverdad(encontrado)

        if (!encontrado) {
            nav('/v')
        }
    }, [categoria, menuproductos, nav])

    return <>
            { verdad &&
            <MainContainer>
                <h2><img src={Categoriaproductos.titulo} alt={Categoriaproductos.de} /></h2>
                <CardsMenu>
                {
                    Categoriaproductos.items.map((item, index)=>{
                        return <Cards key={index} items={item}/>
                    })
                }
            </CardsMenu>
            </MainContainer>
            }
        </>
}

export default Productos