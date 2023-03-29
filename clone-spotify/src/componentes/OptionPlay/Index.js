import './OptionPlay.css'

import { TbMicrophone2, TbArrowsMoveHorizontal } from "react-icons/tb";
import { HiOutlineDesktopComputer, HiOutlineDeviceMobile } from "react-icons/hi";
import { HiOutlineQueueList } from "react-icons/hi2";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

import Volume from '../Volume/Index';

const OptionPlay = (props) => {
    return (
        <div className="OptionPlay">
            <TbMicrophone2/>
            <HiOutlineQueueList/>
            <HiOutlineDesktopComputer/>
            <HiOutlineDeviceMobile/>
            <MdOutlineScreenSearchDesktop/>
            <Volume/>
            <TbArrowsMoveHorizontal/>

        </div>
    )
}

export default OptionPlay