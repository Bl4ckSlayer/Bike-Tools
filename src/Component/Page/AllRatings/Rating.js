import React from "react";

const Rating = ({ tool }) => {
  console.log(tool);
  const { _id, name, image, description } = tool;
  return (
    <div className="card max-w-lg bg-neutral shadow-2xl my-16 text-white">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 block mx-auto mt-5">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="card-body mx-auto text-center">
        <p>{description}</p>
        <h2 className="card-title mx-auto">{name}</h2>
        <div className="rating mx-auto">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Rating;
