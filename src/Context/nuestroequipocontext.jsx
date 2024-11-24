import { Children, createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const empleados = [
        {
            nombre: "John",
            puesto: "Puesto",
            descripcion: "Experiencia, educación, trabajo del que se encarga",
            imgUrl: "/img/nuestroequipo/avatar.webp"
        },
        {
            nombre: "John",
            puesto: "Puesto",
            descripcion: "Experiencia, educación, trabajo del que se encarga",
            imgUrl: "/img/nuestroequipo/avatar.webp"
        },
        {
            nombre: "John",
            puesto: "Puesto",
            descripcion: "Experiencia, educación, trabajo del que se encarga",
            imgUrl: "/img/nuestroequipo/avatar.webp"
        },
        {
            nombre: "John",
            puesto: "Puesto",
            descripcion: "Experiencia, educación, trabajo del que se encarga",
            imgUrl: "/img/nuestroequipo/avatar.webp"
        },
        {
            nombre: "John",
            puesto: "Puesto",
            descripcion: "Experiencia, educación, trabajo del que se encarga",
            imgUrl: "/img/nuestroequipo/avatar.webp"
        },
        {
            nombre: "John",
            puesto: "Puesto",
            descripcion: "Experiencia, educación, trabajo del que se encarga",
            imgUrl: "/img/nuestroequipo/avatar.webp"
        },
        {
            nombre: "John",
            puesto: "Puesto",
            descripcion: "Experiencia, educación, trabajo del que se encarga",
            imgUrl: "/img/nuestroequipo/avatar.webp"
        },
        {
            nombre: "John",
            puesto: "Puesto",
            descripcion: "Experiencia, educación, trabajo del que se encarga",
            imgUrl: "/img/nuestroequipo/avatar.webp"
        },
    ]

    return(<Context.Provider value={{
        empleados
    }}>
        {children}
    </Context.Provider>)
}