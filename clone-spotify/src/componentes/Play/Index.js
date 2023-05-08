import './Play.css'

import React, { useState } from "react";

import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { RxShuffle } from "react-icons/rx";
import { SlLoop } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";


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
            console.log(props),
            setPorcentagem(props.target.value),
            setTempoDaMusicaPercorrido(QuantoTempoDaMusicaPassou()),
            setTempoDaMusicaQueFalta(QuantoTempoDaMusicaFalta())
        )
    }

    // function teste () {
    //     if ( porcentagem >= 99){ 
    //         setPorcentagem( 0 ) 
    //     }else { setPorcentagem(Number(porcentagem + 1)) }
        
    //     setTempoDaMusicaPercorrido(QuantoTempoDaMusicaPassou())
    //     setTempoDaMusicaQueFalta(QuantoTempoDaMusicaFalta())
    //     return(
    //         console.log(`A porcentagem é de ${porcentagem} `)
    //     )
    // }

    // function pararTeste () {
    //         clearInterval
    // }

    return (
        <div className="Play">

            <div className='Controlls'>
                <RxShuffle className='Buttons'/>
                <GiPreviousButton className='Buttons'/>
                <button className='ControllButton'><FaPlay size={16}/></button>
                <GiNextButton className='Buttons'/>
                <SlLoop className='Buttons'/>
            </div>

            <div className='TimeBar'>
                <TextoDoTempoDaMusica Timing={tempoDaMusicaPercorrido} className="Temporizador"/>

                <input
                    className='Timing'
                    type="range"
                    value={porcentagem}
                    min={0}
                    step={1}
                    max={100}
                    onChange={value => setPorcentagem(value.target.value)}
                    onMouseMoveCapture={RecalculoDoTimingDaMusica}
                ></input>

                <TextoDoTempoDaMusica Timing={tempoDaMusicaQueFalta} className="Temporizador"/>
            </div>
            
        </div>
    )
}

const TextoDoTempoDaMusica = ({Timing}) => {
    return ( <div>{Timing}</div> )
}

export default Play