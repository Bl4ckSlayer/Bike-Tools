import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import Rating from "./Rating";
const AllRatings = () => {
  const url = `http://localhost:5000/rating`;
  const { data: rating, isLoading } = useQuery("rating", () =>
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
  console.log(rating);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-12 gap-6">
      {rating.length === 0 && <Loading></Loading>}
      {rating.map((tool) => (
        <Rating key={tool._id} tool={tool}></Rating>
      ))}
    </div>
  );
};

export default AllRatings;
