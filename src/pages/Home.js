import React from "react";
import FourthLook from "../components/home/FourthLook";
import HomeLook from "../components/home/HomeLook";
import SecondLook from "../components/home/SecondLook";
import ThirdLook from "../components/home/ThirdLook";

const Home = () => {
  return (
    <div>
      <HomeLook />
      <SecondLook />
      <ThirdLook />
      <FourthLook />
    </div>
  );
};

export default Home;
