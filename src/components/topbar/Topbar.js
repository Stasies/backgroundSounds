import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import {
  TopbarWrapper,
  TopbarContainer,
  TopbarLeft,
  TopbarRight,
} from "./TopbarElements";

const Topbar = () => {
  const [muted, setMuted] = useState(false);
  const { isPlaying, dispatch } = useContext(Context);
  const playing = (value) => {
    if (value) {
      dispatch({ type: "START_PLAYING", payload: isPlaying });
      setMuted(false);
    } else {
      dispatch({ type: "STOP_PLAYING", payload: isPlaying });
      setMuted(true);
    }
  };

  return (
    <TopbarContainer>
      <TopbarWrapper>
        <TopbarLeft>
          {muted ? (
            <button onClick={() => playing(true)}>unmute</button>
          ) : (
            <button onClick={() => playing(false)}>mute</button>
          )}
        </TopbarLeft>
        <TopbarRight></TopbarRight>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
