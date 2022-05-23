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
  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [tool, id]);
  const { _id, name, quantity, description, price, img } = tool;

  const onSubmit = async (data) => {
    console.log(typeof data.quantity);

    const prevQuantity = parseInt(quantity);
    const newQuantity = parseInt(data.quantity);
    if (newQuantity < 50) {
      return toast.error("minMum quantity is 50");
    }
    if (data.quantity === "" || data.quantity === undefined) {
      return toast.error("Empty Quantity");
    }

    if (newQuantity > prevQuantity) {
      return toast.error("Quantity Excedded");
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
      img: img,
      status: "Pending",
      paid: false,
    };
    console.log(product);
    const oldProduct = {
      quantity: parseInt(prevQuantity - newQuantity),
    };
    fetch(`http://localhost:5000/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(product),
    });
    fetch(`http://localhost:5000/service/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(oldProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`${name} have been updated`);
      });
    reset();
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group w-75 mx-auto">
            <label className="label">
              <span className="label-text">Customer's Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              readOnly
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("userName")}
            />
          </div>

          <div className="input-group w-75 mx-auto">
            <label className="label">
              <span className="label-text">Customer's Email</span>
            </label>
            <input
              type="text"
              value={user?.email}
              readOnly
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
            />
          </div>

          <div className="input-group w-75 mx-auto">
            <label className="label">
              <span className="label-text">Customer's Phone Number</span>
            </label>
            <input
              type="text"
              //   value={newUser[0]?.phone}

              placeholder="Your Phone Number"
              className="input input-bordered w-full max-w-xs"
              {...register("phone")}
            />
          </div>

          <div className="input-group w-75 mx-auto">
            <label className="label">
              <span className="label-text">Customer's Address</span>
            </label>
            <textarea
              type="text"
              placeholder="Your Adress"
              className="input input-bordered w-full max-w-xs"
              {...register("address")}
            />
          </div>

          <div className="input-group w-75 mx-auto">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              value={name}
              readOnly
              placeholder="Product Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name")}
            />
          </div>

          <div className="input-group w-75 mx-auto">
            <label className="label">
              <span className="label-text">Product Code</span>
            </label>
            <input
              type="text"
              placeholder="Product Code"
              value={_id}
              readOnly
              className="input input-bordered w-full max-w-xs"
              {...register("productCode")}
            />
          </div>

          <div className="input-group w-75 mx-auto">
            <label className="label">
              <span className="label-text">Price Per Unit $</span>
            </label>
            <input
              type="number"
              placeholder="Product Price"
              value={price}
              readOnly
              className="input input-bordered w-full max-w-xs"
              {...register("price")}
            />
          </div>

          <div className="input-group w-75 mx-auto">
            <label className="label">
              <span className="label-text">Stored Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Product Quantity"
              value={quantity}
              readOnly
              className="input input-bordered w-full max-w-xs"
              {...register("prevQuantity")}
            />
          </div>

          <div className="input-group w-75 mx-auto">
            <label className="label">
              <span className="label-text">Quantity you want</span>
            </label>
            <input
              type="number"
              placeholder="Product Quantity"
              min={10}
              className="input input-bordered w-full max-w-xs"
              {...register("quantity")}
            />
            <label className="label">
              {errors.quantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.prevQuantity.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="form-submit button-33 w-50 mx-auto mt-4"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
