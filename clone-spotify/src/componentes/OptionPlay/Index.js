import './OptionPlay.css'

import { TbMicrophone2, TbArrowsMoveHorizontal } from "react-icons/tb";
import { HiOutlineQueueList, HiOutlineDesktopComputer, HiOutlineDeviceMobile } from "react-icons/hi";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

import Volume from './componentes/Volume/Index';


const OptionPlay = (props) => {
    return (
        <div className="OptionPlay">
            <TbMicrophone2/>
            <HiOutlineQueueList/>
            <HiOutlineDesktopComputer/>
            <MdOutlineScreenSearchDesktop/>
            <Volume/>
            <TbArrowsMoveHorizontal/>

        </div>
    )
}

export default OptionPlay