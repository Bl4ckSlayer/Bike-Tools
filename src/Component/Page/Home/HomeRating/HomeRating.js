import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Rating from "../../AllRatings/Rating";
import Loading from "../../Shared/Loading/Loading";

const HomeRating = () => {
  const navigate = useNavigate();

  const goToManageInventory = () => {
    navigate("/review");
  };
  const url = `https://assignment-12-server-bl4ckslayer.vercel.app/rating`;
  const { data: review, isLoading } = useQuery("rating", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(review);
  return (
    <div>
      <h1 className="text-accent  text-center text-3xl font-bold mt-6">
        What people Say About Us
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 gap-6">
        {review.length === 0 && <Loading></Loading>}
        {review.slice(0, 3).map((tool) => (
          <Rating key={tool._id} tool={tool}></Rating>
        ))}
      </div>
      <div className="text-center mb-5">
        <button
          onClick={() => goToManageInventory()}
          className="btn btn-primary"
        >
          All Review
        </button>
      </div>
    </div>
  );
};

export default HomeRating;
