import React from "react";
import { useQuery } from "react-query";
import Rating from "../../AllRatings/Rating";
import Loading from "../../Shared/Loading/Loading";

const HomeRating = () => {
  const url = `http://localhost:5000/rating`;
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
    <div className="container">
      <h1 className="text-accent  text-center text-3xl font-bold mt-6">
        What people Say About Us
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 gap-6">
        {review.length === 0 && <Loading></Loading>}
        {review.slice(0, 3).map((tool) => (
          <Rating key={tool._id} tool={tool}></Rating>
        ))}
      </div>
    </div>
  );
};

export default HomeRating;
