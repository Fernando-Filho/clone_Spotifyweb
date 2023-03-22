import './Music.css'
import { AiOutlineHeart } from "react-icons/ai";
import ImageExemplo from '../../image/ImageExemplo.jpg';

const Music = (props) => {
    return (
        <div className="Music">

            <div className="imagemMusic">
                <img src={ImageExemplo} alt="Imagem Exemplo" />
            </div>

            <div className="InfoMusic">

                <h2>Controllah (feat. MC Bin Laden)</h2>

                <span>
                    <p>Gorillaz</p>
                    <p>Mc Bin Laden</p>
                </span>

            </div>
            <AiOutlineHeart/>

        </div>
    )
}

export default Music