import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [tool, setTool] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "4e369d9a8ccc08de599f3e949fd61ac0";
  useEffect(() => {
    fetch(`https://assignment-12-server-bl4ckslayer.vercel.app/purchase/${id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);
  const { _id, name, quantity, description, price, image, minOrderQuantity } =
    tool;
  console.log(tool);
  const onSubmit = async (data) => {
    // console.log(typeof data.quantity);
    // console.log(data.quantity, data.minQuantity);

    const prevQuantity = parseInt(quantity);
    const newQuantity = parseInt(data.quantity);
    const minQuantity = parseInt(minOrderQuantity);
    console.log(minQuantity);

    if (data.quantity === "" || data.quantity === undefined) {
      return toast.error("Empty Quantity");
    }

    if (newQuantity > prevQuantity) {
      return toast.error("Quantity Excedded");
    }

    if (newQuantity < minQuantity) {
      return toast.error("minimum quantity is required");
    }

    const product = {
      UserName: data.userName,
      phone: data.phone,
      address: data.address,
      name: name,
      email: user?.email,
      price: price,
      totalPrice: parseInt(parseInt(newQuantity) * parseInt(price)),
      productCode: data.productCode,
      quantity: newQuantity,
      image: image,
      status: "Pending",
      paid: false,
    };
    console.log(product);
    const oldProduct = {
      quantity: parseInt(prevQuantity - newQuantity),
    };
    fetch(`https://assignment-12-server-bl4ckslayer.vercel.app/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(product),
    });
    fetch(`https://assignment-12-server-bl4ckslayer.vercel.app/service/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(oldProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`${name} has been ordered Please check my order`);
        fetch(
          `https://assignment-12-server-bl4ckslayer.vercel.app/purchase/${id}`
        )
          .then((res) => res.json())
          .then((data) => setTool(data));
      });
    reset();
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <figure>
                <img src={image} alt="" className="" />
              </figure>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <div className="input-group w-75 mx-auto">
                      <input
                        type="text"
                        value={user?.displayName}
                        readOnly
                        placeholder="Your Name"
                        className="input input-bordered text-xl font-bold "
                        {...register("userName")}
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      value={user?.email}
                      readOnly
                      placeholder="Your Email"
                      className="input input-bordered text-lg font-semibold"
                      {...register("email")}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Number</span>
                    </label>
                    <div className="input-group w-75 mx-auto">
                      <input
                        type="text"
                        placeholder="Your Phone Number"
                        className="input input-bordered text-lg font-semibold w-full max-w-xs"
                        {...register("phone")}
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <div className="input-group w-75 mx-auto">
                      <textarea
                        type="text"
                        placeholder="Your Address"
                        className="input input-bordered text-lg font-semibold w-full max-w-xs"
                        {...register("address")}
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <div className="input-group w-75 mx-auto">
                      <input
                        type="text"
                        value={name}
                        readOnly
                        placeholder="Product Name"
                        className="input input-bordered text-lg font-semibold w-full max-w-xs"
                        {...register("name")}
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price Per Unit</span>
                    </label>
                    <div className="input-group w-75 mx-auto">
                      <input
                        type="number"
                        placeholder="Product Price"
                        value={price}
                        readOnly
                        className="input input-bordered text-lg font-semibold w-full max-w-xs"
                        {...register("price")}
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Available Products</span>
                    </label>
                    <div className="input-group w-75 mx-auto">
                      <input
                        type="text"
                        placeholder="Product Quantity"
                        value={quantity}
                        className="input input-bordered text-lg font-semibold w-full max-w-xs"
                        {...register("prevQuantity")}
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Minimum Quantity To Order
                      </span>
                    </label>
                    <div className="input-group w-75 mx-auto">
                      <input
                        type="text"
                        placeholder="Product Quantity"
                        value={minOrderQuantity}
                        className="input input-bordered text-lg font-semibold w-full max-w-xs"
                        {...register("minQuantity")}
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Input Your Quantity</span>
                    </label>
                    <div className="input-group w-75 mx-auto">
                      <input
                        type="number"
                        placeholder="Product Quantity"
                        defaultValue={minOrderQuantity}
                        // min={minOrderQuantity}
                        className="input input-bordered w-full max-w-xs"
                        {...register("quantity", {
                          required: {
                            value: true,
                            message: "Product Quantity is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors?.quantity?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors?.prevQuantity?.message}
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                  {quantity < minOrderQuantity ? (
                    <input
                      className="btn  btn-primary  mx-auto mt-4"
                      disabled
                      type="submit"
                      value="Order Now !"
                    />
                  ) : (
                    <input
                      className="btn  btn-primary  mx-auto mt-4"
                      type="submit"
                      value="Order Now !"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
