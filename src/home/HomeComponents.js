import styled from "styled-components";
import waves from "../waves.jpg";

export const HomeContainer = styled.div`
  height: fit-content;
`;
export const HomeWrapper = styled.div`
  /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${waves}); */
  background: linear-gradient(rgba(11, 5, 35, 0.7), rgba(11, 5, 35, 0.7)),
    url(${waves});
  background-size: cover;
  height: fit-content;
`;
