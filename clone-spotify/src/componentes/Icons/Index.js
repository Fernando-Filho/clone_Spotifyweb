import Icons from './Icons.css'
import { GrHomeRounded } from 'react-icons/gr';
import Menu from '../Menus/Index';


const IconHome = (props) => {
    return(
        <div className="Icones">
            <Menu 
                text={'Inicio'}
                number={0}    
            />
        </div>
    )
}

export default IconHome