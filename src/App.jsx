import React from "react";
import { Escena } from "./components/escena/Escena";
import textos from './components/escena/textos.json'
import { useState } from "react";
import { BtnCss, GlobalStyle } from "./components/escena/styled.js";




export function App() {
    const [a, setA] = useState(0)
    const prevBtn = () => {
        if (a === 1) {
            setA(0)
        }
        if (a === 2) {
            setA(1)
        }
        if (a === 3) {
            setA(2)
        }
    }
    const nextBtn = () => {
        if (a === 0) {
            setA(1)
        }
        if (a === 1) {
            setA(2)
        }
        if (a === 2) {
            setA(3)
        }
    }



    return <div  >


        Sprint 6<br />
        <BtnCss onClick={() => prevBtn()} >Anterior</BtnCss>
        <BtnCss onClick={() => nextBtn()} >Siguiente</BtnCss>
        <br />

        <Escena parrafo={textos[a]} />

        <br />
        <Escena parrafo={textos[0]} />
        <Escena parrafo={textos[1]} />
        <Escena parrafo={textos[2]} />
        <Escena parrafo={textos[3]} />
        <GlobalStyle />



    </div >
}