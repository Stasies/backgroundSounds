import React, { useState } from "react";
import {
  SoundsContainer,
  SoundsWrapper,
  SoundsText,
  PlayButton,
  AllSounds,
} from "./SoundsElements";
import Sound from "../sound/Sound";
import { data } from "../../data";
import { Pause, PlayArrow } from "@mui/icons-material";

const Sounds = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <SoundsContainer>
      <SoundsWrapper>
        <SoundsText>
          <h1>A SOFT MURMUR</h1>
          <p>Ambient sounds to wash away distraction.</p>
        </SoundsText>
        {/* {isPlaying ? (
          <Pause className="playbutton" onClick={() => setIsPlaying(false)} />
        ) : (
          <PlayArrow
            className="playbutton"
            onClick={() => setIsPlaying(true)}
          />
        )} */}
        <AllSounds>
          {data.map((sound) => (
            <Sound key={sound.id} sound={sound} isPlaying={isPlaying} />
          ))}
        </AllSounds>
      </SoundsWrapper>
    </SoundsContainer>
  );
};

export default Sounds;
