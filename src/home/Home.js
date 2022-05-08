import React from "react";
import Topbar from "../components/topbar/Topbar";
import Sounds from "../components/sounds/Sounds";
import { HomeContainer, HomeWrapper } from "./HomeComponents";

const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <Topbar />
        <Sounds />
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
