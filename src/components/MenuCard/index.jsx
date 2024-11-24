import styled from "styled-components"
import { Link } from "react-router-dom"

const Card = styled.div`
    width: 326px;
    height: 350px;
    background-color: #fefdf2;
    border-radius: 0.5rem;
    overflow: hidden;
    a{
        text-decoration: none;
        img{
            width: 326px;
            height: 300px;
            object-fit: cover;
            object-position: center;
        }
        div{
            height: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            h3{
                color: #88896a;
                font-size: 1.24rem;
            }
        }
    }
`

const MenuCard = ({items}) => {
    return <Card>
        <Link to={items.url}>
            <img src={items.img} alt={items.titulo} />
            <div>
                <h3>{items.titulo}</h3>
            </div>
        </Link>
    </Card>
}

export default MenuCard