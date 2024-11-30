import { Outlet } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"
import styled from "styled-components"
import { ContextProvider } from "../Context/globalcontext"
import Loader from "../components/loader"

const Main = styled.main`

`

const PaginaBase = () => {
    return <>
        <ContextProvider>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer/>
            <Loader/>
        </ContextProvider>
    </>
}

export default PaginaBase
