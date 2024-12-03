import "./SmallCards.css"
import { Context } from "../../Context/testimonioscontext";
import { useContext } from "react";

const SmallCards = () => {

    const { testimonios } = useContext(Context)
    return (
        <>
            <section className="smallCardContainer">
                {
                    testimonios.map((item, index) => {
                        return <>
                            <div className="smallCard">
                                <div className="smallCardHeader">
                                    <img src={`${item.imgSrc}`} alt="client picture" />
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>{item.username}</p>
                                    </div>
                                </div>

                                <div className="smallCardContent">
                                    <p>{item.opinion}</p>
                                </div>
                            </div>
                        </>
                    })

                }
            </section>

        </>
    )

}

export default SmallCards;