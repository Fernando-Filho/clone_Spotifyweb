import './PlayMusic.css'
import Music from '../Music/Index';
import Play from '../Play/Index';

const PlayMusic = (props) =>{
    return(
        <div className="PlayMusic">
            <Music/>
            <Play/>
            <div className='teste2'></div>
        </div>
    )
}

export default PlayMusic