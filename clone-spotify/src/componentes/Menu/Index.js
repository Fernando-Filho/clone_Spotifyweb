import './Menu.css'
import { SiDatabricks } from "react-icons/si";
import { BsPlusSquare, BsHeartFill, BsFillBookmarkFill, BsSearch } from "react-icons/bs";
import { TiHome } from "react-icons/ti";

const Menu = (props) => {
    
    return(
        <div className="Menu">

            <div className='ParteA'>
                <div className='line'>
                    <TiHome className='IconesMenus'/>
                    <h2>Inicio</h2>
                </div>

                <div className='line'>
                    <BsSearch className='IconesMenus'/>
                    <h2>Buscar</h2>
                </div>

                <div className='line'>
                    <SiDatabricks className='IconesMenus'/>
                    <h2>Sua Biblioteca</h2>
                </div>

            </div>

            <div className='ParteB'>
                <div className='line'>

                    <BsPlusSquare className='IconesMenus'/>
                    <h2>Criar Playlist</h2>

                </div>
                <div className='line'>

                    <BsHeartFill className='IconesMenus'/>
                    <h2>Músicas Curtidas</h2>

                </div>
                <div className='line last'>

                    <BsFillBookmarkFill className='IconesMenus'/>
                    <h2>Seus Episódios</h2>
                    
                </div>



            </div>

        </div>
    )
}

export default Menu