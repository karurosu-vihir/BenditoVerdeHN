import { Children, createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {

    const testimonios = [
        {name: 'Josue Leon', username: '@realeoncito', imgSrc: 'https://picsum.photos/id/35/48/48', opinion:"nsfkns skdnlsn sdlnfslkdfldsn ajnsa sdakdss aslkdlas lkmasdl askmsl lskdlsm smdlnasl alsdknnlas lsdknlsdnl"},
        {name: 'Valeria Pacheco', username: '@realeoncito', imgSrc: '/img/testimonios/ValPacheco.jpeg', opinion:"No soy una persona fan de la comida 100% healthy, pero el día que probé los productos de bendito Verde como el Chía pudding y Berry Happy (trae prote 🤌🏼 ) me encantaron que ni sentís que es comida saludable de lo rico que son, lo disfrutas y sin culpa!"},
        {name: 'Anna R Rodriguez', username: '@realeoncito', imgSrc: '/img/testimonios/AnnaRodriguez.jpg', opinion:"Best salads, best protein shakes ever. ¡Comer sano se me ha hecho tan fácil! Además de lo delicioso que es, me ayuda exageradísimo a cumplir mis metas cuando no puedo cocinar y necesito un healthy option to go."},
        {name: 'Josue Leon', username: '@realeoncito', imgSrc: 'https://picsum.photos/id/345/48/48', opinion:"nsfkns skdnlsn sdlnfslkdfldsn"},
        {name: 'Josue Leon', username: '@realeoncito', imgSrc: 'https://picsum.photos/id/345/48/48', opinion:"nsfkns skdnlsn sdlnfslkdfldsn"},
    ]


    return (<Context.Provider value={{
        testimonios
    }}>
        {children}
    </Context.Provider>)
}