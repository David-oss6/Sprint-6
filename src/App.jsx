import React from "react";
import { Escena } from "./components/escena/Escena";
import { PantallaInicial } from "./components/PantallaInicial";
import { texto } from './components/escena/textos'
import { useState } from "react";
import { BtnCss, GlobalStyle, InicialBack, InitialBtn, InitialDiv } from "./components/escena/styled.js";



export function App() {
    const [a, setA] = useState(0);
    const [start, setStart] = useState(false)
    const frases = [texto[0].txt, texto[1].txt, texto[2].txt, texto[3].txt]


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
                    backgroundImage: `url(${texto[a].img})`
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