import { AiOutlineHeart } from "react-icons/ai";

const Music = (props) => {
    return (
        <div className="Music">
            <div className="imagemMusic">
            </div>

            <div className="InfoMusic">
                <h2>{props.title}</h2>
                <p>{props.artists}</p>
            </div>
            <AiOutlineHeart/>

        </div>
    )
}

export default Music