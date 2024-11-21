import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PaginaBase from "./pages/PaginaBase"
import Inicio from "./pages/Inicio"
import Contactanos from "./pages/Contactanos"
import Galeria from "./pages/Galeria"
import Menu from "./pages/Menu"
import Nosotros from "./pages/Nosotros"
import NuestroEquipo from "./pages/NuestroEquipo"
import Testimonios from "./pages/Testimonios"
import Ubicacion from "./pages/Ubicacion"
import ProductosUnicos from "./pages/Menu/ProductosUnicos"
import Tostadas from "./pages/Menu/Tostadas"
import Page404 from "./pages/Page404"




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PaginaBase/>}>
            <Route index element={<Inicio/>}></Route>
            <Route path="/menu" element={<Menu/>}></Route>
            <Route path="/testimonios" element={<Testimonios/>}></Route>
            <Route path="/nosotros" element={<Nosotros/>}></Route>
            <Route path="/contactanos" element={<Contactanos/>}></Route>
            <Route path="/ubicacion" element={<Ubicacion/>}></Route>
            <Route path="/nuestroequipo" element={<NuestroEquipo/>}></Route>
            <Route path="/galeria" element={<Galeria/>}></Route>
            <Route path="/menu/productounico" element={<ProductosUnicos/>}></Route>
            <Route path="/menu/tostadas" element={<Tostadas/>}></Route>
            <Route path="*" element={<Page404/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

