import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Rating } from "react-simple-star-rating";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddReview = () => {
  // const [rating, setRating] = useState(0);
  // const handleRating = (rate) => {
  //   setRating(rate);
  //   console.log(rating);
  //   // other logic
  // };
  // const [findTools, setFindTools] = FindTools();
  const [user] = useAuthState(auth);
  const EventSubmit = (event) => {
    const newItem = {
      name: event.target.name.value,
      ratings: event.target.ratings.value,
      description: event.target.description.value,
      email: event.target.email.value,
    };

    event.preventDefault();
    const url = `http://localhost:5000/rating`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // setFindTools(result);
      });
    // event.target.reset();
    toast("ratings Added, Check Home page");
    event.target.reset();
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <form
              onSubmit={EventSubmit}
              className=" grid  justify-center items-center content-center my-8"
            >
              <div>
                <label htmlFor="name">Name</label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  class="input input-bordered input-primary w-full max-w-xs grid "
                />
              </div>

              <div>
                <label htmlFor="ratings">ratings</label>
                <input
                  type="text"
                  name="ratings"
                  required
                  placeholder="Rating"
                  class="input input-bordered input-primary w-full max-w-xs   grid"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">
                    What You think about our products,give a small description?
                  </span>
                </label>
                <textarea
                  class="textarea textarea-bordered h-24"
                  placeholder="Description"
                  type="text"
                  name="description"
                ></textarea>
              </div>

              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="text"
                  value={user?.email}
                  readOnly={true}
                  name="email"
                  required
                  class="input input-bordered input-primary w-full max-w-xs grid"
                />
              </div>
              <button className="btn mt-4" type="submit" required>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <Rating className="" onClick={handleRating} ratingValue={rating} /> */}
    </div>
  );
};

export default AddReview;
