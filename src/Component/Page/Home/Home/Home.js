import React from "react";
import AllTools from "../../AllTools/AllTools";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner/Banner2";
import FindTools from "../../Hooks/FindTools";

import HomeCards from "../Banner/HomeCards";
import HomeCount from "../Banner/HomeCount";
import HomeRating from "../HomeRating/HomeRating";
import Stats from "../Stats/Stats";
import Loading from "../../Shared/Loading/Loading";

const Home = () => {
  const [findTools, setFindTools] = FindTools();
  return (
    <div>
      {findTools.length === 0 && <Loading></Loading>}
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
