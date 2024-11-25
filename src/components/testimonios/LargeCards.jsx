import "./LargeCards.css"

const LargeCards = () => {

    return (
        <>
            <section className="CardContainer">
                <div className="LargeCard">
                    <img src="https://picsum.photos/id/765/1024/720" alt="imagen de la carta" />
                    <div className="CardContent bgGreen">
                        <h2>Carlos Slim</h2>
                        <p>
                            Probar estos deliciosos platillos es de las mejores cosas de visitar la ciudad de los pinares.
                        </p>
                    </div>
                </div>
                <div className="LargeCard row-reverse">
                    <img src="https://picsum.photos/id/75/1024/720" alt="imagen de la carta" />
                    <div className="CardContent bgWhite">
                        <h2>Cooperativa Cacil</h2>
                        <p>
                            Realizar el brunch anual de iniciación en BenditoVerde fue de las mejores decisiones que pudimos tomar
                        </p>
                    </div>
                </div>
            </section>

        </>
    );

}

export default LargeCards;