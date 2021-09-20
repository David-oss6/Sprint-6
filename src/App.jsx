import React from "react";
import { Escena } from "./components/escena/Escena";
import textos from './components/escena/textos.json'
import { useState } from "react";



export function App() {

    const [a, setA] = useState(0)
    console.log(a)
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



    return <div style={{ textAlign: "center", fontSize: "20px", margin: "5px" }}>
        Sprint 6<br />
        <button
            style={{
                margin: "10px 30px 10px 30px", backgroundColor: "lightblue", fontSize: "20px", padding: "10px 40px"
            }}
            onClick={() => prevBtn()} >Anterior</button>
        <button
            style={{
                margin: "10px 30px 10px 30px", backgroundColor: "lightblue", fontSize: "20px", padding: "10px 40px"
            }}
            onClick={() => nextBtn()} >Siguiente</button>
        <br />
        <Escena parrafo={textos[a]} />
        <br />
        <Escena parrafo={textos[0]} />
        <Escena parrafo={textos[1]} />
        <Escena parrafo={textos[2]} />
        <Escena parrafo={textos[3]} />




    </div >
}