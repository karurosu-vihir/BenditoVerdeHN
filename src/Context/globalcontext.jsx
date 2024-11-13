import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {

        const [navitems, setnavitems] = useState([
            {label: 'Inicio', url: '/', where:'/'},
            {label: 'Menu', url: '/menu'},
            {label: 'Testimonios', url: '/testimonios'},
            {label: 'Nosotros', url: '/nosotros'},
            {label: 'Enviar', url: '/contactanos'},
        ])

    return (<Context.Provider value={{
        navitems
    }}>
        {children}
    </Context.Provider>
    )
}