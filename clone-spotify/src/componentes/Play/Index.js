import './Play.css'

import React, { useState } from "react";

import { GiPreviousButton, GiPlayButton, GiPauseButton, GiNextButton } from "react-icons/gi";
import { RxShuffle } from "react-icons/rx";
import { SlLoop } from "react-icons/sl";


import MinutoFormatado from './Tempo/MinutoFormatado.js'
import SegundoFormatado  from './Tempo/SegundoFormatado.js'

const Play = (props) => {

    const TempoCompletoDaMusica = 120

    const [porcentagem, setPorcentagem] = useState(0)
    const [tempoDaMusicaPercorrido, setTempoDaMusicaPercorrido] = useState(`00:00`)
    // const [tempoDaMusicaPercorrido, setTempoDaMusicaPercorrido] = useState(QuantoTempoDaMusicaPassou(TempoCompletoDaMusica, porcentagem))
    const [tempoDaMusicaQueFalta, setTempoDaMusicaQueFalta] = useState(TempoDaMusicaFormatado(TempoCompletoDaMusica))

    function TempoDaMusicaFormatado(tempo){

        return(
                `${MinutoFormatado(tempo)}:${SegundoFormatado(tempo)}` 
            )
    }

    function QuantoTempoDaMusicaPassou(TempoCompletoDaMusica, PorcentagemDaMusica){

        const TempoPercorrido = Math.trunc((TempoCompletoDaMusica*PorcentagemDaMusica)/100)

        return(
            console.log(`${MinutoFormatado(TempoPercorrido)}:${SegundoFormatado(TempoPercorrido)}`),

            `${MinutoFormatado(TempoPercorrido)}:${SegundoFormatado(TempoPercorrido)}`
        )
    }

    function QuantoTempoDaMusicaFalta(TempoCompletoDaMusica, PorcentagemDaMusica){

        const TempoQueFalta = Math.trunc((TempoCompletoDaMusica*(100-PorcentagemDaMusica))/100)

        return(
            console.log(`${MinutoFormatado(TempoQueFalta)}:${SegundoFormatado(TempoQueFalta)}`),

            `${MinutoFormatado(TempoQueFalta)}:${SegundoFormatado(TempoQueFalta)}`
        )
    }

    function RecalculoDoTimingDaMusica(TempoCompletoDaMusica, PorcentagemDaMusica){
        return(
            console.log('deu certo'),
            setTempoDaMusicaPercorrido(() => QuantoTempoDaMusicaPassou(TempoCompletoDaMusica, porcentagem)),
            setTempoDaMusicaQueFalta(() => QuantoTempoDaMusicaFalta(TempoCompletoDaMusica, porcentagem))
        )
    }


    function teste (){
        return(
            setPorcentagem(porcentagem + 1),
            console.log(porcentagem)
        )
    }

    return (
        <div className="Play">

            <div className='Buttons'>
                {/* <button/><RxShuffle/>
                <button/><GiPreviousButton/> */}

                <button 
                    onClick={setInterval(teste, 1000)}
                >
                    <GiPlayButton/>
                </button>

                <button 
                    // onClick={setTimeout(teste, 1000)}
                >
                    <GiPauseButton/>
                </button>
                
                {/* <button/><GiNextButton/>
                <button/><SlLoop/> */}
            </div>

            <div className='TimeBar'>
                <TempoDaMusicaPercorrido Timing={tempoDaMusicaPercorrido}/>


                    <input
                        type="range"
                        value={porcentagem}
                        min={0}
                        step={1}
                        max={100}
                        onChange={value => setPorcentagem(value.target.value)}
                        // onMouseMoveCapture={() => setTempoDaMusicaPercorrido(() => QuantoTempoDaMusicaPassou(TempoCompletoDaMusica, porcentagem))}
                        onMouseMoveCapture={() => RecalculoDoTimingDaMusica(TempoCompletoDaMusica, porcentagem)}
                        // oninput={UpDateTime()}
                     ></input>

                {/* <p>{TempoDaMusicaFormatado(TempoCompletoDaMusica)}</p> */}
                <TempoDaMusicaPercorrido Timing={tempoDaMusicaQueFalta}/>
            </div>

        </div>
    )
}

const TempoDaMusicaPercorrido = ({Timing}) => {
    return (
        <div>{Timing}</div>
    )
}
const TempoDaMusicaQueFalta = ({Timing}) => {
    return (
        <div>{Timing}</div>
    )
}



export default Play