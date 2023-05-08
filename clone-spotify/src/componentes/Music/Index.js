import './Music.css'

import { AiFillHeart } from "react-icons/ai";

import ImageExemplo from '../../image/Album.jpg';

const Music = (props) => {

    return (
        <div className="Music">

            <div className="imagemMusic">
                <img src={ImageExemplo} alt="Imagem Exemplo" />
            </div>

            <div className="InfoMusic">

                <h2 className='MusicName'>Controllah (feat. MC Bin Laden)</h2>

                <span>
                    <p>Gorillaz,</p>
                    <p>Mc Bin Laden</p>
                </span>

            </div>
            <AiFillHeart className='IconHeart' size={20}/>

        </div>
    )
}

export default Music