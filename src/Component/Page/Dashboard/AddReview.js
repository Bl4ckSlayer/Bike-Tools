import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
    console.log(rating);
    // other logic
  };

  return (
    <div className="App">
      <Rating className="" onClick={handleRating} ratingValue={rating} />

      <div class="form-control">
        <label class="label">
          <span class="label-text">
            {" "}
            What You think about our products,give a small description?
          </span>
        </label>
        <textarea
          class="textarea textarea-bordered h-24"
          placeholder="Bio"
        ></textarea>
      </div>
      <h1>Rate our Products</h1>
    </div>
  );
};

export default AddReview;
