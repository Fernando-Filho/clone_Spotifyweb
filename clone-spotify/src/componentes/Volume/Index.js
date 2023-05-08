import './Volume.css'

import React, { useState } from "react";

import { TiVolumeMute, TiVolume, TiVolumeDown, TiVolumeUp } from "react-icons/ti";

const Volume = (props) => {

    const [volume, setVolume] = useState(0);
    const [icone, setIcone] = useState(<TiVolumeMute/>);

    function volumeIcon(volume){

      const OptionIcons = [
        <TiVolumeMute/>,
        <TiVolume/>,
        <TiVolumeDown/>,
        <TiVolumeUp/>,
      ]

      if (volume >= 66) { return ( OptionIcons[3] ) }

      else if (volume >= 33) { return ( OptionIcons[2] ) }

      else if (volume > 0) { return ( OptionIcons[1] ) }

      else if (volume == 0){ return ( OptionIcons[0] ) }
      
    }

    return (
        <div className="Volume">

                <Icone size={50} iconeProp={icone} className="Chield"/>

                <input
                  type="range"
                  value={volume}
                  min={0}
                  step={1}
                  max={100}
                  onChange={value => setVolume(value.target.value)}
                  onMouseMove={() => setIcone(volumeIcon(volume))}
                />

        </div>
    )
}

const Icone = ({iconeProp}) => {
  return (<div>{iconeProp}</div>)
}

export default Volume
