import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Context } from "../../Context/globalcontext"
import Cards from "../../components/producto/Cards"
import Modal from "../../components/producto/Modal"

const MainContainer = styled.section`
    width: 100%;
    margin: 0;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    background: url('/img/fondo.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    align-items: center;
    h2{
        display: flex;
        justify-content: center;
        background-color: #FEFDF2;
        padding: 20px 0;
        text-align: center;
        width: 100%;
        .titulo{
            height: 70px;
        }
        @media (min-width: 720px) {
            width: 90%;
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
    const { categoria } = useParams() // sacar categoria de la url
    const { menuproductos } = useContext(Context) // sacar menu del contexto
    const [Categoriaproductos, setCategoriaproductos] = useState({}) // sacar los productos segun la categoria
    const nav = useNavigate() //instanciar el useNavigate para navegar
    const [verdad, setverdad] = useState(false) // Para saber si se muestra o no la pagina
    const [Modalitems, setModalitems] = useState(null) // Info al modal
    const [EstadoModal, setEstadoModal] = useState(false)

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
            { verdad && <>
                <MainContainer>
                    <h2><img className="titulo" src={Categoriaproductos.titulo} alt={Categoriaproductos.de} /></h2>
                    <CardsMenu>
                    {
                        Categoriaproductos.items.map((item, index)=>{
                            return <Cards key={index} items={item} setModalitem={setModalitems} setmodal={setEstadoModal}/>
                        })
                    }
                </CardsMenu>
                </MainContainer>
                { EstadoModal &&
                <Modal items={Modalitems} setmodal={setEstadoModal}/>
                }
            </>
            }
        </>
}

export default Productos