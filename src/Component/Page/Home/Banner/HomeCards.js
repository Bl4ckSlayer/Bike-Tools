import React from "react";
import { useNavigate } from "react-router-dom";

const HomeCards = () => {
  const navigate = useNavigate();
  return (
    <div
      class="hero min-h-screen hhhh-card"
      style={{ backgroundColor: "rgba(36, 36, 36, 0.95)" }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">
            ROAD TO YOUR FIRST 100 MILE SPORTIVE
          </h1>
          <p class="mb-5">
            Just signed up for your first 100 miler? We’ve got the ultimate
            e-guide to prepare for the big day. Produced in collaboration with
            UK ex-professional rider Dean Downing, it tells you everything you
            need to know to get ready. We’ll teach you: How to ride at the same
            speed using 30% less energy. The biggest mistakes when setting up
            your bike and the tools to complete your first 100 mile sportive
          </p>
          <button class="btn btn-primary" onClick={() => navigate("/review")}>
            {" "}
            See All Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
