import HeroTestimonios from "../components/testimonios/HeroTestimonios"
import LargeCards from "../components/testimonios/LargeCards"
import SmallCards from "../components/testimonios/SmallCards"
import { ContextProvider } from "../Context/testimonioscontext"

const Testimonios = () => {
    return <>

        <HeroTestimonios />
        <LargeCards />
        <ContextProvider>
            <SmallCards />
        </ContextProvider>
    </>
}

export default Testimonios