import React from "react";

import { toast } from "react-toastify";

import Loading from "../Shared/Loading/Loading";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { isLoading } = useQuery("reviews", () =>
    fetch("http://localhost:5000/rating").then((res) => res.json())
  );

  const imageStorageKey = "4e369d9a8ccc08de599f3e949fd61ac0";
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          const reviews = {
            name: data.name,
            image: image,
            description: data.description,
          };
          // send to your database
          fetch("http://localhost:5000/rating", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(reviews),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("Success!");
                reset();
              } else {
                toast("error");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="text-black grid text-center   mt-20">
      <h2 className="text-4xl  mb-8 font-extrabold text-center">
        Add a Review
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" text-center grid justify-center items-center"
      >
        <div className="form-control w-full max-w-xs">
          <input
            type="number"
            min={1}
            max={5}
            placeholder="Rate Our Product 1 To 5 scale "
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Rating is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="file"
            className="w-full max-w-xs dark:text-white"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Short Description"
            className="input input-bordered w-full max-w-xs"
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>
        <input
          className="btn btn-primary w-full max-w-xs text-white"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default AddReview;
