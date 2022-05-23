import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="responsive-banner">
      {/* <aside class="responsive-banner third">
        <div class="container-envelope">
          <svg class="cirle-a simg" height="160" width="160">
            <circle cx="80" cy="80" r="80" />
          </svg>
          <svg class="cirle-b simg" height="60" width="60">
            <circle cx="30" cy="30" r="30" />
          </svg>
          <svg class="cirle-c simg" height="600" width="600">
            <circle cx="300" cy="300" r="300" />
          </svg>
          <svg class="cirle-d simg" height="60" width="60">
            <circle cx="30" cy="30" r="30" />
          </svg>
          <img
            className="bimg"
            src="https://i.pinimg.com/originals/f2/d1/f9/f2d1f900f688ddca0765ec8e2d3900e1.png"
            alt="img"
          />
          <div class="col-xs-12">
            <p>Live Sites using our WordPress Themes</p>
            <Link
              to="https://www.silocreativo.com/en/showcase/"
              alt="img"
              class="more-link"
            >
              Get inspired
            </Link>
          </div>
        </div>
      </aside> */}

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
