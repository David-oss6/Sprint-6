import React from "react";
import { Escena } from "./components/escena/Escena";
import { PantallaInicial } from "./components/PantallaInicial";
import textos from './components/escena/textos.json'
import { useState } from "react";
import { BtnCss, GlobalStyle, InicialBack, InitialBtn, InitialDiv } from "./components/escena/styled.js";
import uno from './components/img/uno.jpg'
import dos from './components/img/dos.jpg';
import tres from './components/img/tres.jpg';
import cuatro from './components/img/cuatro.jpg';


export function App() {
    const [a, setA] = useState(0);
    const [start, setStart] = useState(false)
    const frases = [textos[0], textos[1], textos[2], textos[3]]
    const imagenes = [uno, dos, tres, cuatro]

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




    const empezar = () => {
        setStart(true)

    }

    return <div  >
        <div>
            <div>
                {start ? <InitialDiv style={{
                    backgroundImage: `url(${imagenes[a]})`
                }}  >

                    <br />
                    <BtnCss onClick={() => prevBtn()} >Anterior</BtnCss>
                    <BtnCss onClick={() => nextBtn()} >Siguiente</BtnCss>
                    <br />
                    {
                        frases.map((par, key) => {
                            return <Escena activa={a === key} parrafo={par} />
                        })
                    }

                </InitialDiv>
                    : <InicialBack>
                        <InitialBtn onClick={() => empezar()}>Empezamos!</InitialBtn>
                        <PantallaInicial />
                    </InicialBack>}
            </div>

        </div>

        <GlobalStyle />
    </div >
}