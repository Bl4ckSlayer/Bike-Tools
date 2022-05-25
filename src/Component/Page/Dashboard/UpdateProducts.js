import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
const UpdateProducts = () => {
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "4e369d9a8ccc08de599f3e949fd61ac0";

  const [product, setProduct] = useState([]);
  console.log(product);
  useEffect(() => {
    fetch(`http://localhost:5000/service?id=${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  console.log(product);
  const onSubmit = async (data) => {
    console.log(data);

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    console.log(image);

    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          const image = result.data.url;
          const updatedProduct = {
            price: data.price,
            quantity: data.quantity,
            image: image,
          };

          fetch(`http://localhost:5000/service?id=${id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(updatedProduct),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success(`${product[0]?.name}have been updated`);
            });
        }
      });
  };

  return (
    <div>
      <div className=" grid  justify-center items-center ">
        <div class="card  w-80 h-full bg-base-100  ">
          <figure class="px-4 pt-6">
            <img src={product[0]?.image} className="h-4/6" alt="Movie" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Product name: {product[0]?.name}</h2>

            <h2 class="card-title">
              Min Order Quantity : {product[0]?.minOrderQuantity}
            </h2>
            <h2 class="card-title">Quantity : {product[0]?.quantity}</h2>
            <h2 class="card-title">Price : {product[0]?.price}</h2>
            <p>Description: {product[0]?.description} </p>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <figure>
                <img
                  src={product[0]?.image}
                  alt="9e790bb99536fa746850cd1b2d7c954e"
                  className="h-2/4 w-2/4"
                  border="0"
                />
              </figure>

              <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                  <div className="form-control">
                    <label class="label">
                      <span class="label-text">Price</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Product Price"
                      className="input input-bordered w-full max-w-xs"
                      {...register("price", {
                        required: {
                          value: true,
                          message: "Product Price is Required",
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
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Quantity</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Product Quantity"
                      min={1}
                      className="input input-bordered w-full max-w-xs"
                      {...register("quantity", {
                        required: {
                          value: true,
                          message: "Product Quantity is Required",
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
                    <label class="label">
                      <span class="label-text">Minimum Quantity</span>
                    </label>
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
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Image</span>
                    </label>
                    <div className="input-group w-75 mx-auto">
                      <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                          required: {
                            value: true,
                            message: " ",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.file?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.file.message}
                          </span>
                        )}
                      </label>
                    </div>
                  </div>

                  <input
                    className="btn  btn-primary  mx-auto mt-4"
                    type="submit"
                    value="Order Now !"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProducts;
