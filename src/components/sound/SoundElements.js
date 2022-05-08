import styled from "styled-components";

// export const SoundContainer = styled.div``;
export const SoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  gap: 20px;
`;
export const SoundImg = styled.div`
  color: white;
  .sound-icon {
    width: 80px;
    height: 80px;
    opacity: 0.7;
  }
`;
export const SoundName = styled.div`
  color: white;
`;
export const SoundInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  border-radius: 5px;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    animate: 0.2s;
    border: none;
    outline: none;
    background: white;
    border-radius: 5px;
    background-color: white;
  }
  &::-webkit-slider-thumb {
    height: 30px;
    width: 30px;
    color: white;
    background-color: white;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -10px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }
  /* &:focus::-webkit-slider-runnable-track {
    background: #3071a9;
  } */
`;
