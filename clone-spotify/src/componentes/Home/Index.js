import './Home.css'

import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

import MaisOuvidas from './MaisOuvidas/Index';
import FeitoPara from './FeitoPara/Index';


const Home = (props) => {

    return (
        <div className="Home">
            <div className='NavButtons'>
                <IoIosArrowDropleftCircle size={40} opacity={0.6}/>
                <IoIosArrowDroprightCircle size={40} opacity={0.6}/>
            </div>

            <h1>Boa tarde</h1>

            <div className='Container'>
                <MaisOuvidas/>
                <MaisOuvidas/>
                <MaisOuvidas/>
                <MaisOuvidas/>
                <MaisOuvidas/>
                <MaisOuvidas/>
                <MaisOuvidas/>
                <MaisOuvidas/>
            </div>

            <h2>Feito para Soninho</h2>

            <div className='MakeTO'>

                <FeitoPara title={"Descoberta da Semana"} text={"Sua mixtape Semanal cheia de novas..."}/>

                <FeitoPara title={"Descoberta da Semana"} text={"Sua mixtape Semanal cheia de novas..."}/>

                <FeitoPara title={"Descoberta da Semana"} text={"Sua mixtape Semanal cheia de novas..."}/>

                <FeitoPara title={"Descoberta da Semana"} text={"Sua mixtape Semanal cheia de novas..."}/>

                <FeitoPara title={"Descoberta da Semana"} text={"Sua mixtape Semanal cheia de novas..."}/>

                <FeitoPara title={"Descoberta da Semana"} text={"Sua mixtape Semanal cheia de novas..."}/>

                <FeitoPara title={"Descoberta da Semana"} text={"Sua mixtape Semanal cheia de novas..."}/>
                
                <FeitoPara title={"Descoberta da Semana"} text={"Sua mixtape Semanal cheia de novas..."}/>

            </div>
        </div>
    )
}

export default Home