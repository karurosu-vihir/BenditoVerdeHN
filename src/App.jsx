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
import Productos from "./pages/Menu/Productos"
import Page404 from "./pages/Page404"
import NuestrosProductos from "./pages/NuestrosProductos"




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
            <Route path="/nuestrosproductos" element={<NuestrosProductos/>}></Route>
            <Route path="/menu/:categoria" element={<Productos/>}></Route>
            <Route path="*" element={<Page404/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

