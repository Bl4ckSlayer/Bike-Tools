import React from "react";
import { FaBeer } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { ImHappy2 } from "react-icons/im";

const Stats = () => {
  return (
    <div className="bg-neutral  text-center">
      <h1 className="text-accent  text-3xl font-bold">
        What We share in Market Place
      </h1>
      <div class="m-10 w-3/4 stats stats-vertical lg:stats-horizontal stats shadow ">
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Total Likes</div>
          <span className="grid  justify-center text-rose-800 text-4xl">
            <ImHappy2 />
          </span>
          <div class="stat-value text-primary ">25.6K</div>
          <div class="stat-desc">50% more than last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Total Sold Products</div>
          <span className="grid  justify-center text-5xl text-accent">
            <MdOutlinePayments />
          </span>
          <div class="stat-value text-secondary ">2.6M</div>
          <div class="stat-desc">61% more than last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <div class="avatar online">
              <div class="w-22 rounded-full">
                <div class="avatar-group -space-x-6">
                  <div class="avatar">
                    <div class="w-12">
                      <img
                        src="https://api.lorem.space/image/face?hash=4818"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="avatar">
                    <div class="w-12">
                      <img
                        src="https://api.lorem.space/image/face?hash=40311"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="avatar">
                    <div class="w-12">
                      <img src="https://api.lorem.space/image/face?hash=84348" />
                    </div>
                  </div>
                  <div class="avatar placeholder">
                    <div class="w-12 bg-neutral-focus text-neutral-content">
                      <span>+99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="grid  justify-center text-7xl text-secondary">
            <IoIosPeople />
          </span>
          <div class="stat-value">86%</div>
          <div class="stat-title">Tasks done</div>
          <div class="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
