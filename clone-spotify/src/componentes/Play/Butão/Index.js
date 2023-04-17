import './Botão.css'

import React, { useState } from "react";

import { GiPlayButton, GiPauseButton} from "react-icons/gi";


const Botão = (props) => {


    const [icone, setIcone] = useState(<GiPlayButton/>);

    function PlayOrPause(){
        if(icone === <GiPlayButton/>) {setIcone(<GiPauseButton/>)}

        else{ setIcone(<GiPlayButton/>) }
    }

    return(
        <div className='BotãoIcone'>
            <Icone onClick={PlayOrPause} size={50} iconeProp={icone} className="Chield"/>
        </div>
    )
}

const Icone = ({iconeProp}) => {
    return (<div>{iconeProp}</div>)
}

export default Botão