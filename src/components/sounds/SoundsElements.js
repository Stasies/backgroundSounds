import styled from "styled-components";

export const SoundsContainer = styled.div`
  height: fit-content;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SoundsWrapper = styled.div`
  margin: 60px 0;
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  .playbutton {
    width: 170px;
    height: 170px;
    color: white;
    margin: 20px 0;
  }
`;
export const SoundsText = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  h1 {
    font-size: 60px;
    margin: 10px 0;
    text-align: center;
  }
  p {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const PlayButton = styled.button``;
export const AllSounds = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 80px;
  @media screen and (max-width: 370px) {
    gap: 40px;
  }
`;
