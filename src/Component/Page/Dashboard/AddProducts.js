import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import FindTools from "../Hooks/FindTools";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
const AddProducts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { isLoading } = useQuery("service", () =>
    fetch("https://secure-everglades-11152.herokuapp.com/service").then((res) =>
      res.json()
    )
  );
  const [findTools, setFindTools] = FindTools();
  const [user] = useAuthState(auth);
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
          const product = {
            name: data.name,
            image: image,
            description: data.description,
            minOrderQuantity: data.minOrderQuantity,
            quantity: data.quantity,
            price: data.price,
          };

          fetch("https://secure-everglades-11152.herokuapp.com/service", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("Success!", "Product Added Successfully!", "success");
                reset();
              } else {
                toast(`error`);
              }
            });
        }
      });
  };
  return (
    <div className="text-black    mt-16 ">
      <h2 className="text-4xl mb-8 font-extrabold text-center grid ">
        Add a New Product
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid items-center justify-center"
      >
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
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
          <label className="text-secondary">Image</label>
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
        <div className="form-control w-full max-w-xs">
          <input
            type="number"
            placeholder="Minimum Order Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("minOrderQuantity", {
              required: {
                value: true,
                message: "Minimum Order Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.naminOrderQuantityme?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.minOrderQuantity.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="number"
            placeholder="Available Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("quantity", {
              required: {
                value: true,
                message: "Available Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.quantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.quantity.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "Price is Required",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn btn-primary w-full max-w-xs text-white"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProducts;
