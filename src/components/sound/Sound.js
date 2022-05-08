import React, { useEffect, useRef, useState, useContext } from "react";
import useSound from "use-sound";
import { SoundWrapper, SoundImg, SoundInput, SoundName } from "./SoundElements";
// import { data } from "../../data";
import { Context } from "../../context/Context";

const Sound = ({ sound }) => {
  const volumeVal = useRef(0);
  const { isPlaying } = useContext(Context);
  const [volume, setVolume] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(sound.sound, {
    volume: volume,
    loop: true,
  });
  // console.log(volumeVal);
  const showValue = (e) => {
    setVolume(volumeVal);
  };
  useEffect(() => {
    if (!isPlaying) {
      setVolume(0);
    }
  }, [isPlaying]);
  return (
    <SoundWrapper>
      <SoundImg style={{ opacity: `${0.5 + volume}` }}>{sound.img}</SoundImg>
      <SoundName style={{ opacity: `${0.5 + volume}` }}>{sound.name}</SoundName>
      {isPlaying ? (
        <SoundInput
          type="range"
          defaultValue={0}
          ref={volumeVal}
          onClick={play}
          style={{ opacity: `${0.5 + volume}` }}
          onChange={(e) => setVolume(e.target.value / 100)}
        ></SoundInput>
      ) : (
        <SoundInput
          type="range"
          value={0}
          style={{ opacity: `${0.5 + volume}` }}
        ></SoundInput>
      )}
    </SoundWrapper>
  );
};

export default Sound;
