import React, { useState } from "react";
import { toast } from "react-toastify";
const ManageSingleOrders = (props) => {
  const { orders, setOrders, setdeleteOrder } = props;

  const {
    status,
    _id,
    paid,
    description,
    name,
    email,
    transactionId,
    image,
    address,
    phone,
    totalPrice,
    quantity,
    UserName,
  } = props.order;

  const changeStatus = (e) => {
    const updatedProduct = {
      status: "Shipped",
    };
    console.log(updatedProduct.quantity);
    fetch(
      `https://assignment-12-server-bl4ckslayer.vercel.app/order?id=${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < orders.length; i++) {
          if (orders[i]._id === _id) {
            orders[i].status = "Shipped";
            console.log(orders[i]);
          }
        }
        toast.success(`Status is updated`);
        setOrders(orders);
      });

    fetch(`https://assignment-12-server-bl4ckslayer.vercel.app/order`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };

  return (
    <div>
      <div className="card w-80 h-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            Product Name: <span className="uppercase text-info">{name}</span>
          </h2>
          <h4 className="card-title text-lg">
            Customer:
            <span className=" text-sm text-info">{UserName}</span>
          </h4>
          <h2 className="card-title">
            Address: <span className="text-sm text-info">{address}</span>
          </h2>

          <h2 className="card-title">
            Email: <span className="text-sm text-info"> {email}</span>
          </h2>
          <h2 className="card-title">
            Phone: <span className="uppercase text-info"> {phone}</span>
          </h2>
          <h2 className="card-title">
            Total: <span className="uppercase text-info">{totalPrice}</span>
          </h2>
          <h2 className="card-title">
            Quantity: <span className="uppercase text-info">{quantity}</span>
          </h2>

          {!paid ? (
            <h4 className="card_title">
              Payment: <span className="text-danger">Pending</span>
            </h4>
          ) : (
            <h4 className="card_title">
              Payment: <span className="text-success">Paid</span>
            </h4>
          )}
          {status === "Pending" ? (
            <h4 className="card_title">
              Status: <span className="text-danger">{status}</span>
            </h4>
          ) : (
            <h4 className="card__title">
              Status: <span className="text-success">{status}</span>
            </h4>
          )}
          {status === "Pending" && paid ? (
            <button
              onClick={() => changeStatus()}
              className="btn btn-success text-center"
            >
              Shipped
            </button>
          ) : (
            <button
              disabled
              onClick={() => changeStatus()}
              className="btn btn-success text-center"
            >
              Shipped
            </button>
          )}
          {!transactionId && (
            <label
              onClick={() => setdeleteOrder(props.order)}
              for="my-modal-6"
              className="btn  btn-error"
            >
              Delete
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageSingleOrders;
