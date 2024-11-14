import "./LargeCards.css"

const LargeCards = ()=>{

    return(
        <>
            <section className="CardContainer">
                <div className="LargeCard">
                    <img src="https://picsum.photos/id/765/1024/720" alt="imagen de la carta"/>
                    <div className="CardContent bgGreen">
                        <h2>Carlos Slim</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum quaerat facere ex. Consequuntur earum culpa quod quo eum numquam sequi, quam officia eligendi officiis?
                        </p>
                    </div>
                </div>
            </section>
        
        </>
    );

}

export default LargeCards;