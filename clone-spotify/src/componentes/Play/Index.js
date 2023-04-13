import './Play.css'

import React, { useState } from "react";

import { GiPreviousButton, GiPlayButton, GiPauseButton, GiNextButton } from "react-icons/gi";
import { RxShuffle } from "react-icons/rx";
import { SlLoop } from "react-icons/sl";


import MinutoFormatado from './Tempo/MinutoFormatado.js'
import SegundoFormatado  from './Tempo/SegundoFormatado.js'

const Play = (props) => {

    const [porcentagem, setPorcentagem] = useState(0)
    const [tempoDaMusicaPercorrido, setTempoDaMusicaPercorrido] = useState(`00:00`);

    const TempoCompletoDaMusica = 200
    // let PorcentagemDaMusica = document.getElementById('%DaMusica')

    function PorcentagemDaMusicaPercorrida(TempoCompletoDaMusica, PorcentagemDaMusica){

        const TempoPercorrido = ((TempoCompletoDaMusica*PorcentagemDaMusica)/100)

            return(
                `${MinutoFormatado(TempoPercorrido)}:${SegundoFormatado(TempoPercorrido)}`
        )
    }
    
    function TempoDaMusicaFormatado(tempo){

        return( 
                `${MinutoFormatado(tempo)}:${SegundoFormatado(tempo)}` 
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
                        id='%DaMusica'
                        type="range"
                        value={50}
                        min={0}
                        step={1}
                        max={100}
                        onChange={value => setPorcentagem(value.target.value)}
                        onClickCapture={() => setTempoDaMusicaPercorrido(PorcentagemDaMusicaPercorrida(TempoCompletoDaMusica, setPorcentagem))}
                        // oninput={UpDateTime()}
                     ></input>

                <p>{TempoDaMusicaFormatado(TempoCompletoDaMusica)}</p>
            </div>

        </div>
    )
}

const TempoDaMusicaPercorrido = ({TempoProp}) => {
    return (<div>{TempoProp}</div>)
  }

export default Play