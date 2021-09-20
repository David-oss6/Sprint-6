import React from "react";
import { Escena } from "./components/escena/Escena";
import { textos } from "./components/escena/Textos";
import { useState } from "react";



export function App() {
    const [a, setA] = useState(<Escena parrafo1={textos[0].parrafo1} />)


    const prevBtn = () => {
        if (a === <Escena parrafo2={textos[1].parrafo2} />) {
            setA(<Escena parrafo1={textos[0].parrafo1} />)
        }
        if (a === <Escena parrafo3={textos[2].parrafo3} />) {
            setA(<Escena parrafo2={textos[1].parrafo2} />)
        }
        if (a === <Escena parrafo4={textos[3].parrafo4} />) {
            setA(<Escena parrafo3={textos[2].parrafo3} />)
        }
        return a


    }

    const nextBtn = () => {
        if (a === <Escena parrafo1={textos[0].parrafo1} />) {
            return setA(<Escena parrafo2={textos[1].parrafo2} />)
        }
        if (a === <Escena parrafo2={textos[1].parrafo2} />) {
            setA(<Escena parrafo3={textos[2].parrafo3} />)
        }
        if (a === <Escena parrafo3={textos[2].parrafo3} />) {
            setA(<Escena parrafo4={textos[3].parrafo4} />)
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
        {a}
        <br />
        <Escena parrafo1={textos[0].parrafo1} />
        <Escena parrafo2={textos[1].parrafo2} />
        <Escena parrafo3={textos[2].parrafo3} />
        <Escena parrafo4={textos[3].parrafo4} />
        <br />


    </div >
}