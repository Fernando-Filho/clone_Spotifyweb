import '../Menus/Menus.css'
import { GrHomeRounded , GrSearch} from 'react-icons/gr';

const Menu = (props) => {

    const IconsArray = [<GrHomeRounded/>, <GrSearch/>]
    
    return(
        <div className="Menu">

            <ion-icons/>{IconsArray[props.number]}
            <h2>{props.text}</h2>

        </div>
    )
}

export default Menu