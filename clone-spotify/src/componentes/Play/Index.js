import './Play.css'
import { GiPreviousButton, GiPlayButton, GiPauseButton, GiNextButton } from "react-icons/gi";
import { RxShuffle } from "react-icons/rx";
import { SlLoop } from "react-icons/sl";

// import { MinutoFormatado }  from '../MinutoFormatado/MinutoFormatado.js'
// import { SegundoFormatado }  from './SegundoFormatado.js'

const Play = (props) => {

    const TimeMusic = 360
    // let TempoCorrido = 0
    // let TempoRestante = TimeMusic
    
    function TempoFormatado (tempo){

        // return( `${MinutoFormatado(tempo)}:${SegundoFormatado(tempo)}` )
        return( `teste` )
    }


    return (
        <div className="Play">

            <div className='Buttons'>
                <button/><RxShuffle/>
                <button/><GiPreviousButton/>
                <button/><GiPauseButton/>
                <button/><GiPlayButton/>
                <button/><GiNextButton/>
                <button/><SlLoop/>
            </div>

            <div className='timeBar'>
                <p>{TempoFormatado(TimeMusic)}</p>

                    <input type="range" min={0} step={1} max={100}
                    //  oninput={UpDateTime()}
                     ></input>

                <p>{TempoFormatado(TimeMusic)}</p>
            </div>

        </div>
    )
}

export default Play