import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
const Carga = styled.header`
    .cargando{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 1000;
}

.cargando img{
    position: absolute;
}

.cargando img:nth-child(1){
    animation: cargando 4s linear infinite;
    z-index: 10000;
    width: 300px;
    height: 300px;
}

.cargando img:nth-child(2){
    width: 100px;
    height: 100px;
}

@keyframes cargando {
    0%{
        transform: rotate(0deg);
    }    
    100%{
        transform: rotate(360deg);
    }
}
`
const Loader=()=>{
    //const [location,setLocation]=useState(null);
    const [visible,setVisible]=useState("flex");
    const [opacidad,setOpacidad]=useState(1);
    const [transicion,setTransicion]=useState("opacity 2s ease-in-out");
    const location = useLocation();


    useEffect(()=>{
        setVisible("flex");
        setOpacidad(1);
        setTransicion("opacity 1.5s ease-in-out");
        console.log(location.pathname);
        console.log("???");
        
    },[location]);

    useEffect(()=>{
        const timeout1 = setTimeout(() => {
            setOpacidad(0);
            const timeout2 = setTimeout(() => {
              setVisible("none");
              setTransicion("none");
            }, 1500);
            return () => clearTimeout(timeout2);
          }, 1500);
      
          return () => clearTimeout(timeout1);
    },[transicion]);

    
    return(<Carga>
        <aside>
            <div class="cargando" style={{display:visible,opacity:opacidad,transition:transicion}}>
                <img src="/img/leaves.svg" alt="Cargando" />
                <img src="/img/logo.svg" alt="" />
            </div>

        </aside>
        </Carga>
    )
}

export default Loader;