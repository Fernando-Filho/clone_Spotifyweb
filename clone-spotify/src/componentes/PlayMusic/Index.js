import './PlayMusic.css'
import Music from '../Music/Index';
import Play from '../Play/Index';
import OptionPlay from '../OptionPlay/Index';

const PlayMusic = (props) =>{
    return(
        <div className="PlayMusic">
            <Music/>
            <Play/>
            <OptionPlay/>
        </div>
    )
}

export default PlayMusic