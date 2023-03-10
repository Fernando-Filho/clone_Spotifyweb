import './Navbar.css'
import Menu from '../Menu/Index';
import { SlOptions } from "react-icons/sl";
import MyPlayList from '../MyPlaylist/Index';

const NavBar = (props) => {
    return (
        <div className="NavBar">
            <SlOptions className='Icone'/>
            <Menu/>
            <MyPlayList text={'This is NF'}/>
            <MyPlayList text={'Faixas do Shazam'}/>
            <MyPlayList text={'This is O Rappa'}/>
            <MyPlayList text={'Study lofi'}/>
            <MyPlayList text={'This is Racionais MC`s'}/>
            <MyPlayList text={'This is M4rkim'}/>
            <MyPlayList text={'Car Music'}/>
            <MyPlayList text={'This is Pentakill'}/>
            <MyPlayList text={'This is League of Legends'}/>
            <MyPlayList text={'This is 7 Minutoz'}/>

        </div>
    )
}

export default NavBar