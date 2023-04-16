import './Play.css'

import React, { useState } from "react";

import { GiPreviousButton, GiPlayButton, GiPauseButton, GiNextButton } from "react-icons/gi";
import { RxShuffle } from "react-icons/rx";
import { SlLoop } from "react-icons/sl";


import MinutoFormatado from './Tempo/MinutoFormatado.js'
import SegundoFormatado  from './Tempo/SegundoFormatado.js'

const Play = (props) => {

    const TempoCompletoDaMusica = 220

    const [porcentagem, setPorcentagem] = useState(0)
    const [tempoDaMusicaPercorrido, setTempoDaMusicaPercorrido] = useState(`00:00`)
    // const [tempoDaMusicaPercorrido, setTempoDaMusicaPercorrido] = useState(PorcentagemDaMusicaPercorrida(TempoCompletoDaMusica, porcentagem))

    function TempoDaMusicaFormatado(tempo){

        return(
                `${MinutoFormatado(tempo)}:${SegundoFormatado(tempo)}` 
            )
    }

    function PorcentagemDaMusicaPercorrida(TempoCompletoDaMusica, PorcentagemDaMusica){

        const TempoPercorrido = Math.trunc((TempoCompletoDaMusica*PorcentagemDaMusica)/100)

        return(
            console.log(`${MinutoFormatado(TempoPercorrido)}:${SegundoFormatado(TempoPercorrido)}`),

            `${MinutoFormatado(TempoPercorrido)}:${SegundoFormatado(TempoPercorrido)}`
        )
    }


    return (
        <div className="Play">

            <div className='Buttons'>
                {/* <button/><RxShuffle/>
                <button/><GiPreviousButton/> */}

                <button><GiPauseButton/></button>
                <button><GiPlayButton/></button>
                
                {/* <button/><GiNextButton/>
                <button/><SlLoop/> */}
            </div>

            <div className='TimeBar'>
                <TempoDaMusicaPercorrido TempoProp={tempoDaMusicaPercorrido}/>

                    <input
                        type="range"
                        value={porcentagem}
                        min={0}
                        step={1}
                        max={100}
                        onChange={value => setPorcentagem(value.target.value)}
                        onMouseMoveCapture={() => setTempoDaMusicaPercorrido(() => PorcentagemDaMusicaPercorrida(TempoCompletoDaMusica, porcentagem))}
                        // oninput={UpDateTime()}
                     ></input>

                <p>{TempoDaMusicaFormatado(TempoCompletoDaMusica)}</p>
            </div>

        </div>
    )
}

const TempoDaMusicaPercorrido = ({TempoProp}) => {
    return (
        <div>{TempoProp}</div>
    )
}



export default Play