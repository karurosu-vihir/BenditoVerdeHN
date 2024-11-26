import Empleado from "../components/NuestroEquipo/Empleado"
import HeroEquipo from "../components/NuestroEquipo/HeroEquipo"
import ListaEmpleados from "../components/NuestroEquipo/ListaEmpleados"
import { ContextProvider } from "../Context/nuestroequipocontext"
const NuestroEquipo = () => {
    return<>
    <HeroEquipo />
        <ContextProvider>
            
            <ListaEmpleados />
        </ContextProvider>
    </>
}

export default NuestroEquipo