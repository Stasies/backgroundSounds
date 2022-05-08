import styled from "styled-components";

export const TopbarContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgba(11, 5, 35, 0.4);
  margin: 0;
`;
export const TopbarWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
`;
export const TopbarLeft = styled.div`
  display: flex;
  gap: 10px;
  /* input {
    align-self: center;
    -webkit-appearance: none;
    width: 100%;
    border-radius: 5px;
    height: 2px;
    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      animate: 0.2s;
      border: none;
      outline: none;
      background: white;
      border-radius: 5px;
      background-color: white;
    }
    &::-webkit-slider-thumb {
      height: 24px;
      width: 11px;
      color: white;
      background-color: white;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -11px;
      border-radius: 2px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    }
  } */
  button {
    border: 2px solid white;
    text-transform: uppercase;
    border-radius: 4px;
    font-size: 11px;
    background-color: transparent;
    color: white;
    /* padding: 3px 16px; */
    width: 90px;
    height: 25px;
    margin-left: 50px;
  }
`;
export const TopbarRight = styled.div``;
