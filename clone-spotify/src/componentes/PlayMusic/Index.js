import './PlayMusic.css'
import Music from "../Music/Index"

const PlayMusic = (props) => {
    return (
        <div className="PlayMusic">
            <Music 
                title={'Controllah (feat. MC Bin Laden)'}
                artists={['Gorillaz', 'Mc Bin Laden']}
            />
        </div>
    )
}

export default PlayMusic