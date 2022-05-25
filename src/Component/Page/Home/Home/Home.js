import React from "react";
import AllTools from "../../AllTools/AllTools";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner/Banner2";
import HomeRating from "../HomeRating/HomeRating";
import Stats from "../Stats/Stats";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Banner2></Banner2>
      <AllTools></AllTools>
      <Stats></Stats>
      <HomeRating></HomeRating>
    </div>
  );
};

export default Home;
