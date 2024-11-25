const Empleado = ({
    nombre="John",
    puesto="Puesto",
    descripcion="Experiencia, educación, trabajo del que se encarga",
    imgUrl="https://picsum.photos/id/24/150/150"
})=>{
    return(
        <div className="empleado">
            <span className="nombre">{nombre}</span>
            <span className="puesto">{puesto}</span>
            <p>{descripcion}</p>
            <img src={imgUrl} alt="Fotografía" />
        </div>
    )
}

export default Empleado;