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
        { titulo: 'Jugos cold-pressed', url: '/menu/jugos', img: '/img/menu/jugos.jpg' },
        { titulo: 'Superfood Smoothies', url: '/menu/smoothies', img: '/img/menu/smooties.jpg' },
        { titulo: 'Toasts', url: '/menu/tostadas', img: '/img/menu/tostadas.jpg' },
        { titulo: 'Algo Ligero', url: '/menu/ligero', img: '/img/menu/yogurt.jpg' },
        { titulo: 'Más', url: '/menu/mas', img: '/img/menu/wrap.jpg' },
    ]

    const filters = ["Comidas", "Personas", "Lugares"];

    const GaleriaImagenes =
    {
        Comidas: [
            { img: '/img/productos/ohcherry.jpg' },
            { img: '/img/galeria/Galeria1_comida.jpg' },
            { img: '/img/galeria/Galeria2_comida.jpg' },
            { img: '/img/galeria/Galeria3_Comida.jpg' },
            { img: '/img/galeria/Galeria4_comida.jpg' },
            { img: '/img/galeria/Galeria5_comida.jpg' },
            { img: '/img/galeria/Galeria6_comida.jpg' },
            { img: '/img/galeria/Galeria7_comida.jpg' },
            { img: '/img/galeria/Galeria8_comida.jpg' },
            { img: '/img/galeria/Galeria9_comida.jpg' },
            { img: '/img/galeria/Galeria10_comida.jpg' },
            { img: '/img/galeria/Galeria11_comida.jpg' },
            { img: '/img/galeria/Galeria12_comida.jpg' },
            { img: '/img/galeria/Galeria13_comida.jpg' },
            { img: '/img/galeria/Galeria14_comida.jpg' },
            { img: '/img/galeria/Galeria15_comida.jpg' },
            { img: '/img/galeria/Galeria16_comida.jpg' },
            { img: '/img/galeria/Galeria17_comida.jpg' },
            { img: '/img/galeria/Galeria18_comida.jpg' },
            { img: '/img/galeria/Galeria19_comida.jpg' },
            { img: '/img/galeria/Galeria20_comida.jpg' },
            { img: '/img/menu/bebidas.jpg' },
            { img: '/img/galeria/Galeria10_comida.jpg' },
        ],
        Personas: [
            { img: '/img/galeria/Galeria2_personas.jpg' },
            { img: '/img/galeria/placeholder_300px.jpg' },
            { img: '/img/galeria/Galeria3_personas.jpg' },
            { img: '/img/galeria/placeholder_600px.jpg' },
            { img: '/img/galeria/placeholder_400px.jpg' },
            { img: '/img/galeria/Galeria4_personas.jpg' },
            { img: '/img/galeria/placeholder_400px.jpg' },
            { img: '/img/galeria/Galeria1_personas.JPG' },
        ],
        Lugares: [
            { img: '/img/galeria/Galeria1_lugares.JPG' },
            {"img": "/img/galeria/placeholder_600px.jpg"},
            {"img": "/img/galeria/placeholder_400px.jpg"},
            {"img": "/img/galeria/placeholder_600px.jpg"},
            {"img": "/img/galeria/placeholder_300px.jpg"},
            {"img": "/img/galeria/placeholder_600px.jpg"},
            {"img": "/img/galeria/placeholder_300px.jpg"},
            {"img": "/img/galeria/placeholder_600px.jpg"},
            {"img": "/img/galeria/placeholder_600px.jpg"},
            {"img": "/img/galeria/placeholder_400px.jpg"},
            {"img": "/img/galeria/placeholder_400px.jpg"}
        ]
    }

    const menuproductos = [{
        de:"jugos",
        titulo: "/img/productos/titulos/juices.svg",
        items: [
            {
                "nombre": "BENDITO VERDE",
                "precio": "L 130.00",
                "descripcion": "Manzana verde, espinaca, apio, pepino, jengibre & limón. Alcalinizador, oxigenante, depurativo y detoxificador.",
                "img":"/img/productos/bendito.jpg"
            },
            {
                "nombre": "CIELITO LINDO",
                "precio": "L 130.00",
                "descripcion": "Zanahoria, manzana verde, jengibre & limón. Rejuvenece la piel, mejora la visión, descongestionante.",
                "img":"/img/productos/lindo.JPG"
            },
            {
                "nombre": "AM",
                "precio": "L 130.00",
                "descripcion": "Piña, jengibre, apio, pepino & limón. Diurético natural, hidratante, protector y energético.",
                "img":"/img/productos/AM.jpg"
            },
            {
                "nombre": "RAMBO JUNGLE",
                "precio": "L 130.00",
                "descripcion": "Espinaca, piña, apio, manzana verde, jengibre & limón. Inmunizador energético.",
                "img":"/img/productos/rambo.JPG"
            },
            {
                "nombre": "UNBEETABLE",
                "precio": "L 130.00",
                "descripcion": "Zanahoria, manzana verde, remolacha, pepino, jengibre & limón. Poder antioxidante, alcalinizador, regenerador y desintoxicante.",
                "img":"/img/productos/UNBEETABLE.JPG"
            },
        ]
        },
        {
            de:"smoothies",
            titulo: "/img/productos/titulos/smoothies.svg",
            items: [
                {
                    "nombre": "BERRY HAPPY",
                    "precio": "L 175.00",
                    "descripcion": "Leche de coco, proteína sabor vainilla, fresas, arándanos y miel de abeja.",
                    "img":"/img/galeria/placeholder_600px.jpg"
                },
                {
                    "nombre": "VOLCANIC GLOW",
                    "precio": "L 170.00",
                    "descripcion": "Leche de almendra sin azúcar, proteína sabor vainilla, arándanos, banano, espinaca y crema de cacahuate.",
                    "img":"/img/galeria/placeholder_600px.jpg"
                },
                {
                    "nombre": "BANANA SPLIT",
                    "precio": "L 170.00",
                    "descripcion": "Leche de almendra sin azúcar, proteína sabor vainilla o chocolate, banano, crema de cacahuate, bendito verde, dátil y canela.",
                    "img":"/img/galeria/placeholder_600px.jpg"
                },
                {
                    "nombre": "PIÑA COLADA",
                    "precio": "L 160.00",
                    "descripcion": "Leche de coco, piña, proteína sabor vainilla y coco rallado.",
                    "img":"/img/galeria/placeholder_600px.jpg"
                }
            ]
        },
        {
            de:"tostadas",
            titulo: "/img/productos/titulos/toasts.svg",
            items: [
                {
                    "nombre": "SWEET N’ TOAST",
                    "precio": "L 120.00",
                    "descripcion": "Pan 100% integral con crema de cacahuate bendito verde, banano, arándanos y granola.",
                    "img":"/img/productos/sweettoast.jpg"
                },
                {
                    "nombre": "AVO",
                    "precio": "L 135.00",
                    "descripcion": "Pan de masa madre, huevo y aguacate cremoso cubierto en microgreens.",
                    "img":"/img/menu/tostadas.jpg"
                },
                {
                    "nombre": "HUMMUS",
                    "precio": "PRONTO",
                    "descripcion": "Pan de masa madre, hummus, champiñones y tomate cherry rostizado.",
                    "img":"/img/galeria/placeholder_600px.jpg"
                },
                {
                    "nombre": "OH CHERRY",
                    "precio": "L 155.00",
                    "descripcion": "Pan de masa madre, aguacate, queso feta, arugula, tomate cherry rostizado y balsámico (opcional: agregar huevo).",
                    "img":"/img/productos/ocherry.jpg"
                },
            ]
            
        },
        {
            de:"ligero",
            titulo: "/img/productos/titulos/light.svg",
            items: [
                {
                    "nombre": "OVERNIGHT OATS",
                    "precio": "L 105.00",
                    "descripcion": "Avena trasnochada con leche de almendras, yogurt griego, chia y toppings.",
                    "img":"/img/productos/oats.jpg"
                },
                {
                    "nombre": "CHÍA PUDDING",
                    "precio": "L 95.00",
                    "descripcion": "Elaborado a base de leche de almendras y semillas de chia acompañado de frutas de temporada y tu topping favorito.",
                    "img":"/img/galeria/placeholder_600px.jpg"
                },
                {
                    "nombre": "MYKONOS YOGURT",
                    "precio": "L 105.00",
                    "descripcion": "Yogurt griego con fruta de temporada y granola hecha en casa.",
                    "img":"/img/menu/yogurt.jpg"
                },
                {
                    "nombre": "AÇAÍ BOWL",
                    "precio": "L 220.00",
                    "descripcion": "Base de açaí con granola bendito verde, fresas, banano, coco rallado, cacao nibs y crema de cacahuate bendito verde.",
                    "img":"/img/productos/acai.jpg"
                }
            ]
        },
        {
            de:"ensaladas",
            titulo: "/img/productos/titulos/salads.svg",
            items: [
                {
                    "nombre": "STRAWBERRY CHICKEN SALAD",
                    "precio": "L 290.00",
                    "descripcion": "Mix de lechugas y espinaca, pollo a la plancha, fresas, moras, nueces garapiñadas, queso feta y vinagreta balsámica de fresas.",
                    "img":"/img/productos/strawberrychksalad.jpg"
                },
                {
                    "nombre": "QUINOA MEDITERRANEA (opción vegana)",
                    "precio": "L 270.00",
                    "descripcion": "Base de quinoa, pollo a la plancha, chile de color, pepino, tomate cherry, repollo morado y vinagreta de limón.",
                    "img":"/img/productos/quinoa.jpg"
                },
                {
                    "nombre": "PASTA CAESAR SALAD (opción vegana)",
                    "precio": "L 275.00",
                    "descripcion": "Mix de lechuga con pasta rotinni acompañada de garbanzos crujientes, pollo a la plancha, queso parmesano, tomate cherry y aderezo césar.",
                    "img":"/img/productos/caesar.jpg"
                },
                {
                    "nombre": "COBB SALAD",
                    "precio": "L 285.00",
                    "descripcion": "Base de lechuga romana, pollo, cebolla roja, tomate cherry, huevo cocido, trocitos de bacon, aguacate y queso cheddar con aderezo aguacate griego.",
                    "img":"/img/productos/cobbsalad.jpg"
                },
                {
                    "nombre": "MEXA",
                    "precio": "L 275.00",
                    "descripcion": "Mix de lechugas, pollo, maíz asado, frijoles, aguacate, cebolla roja, cilantro, queso cheddar y chips de quinoa con aderezo de cilantro y limón.",
                    "img":"/img/productos/mexa.jpg"
                },
            ]            
        },
        {
            de:"mas",
            titulo: "/img/productos/titulos/mas.svg",
            items: [
                {
                    "nombre": "VERDEMIO TUNA SANDWICH",
                    "precio": "L 190.00",
                    "descripcion": "Pan 100% integral con ensalada de atún.",
                    "img":"/img/productos/tuna.jpg"
                },
                {
                    "nombre": "WRAP SANO PECADO",
                    "precio": "L 198.00",
                    "descripcion": "Envueltos de tortilla de espinaca rellena de pollo a la plancha, lechuga, tomate, cebolla con fundido de queso mozzarella y aderezo skinny spicy mayo.",
                    "img":"/img/menu/wrap.jpg"
                },
                {
                    "nombre": "WAFFLES PROTEICOS",
                    "precio": "L 195.00",
                    "descripcion": "Waffles hechos a base de almendra con proteína acompañados de banano y arándanos o banano y fresas con crema de cacahuate bendito verde.",
                    "img":"/img/productos/waffles.jpg"
                },
                {
                    "nombre": "PANQUEQUES DE AVENA Y BANANO",
                    "precio": "L 165.00",
                    "descripcion": "Panqueques a base de avena y banano acompañados de frutas y miel de abeja.",
                    "img":"/img/productos/pancakes.jpg"
                }
            ]
        }
    ]

    return (<Context.Provider value={{
        navitems, menuitems, filters, GaleriaImagenes, menuproductos
    }}>
        {children}
    </Context.Provider>
    )
}