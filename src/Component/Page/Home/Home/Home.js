import React from "react";
import AllTools from "../../AllTools/AllTools";
import Banner from "../Banner/Banner";
import HomeRating from "../HomeRating/HomeRating";
import Stats from "../Stats/Stats";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <AllTools></AllTools>
      <Stats></Stats>
      <HomeRating></HomeRating>
    </div>
  );
};

export default Home;
