import './Play.css'

import React, { useState } from "react";

import { GiPreviousButton, GiPlayButton, GiPauseButton, GiNextButton } from "react-icons/gi";
import { RxShuffle } from "react-icons/rx";
import { SlLoop } from "react-icons/sl";


import MinutoFormatado from './Tempo/MinutoFormatado.js'
import SegundoFormatado  from './Tempo/SegundoFormatado.js'

const Play = (props) => {

    const TempoCompletoDaMusica = 100

    const [porcentagem, setPorcentagem] = useState(0)
    const [tempoDaMusicaPercorrido, setTempoDaMusicaPercorrido] = useState(QuantoTempoDaMusicaPassou())
    const [tempoDaMusicaQueFalta, setTempoDaMusicaQueFalta] = useState(TempoDaMusicaFormatado(TempoCompletoDaMusica))

    function TempoDaMusicaFormatado(tempo){

        return( `${MinutoFormatado(tempo)}:${SegundoFormatado(tempo)}` )
    }

    function QuantoTempoDaMusicaPassou(){

        const TempoPercorrido = Math.trunc((TempoCompletoDaMusica*porcentagem)/100)

        return( TempoDaMusicaFormatado(TempoPercorrido) )
    }

    function QuantoTempoDaMusicaFalta(){

        const TempoQueFalta = Math.trunc((TempoCompletoDaMusica*(100-porcentagem))/100)

        return( TempoDaMusicaFormatado(TempoQueFalta) )
    }

    function RecalculoDoTimingDaMusica(props){
        return(
            setPorcentagem(props.target.value),
            setTempoDaMusicaPercorrido(QuantoTempoDaMusicaPassou()),
            setTempoDaMusicaQueFalta(QuantoTempoDaMusicaFalta())
        )
    }

    // function teste () {
    //     return(
    //         setPorcentagem(porcentagem + 1),
    //         console.log(porcentagem)
    //     )
    // }

    // function pararTeste () {
    //         clearInterval
    // }

    return (
        <div className="Play">

            <div className='Buttons'>
                {/* <button/><RxShuffle/>
                <button/><GiPreviousButton/> */}

                <button 
                    // onClick={setInterval(teste, 1000)}
                >
                    <GiPlayButton/>
                </button>

                <button 
                    // onClick={setTimeout(pararTeste, 1000)}
                >
                    <GiPauseButton/>
                </button>
                
                {/* <button/><GiNextButton/>
                <button/><SlLoop/> */}
            </div>

            <div className='TimeBar'>
                <TextoDoTempoDaMusica Timing={tempoDaMusicaPercorrido}/>

                <input
                    type="range"
                    value={porcentagem}
                    min={0}
                    step={1}
                    max={100}
                    onChange={value => setPorcentagem(value.target.value)}
                    // onChange={RecalculoDoTimingDaMusica}
                    onMouseMoveCapture={RecalculoDoTimingDaMusica}
                    ></input>

                <TextoDoTempoDaMusica Timing={tempoDaMusicaQueFalta}/>
            </div>
            
        </div>
    )
}

const TextoDoTempoDaMusica = ({Timing}) => {
    return ( <div>{Timing}</div> )
}

export default Play