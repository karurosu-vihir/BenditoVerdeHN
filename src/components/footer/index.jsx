import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Context } from "../../Context/globalcontext"

const Pie = styled.footer`
    background-color: #9aa387;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 20px;
    position: relative;
    z-index: 1000;
    section{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        @media (min-width: 720px) {
            flex-direction: row;  
            justify-content: space-around; 
            gap: 20px;    
        }
    }
    h2{
        color: #fff;
        font-size: 18px;
        letter-spacing: 0em; 
        text-align: right;
        margin: 5px 0;
        @media (min-width: 720px) {
            text-align: center;    
        }
        @media (min-width: 1024px) {
            font-size: 30px;    
        }
    }
`

const Maindiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    div{
        display: flex;
        flex-direction: row;
        gap: 10px;
    h2{
        font-size: 21px;
        text-align: left;
        margin: 10px 0;
        @media (min-width: 1024px) {
            font-size: 28px;    
            }
        }
        input[type="checkbox"] {
            display: none;
            &:checked + label::after{
                content: "v";
            }
        }
        label{
            align-self: center;
            font-size: 21px;
            color: #fff;
            cursor: pointer;
            &::after{
                content: '>';
            }
            @media (min-width: 720px) {
                display: none;       
            }
        }
    }
`

const UL = styled.ul`
    flex-direction: ${props => ((props.flexflow === "row" )? 'row' : 'column')};
    flex-wrap: nowrap;
    gap: 10px;
    margin: 10px 0;
    padding: 0;
    display: ${props => (props.show ? 'flex' : 'none')};
    @media (min-width: 720px) {
        display: flex;       
    }
    @media (min-width: 1024px) {
        gap: ${props => ((props.flexflow === "row" )? '50px' : '10px')};   
    }
    li a{
        font-size: 15px;
        color: #fff;
        @media (min-width: 1024px) {
            font-size: 20px;    
        }
        img{
            width: 43px;
            height: 43px;
        }
    }
`

const Footer = () => {

    const location = useLocation()

    const [labelchk, setlabelchk] = useState({
        label1: false,
        label2: false,
        label3: false,
    });

    const toggle = (label) => {
        setlabelchk((prevState) => ({
          ...prevState,
          [label]: !prevState[label], // si estaba en false -> !false = true si estaba en true -> !true = false
        }));
      };

      useEffect(() => {
        setlabelchk({
            label1: false,
            label2: false,
            label3: false,
        });
      }, [location])

    return <Pie>
        <section>
            <Maindiv>
                <div>
                    <h2>QUIENES SOMOS</h2>
                    <input type="checkbox" id="check" checked={labelchk.label1} onChange={()=>{toggle('label1')}}/>
                        <label className="footer-dropdown" htmlFor="check"></label>
                </div>
                <UL show={labelchk.label1} flexflow={"column"}>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/ubicacion">Ubicación</Link></li>
                    <li><Link to="/ubicacion">Horarios</Link></li>
                </UL>
            </Maindiv>
            <Maindiv>
                <div>
                    <h2>ACERCA DE NOSOTROS</h2>
                    <input type="checkbox" id="check1" checked={labelchk.label2} onChange={()=>{toggle('label2')}}/>
                        <label className="footer-dropdown" htmlFor="check1"></label>
                </div>
                <UL show={labelchk.label2} flexflow={"column"}>
                    <li><Link to="/testimonios">Testimonios</Link></li>
                    <li><Link to="/contactanos">Contáctanos</Link></li>
                    <li><Link to="/nuestroequipo">Nuestro Equipo</Link></li>
                    <li><Link to="/galeria">Galería de Imágenes</Link></li>
                </UL>
            </Maindiv>
            <Maindiv>
                <div>
                    <h2>REDES SOCIALES</h2>
                    <input type="checkbox" id="check2" checked={labelchk.label3} onChange={()=>{toggle('label3')}}/>
                        <label className="footer-dropdown" htmlFor="check2"></label>
                </div>
                <UL show={(labelchk.label3)} flexflow={"row"}>
                    <li><Link to="https://www.facebook.com/" target="_blank"><img src="/img/facebook.svg" alt="facebook"/></Link></li>
                    <li><Link to="https://www.instagram.com/benditoverdehn/" target="_blank"><img src="/img/instagram.svg" alt="instagram"/></Link></li>
                    <li><Link to="https://www.whatsapp.com/?lang=es_LA" target="_blank"><img src="/img/whatsapp.svg" alt="whatsapp"/></Link></li>
                </UL>
            </Maindiv>
        </section>
        <h2>© 2024 Bendito Verde HN</h2>
    </Pie>
}

export default Footer