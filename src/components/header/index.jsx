import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Context } from "../../Context/globalcontext"

const Cabecera = styled.header`
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    background-color: #9aa387;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px;    
    .logo{
        display: flex;
        flex-flow: nowrap row;
        .logo_circular{
            display: none;
            width: 84px;
            height: 62px;
            @media (min-width: 1024px) {
                display: block;   
            }
        }
        .logo_titulo{
            width: 102px;
            height: 86px;
        }
    }
    .content{
        label img{
            width: 62px;
            height: 62px;
            @media (min-width: 720px) {
                display: none;       
            }
        }
        input[type="checkbox"]{
            display: none;
            @media (min-width: 720px) {
                display: none;       
            }
        }
    }
    .enivarbtn{ 
        text-decoration: none;
        display: none;
        @media (min-width: 720px) {
            display: block;
        }
        button{
            padding: 8px;
            border-radius: 10px;
            @media (min-width: 720px) {
                display: flex;
                flex-flow: nowrap row;
                align-items: center;
                gap: 10px;
            }
            img{
                width: 30px;
                height: 30px;
            }
            p{
                @media (min-width: 720px) {
                    display: none;
                }
                @media (min-width: 1024px) {
                    display: block;  
                    font-size: 25px;
                    font-weight: 500; 
                }
            }
        }
    }
`

const Ul = styled.ul`
            display: ${props => (props.show ? 'flex' : 'none')};
            flex-flow: column;
            background-color: #A9B58B;
            position: fixed;
            top: 106px;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 0;
            @media (min-width: 720px) {
                display: flex;
                position: unset;
                flex-direction: row;
                border-radius: 30px;
            }
            li{
                padding: 20px 10px;
                border-bottom: 2px solid #111;
                transition: .5s ease-in-out;
                &:hover{
                    background-color: #9ba977;
                }
                @media (min-width: 720px) {
                    border: 0;
                    &:last-child{
                        display: none;
                    }
                }
                a{
                    font-size: 20px;
                    color: #111;
                    text-decoration: none;
                    font-weight: bold;
                    @media (min-width: 1024px) {
                        font-size: 25px;
                    }
                }
                .active{
                    color: #fff;
                }
            }
`

const Header = () => {

    const { navitems } = useContext(Context)

    const location = useLocation()

    const [labelchk, setlabelchk] = useState(false);

    return <Cabecera>
        <div className="logo">
            <img src="/img/logo.svg" alt="logo" className="logo_circular" />
            <img src="/img/titulo-big.svg" alt="Bendito Verde" className="logo_titulo" />
        </div>
        <div className="content">
            <label htmlFor="hamburger"><img src="/img/menu_hamburguesa.png" alt="hamburguesa" /></label>
            <input type="checkbox" id="hamburger" checked={labelchk} onChange={() => { setlabelchk(!labelchk)}} />
            <Ul show={labelchk}>
                {
                    navitems.map((item, index) => {
                        if (("/" + location.pathname.split("/")[1]) === item.url) {
                            return <>
                                <li><Link key={index} to={`${item.url}`} className="active">{item.label}</Link> </li>
                            </>
                        } else {
                            return <>
                                <li><Link key={index} to={`${item.url}`} className="">{item.label}</Link></li>
                            </>
                        }
                    })
                }
            </Ul>
        </div>
        <Link className="enivarbtn" to={"/contactanos"}><button><img src="/img/send.svg" alt="Enviar" /><p>Envía</p></button></Link>
    </Cabecera>
}

export default Header

