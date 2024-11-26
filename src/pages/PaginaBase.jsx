import { Outlet } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"
import styled from "styled-components"
import { ContextProvider } from "../Context/globalcontext"

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
        </ContextProvider>
    </>
}

export default PaginaBase
