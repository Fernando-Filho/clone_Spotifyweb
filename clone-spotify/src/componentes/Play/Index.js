import './Play.css'
import { GiPreviousButton, GiPlayButton, GiPauseButton, GiNextButton } from "react-icons/gi";
import { RxShuffle } from "react-icons/rx";
import { SlLoop } from "react-icons/sl";

const Play = (props) => {

    let StartSeconds = 00;
    let StartMinutes = 00; 
    let EndtSeconds = 00;
    let EndMinutes = 00;
    const TimeMusic = 360
    
    const Timer = (TimeMusic) => {
        StartSeconds++
        
        if (StartMinutes < 9) {
            
        }
    }


    const UpDateTime = (props) => {
        const PortcentagemTime = props.value



        
    }


    return (
        <div className="Play">

            <div className='Buttons'>
                <RxShuffle/>
                <GiPreviousButton/>
                <GiPauseButton/>
                <GiPlayButton/>
                <GiNextButton/>
                <SlLoop/>
            </div>

            <div className='timeBar'>
                <p>`${StartMinutes}:${StartSeconds}`</p>
                    <input type="range" min={0} step={1} max={100} oninput={UpDateTime()}></input>
                <p>`${EndMinutes}:${EndtSeconds}`</p>
            </div>

        </div>
    )
}

export default Play