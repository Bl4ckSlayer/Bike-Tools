import React from "react";

const Rating = ({ tool }) => {
  console.log(tool);
  const { _id, name, image, description } = tool;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
      </div>
      <figure>
        <img src={image} className="w-3/4 h-3/4" alt="Shoes" />
      </figure>
    </div>
  );
};

export default Rating;
