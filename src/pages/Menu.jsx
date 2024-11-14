import styled from "styled-components"
import MenuCard from "../components/MenuCard"
import { Context } from "../Context/globalcontext"
import { useContext } from "react"


const Container = styled.section`
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, 326px);
    justify-content: center;
    gap: 30px;
`

const Menu = () => {

    const { menuitems } = useContext(Context)

    return<Container>
        {
            menuitems.map((item,index)=>{
                return <MenuCard key={index} items={item} />
            })
        }
    </Container>
}

export default Menu