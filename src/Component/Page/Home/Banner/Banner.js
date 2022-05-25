import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="responsive-banner">
      <div className="banner">
        <img
          src="https://i.ibb.co/YZfWknM/best-bike-social-media-banner-template-412608-1189.webp"
          className="w-1/4"
          alt="shopping"
        />

        <div className="mt-10 grid justify-center items-center text-center ">
          <h4 className=" text-center text-5xl font-bold text-slate-800">
            On-Bike Tools
          </h4>
          <p className="ml-4 text-neutral-content text-xl justify-center items-center text-center ">
            Make bike repairs and perform general maintenance with our bicycle
            tool kits. We have all the cycling tools you'll need including
            things to repair flat bike tires, make adjustments to the cycles
            chain and even wall mounts and covers to store your bicycle safely
            and out of the way.
          </p>
        </div>
        <img
          src="https://i.ibb.co/YZfWknM/best-bike-social-media-banner-template-412608-1189.webp"
          className=" w-1/4"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
