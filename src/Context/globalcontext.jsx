import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [navitems, setnavitems] = useState([
        { label: 'Inicio', url: '/', where: '/' },
        { label: 'Menu', url: '/menu' },
        { label: 'Testimonios', url: '/testimonios' },
        { label: 'Nosotros', url: '/nosotros' },
        { label: 'Enviar', url: '/contactanos' },
    ])

    const menuitems = [
        { titulo: 'Ensaladas', url: '/menu/ensaladas', img: '/img/menu/ensaladas.jpg' },
        { titulo: 'Jugos cold-pressed', url: '/menu/jugos', img: '/img/menu/bebidas.jpg' },
        { titulo: 'Superfood Smoothies', url: '/menu/smoothies', img: '/img/menu/smooties.jpg' },
        { titulo: 'Toasts', url: '/menu/tostadas', img: '/img/menu/tostadas.jpg' },
        { titulo: 'Algo Ligero', url: '/menu/ligero', img: '/img/menu/yogurt.jpg' },
        { titulo: 'Más', url: '/menu/mas', img: '/img/menu/wrap.jpg' },
    ]

    const filters = ["Comidas", "Personas", "Lugares"];

    const GaleriaImagenes =
    {
        Comidas: [
            { img: '/img/menu/ensaladas.jpg' },
            { img: '/img/menu/ensaladas.jpg' },
            { img: '/img/menu/ensaladas.jpg' },
            { img: '/img/menu/ensaladas.jpg' },
            { img: '/img/menu/ensaladas.jpg' },
            { img: '/img/menu/ensaladas.jpg' },
            { img: '/img/menu/ensaladas.jpg' }
        ],
        Personas: [
            { img: 'https://picsum.photos/id/64/367/267' },
            { img: '/img/menu/bebidas.jpg' },
            { img: '/img/menu/bebidas.jpg' },
            { img: '/img/menu/bebidas.jpg' },
            { img: '/img/menu/bebidas.jpg' },
            { img: '/img/menu/bebidas.jpg' },
            { img: '/img/menu/bebidas.jpg' }
        ],
        Lugares: [
            { img: '/img/menu/tostadas.jpg' },
            { img: '/img/menu/tostadas.jpg' },
            { img: '/img/menu/tostadas.jpg' },
            { img: '/img/menu/tostadas.jpg' },
            { img: '/img/menu/tostadas.jpg' },
            { img: '/img/menu/tostadas.jpg' },
            { img: '/img/menu/tostadas.jpg' }
        ]
    }

    return (<Context.Provider value={{
        navitems, menuitems, filters, GaleriaImagenes
    }}>
        {children}
    </Context.Provider>
    )
}