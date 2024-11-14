import styled from "styled-components"
import { Link } from "react-router-dom"

const Card = styled.div`
    width: 326px;
    height: 330px;
    background-color: #fefdf2;
    border-radius: 0.5rem;
    a{
        text-decoration: none;
        img{
            width: 326px;
            height: 290px;
            object-fit: cover;
            object-position: center;
        }
        h3{
            color: #88896a;
            font-size: 1.24rem;
            text-align: center;
        }
    }
`

const MenuCard = ({items}) => {
    return <Card>
        <Link to={items.url}>
            <img src={items.img} alt={items.titulo} />
            <h3>{items.titulo}</h3>
        </Link>
    </Card>
}

export default MenuCard