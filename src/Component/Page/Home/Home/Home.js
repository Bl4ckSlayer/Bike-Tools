import React from "react";
import AllTools from "../../AllTools/AllTools";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner/Banner2";

import HomeCards from "../Banner/HomeCards";
import HomeCount from "../Banner/HomeCount";
import HomeRating from "../HomeRating/HomeRating";
import Stats from "../Stats/Stats";

const Home = () => {
  return (
    <div>
      <Banner2></Banner2>
      <Banner></Banner>
      <AllTools></AllTools>
      <Stats></Stats>
      <HomeRating></HomeRating>
      <HomeCount></HomeCount>
      <HomeCards></HomeCards>
    </div>
  );
};

export default Home;
