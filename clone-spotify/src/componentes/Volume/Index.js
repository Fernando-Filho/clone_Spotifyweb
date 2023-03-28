import './Volume.css'

import { IconNaTiVolumeMuteme, TiVolume, TiVolumeDown, TiVolumeUp } from "react-icons/ti";

const Volume = (props) => {

    function volumeIcon(PorcentagemVolume){

        const OptionIcons = [
          <IconNaTiVolumeMuteme/>,
          <TiVolume/>,
          <TiVolumeDown/>,
          <TiVolumeUp/>,
        ];
      
        if (PorcentagemVolume >= 66) { return ( OptionIcons[3] ) }

        else if (PorcentagemVolume >= 33) { return ( OptionIcons[2] ) }

        else if (PorcentagemVolume > 0) { return ( OptionIcons[1] ) }

        else { return ( OptionIcons[0] ) }
      
      }
      


    return (
        <div className="Volume">

                {volumeIcon(50)}
                <input name='VolumeRange' type="range" min={0} step={1} max={100}/>

        </div>
    )
}
export default Volume