import './FeitoPara.css'

import { BsSpotify } from "react-icons/bs";
import { IoIosPlay } from "react-icons/io";

const FeitoPara = ( props ) => {

    return(

        <div className="FeitoPara">

        	<div className='FeitoParaInterno'>
                <BsSpotify/>
                <button className='FeitoParaInternoButton'><IoIosPlay size={28}/></button>
            </div>

            <h3>{props.title}</h3>
            <p>{props.text}</p>
            
        </div>

    )

}

export default FeitoPara