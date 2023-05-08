import './OptionPlay.css'

import { TbMicrophone2, TbArrowsMoveHorizontal } from "react-icons/tb";
import { HiOutlineDesktopComputer, HiOutlineDeviceMobile } from "react-icons/hi";
import { HiOutlineQueueList } from "react-icons/hi2";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { BsArrowsAngleExpand } from "react-icons/bs";

import Volume from '../Volume/Index';

const OptionPlay = (props) => {
    return (
        <div className="OptionPlay">
            <TbMicrophone2 className='Icons'/>
            <HiOutlineQueueList className='Icons'/>
            <HiOutlineDesktopComputer className='Icons'/>
            <Volume/>
            <BsArrowsAngleExpand className='Icons'/>

        </div>
    )
}

export default OptionPlay