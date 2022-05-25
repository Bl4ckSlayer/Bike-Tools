import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="responsive-banner">
      <div className="banner">
        <div className="shopping-image">
          <img
            src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
            alt="shopping"
          />
        </div>

        <div>
          <h4>HOLIDAY SUPERSALE</h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
