import { Context } from "../../Context/nuestroequipocontext";
import { useContext } from "react";
import Empleado from "./Empleado";
import "./ListaEmpleados.css";
const ListaEmpleados = () => {

    const { empleados } = useContext(Context);
    return(
        <section className="contenedor-empleados">
            {empleados.map((emp)=>{
                return(
                    <Empleado nombre={emp.nombre} 
                    puesto={emp.puesto}
                    descripcion={emp.descripcion}
                    imgUrl={emp.imgUrl}/>
                )
            })}
        </section>
    )
}

export default ListaEmpleados;