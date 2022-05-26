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
  // console.log(product);
  useEffect(() => {
    fetch(`https://secure-everglades-11152.herokuapp.com/service?id=${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const onSubmit = async (data) => {
    // console.log(data);

    let image = data.image[0];
    if (!image) {
      image = product[0]?.image;
    }
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
            minOrderQuantity: data.minOrderQuantity,
            image: image,
          };

          fetch(
            `https://secure-everglades-11152.herokuapp.com/service?id=${id}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(updatedProduct),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              fetch(
                `https://secure-everglades-11152.herokuapp.com/service?id=${id}`
              )
                .then((res) => res.json())
                .then((data) => setProduct(data));
              toast.success(`${product[0]?.name}have been updated`);
              reset();
            });
        }
      });
  };

  return (
    <div>
      <div className=" grid  justify-center items-center ">
        <div className="card  w-80 h-full bg-base-100  ">
          <figure className="px-4 pt-6">
            <img src={product[0]?.image} className="h-4/6 " alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Product name: {product[0]?.name}</h2>

            <h2 className="card-title">
              Min Order Quantity : {product[0]?.minOrderQuantity}
            </h2>
            <h2 className="card-title">Quantity : {product[0]?.quantity}</h2>
            <h2 className="card-title">Price : {product[0]?.price}</h2>
            <p>Description: {product[0]?.description} </p>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <figure>
                <img
                  src={product[0]?.image}
                  alt="9e790bb99536fa746850cd1b2d7c954e"
                  className="h-2/4 w-1/4"
                  border="0"
                />
              </figure>

              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
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
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Quantity</span>
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
                    <label className="label">
                      <span className="label-text">Minimum Quantity</span>
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
                      {errors.minOrderQuantity?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.minOrderQuantity.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Image</span>
                    </label>
                    <div className="input-group w-75 mx-auto">
                      <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image")}
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
                    value="Update"
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
