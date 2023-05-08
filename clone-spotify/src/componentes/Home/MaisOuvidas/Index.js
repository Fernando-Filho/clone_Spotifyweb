import './MaisOuvidas.css'

import { IoIosPlay } from "react-icons/io";

const MaisOuvidas = (props) => {

    return (
        <div className="MaisOuvidas">

            <div className='Foto'></div>
            
            <div className='Info'>
                <h3>This Is Gorillaz</h3>
                <button className='InfoButton'><IoIosPlay size={28}/></button>
            </div>


        </div>
    )
}

export default MaisOuvidas