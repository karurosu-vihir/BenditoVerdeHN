import "./HeroEquipo.css";

const HeroEquipo = ()=>{
    return(
        <section className="hero-panel">
            <div className="hero-content">
                <h1>Nuestro Equipo</h1>
                <p>
                    En Bendito Verde, cada miembro de nuestro equipo comparte una pasión por la comida y la hospitalidad.
                    Creemos que cada plato cuenta una historia y que una gran experiencia comienza con un equipo comprometido
                    con la excelencia y el servicio al cliente.
                </p>
            </div>
            <div className="hero-image">
                <img src="/img/nuestroequipo/cocina.jpg" alt="Cocina" />
            </div>
        </section>
    )
}

export default HeroEquipo;