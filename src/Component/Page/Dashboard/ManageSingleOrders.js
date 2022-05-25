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
  } = props.order;

  const changeStatus = (e) => {
    const updatedProduct = {
      status: "Shipped",
    };
    console.log(updatedProduct.quantity);
    fetch(`http://localhost:5000/order?id=${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
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

    fetch(`http://localhost:5000/order`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };
  const handleDelete = () => {
    console.log(_id);
    const url = `http://localhost:5000/order?id=${_id}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = orders.filter((item) => item._id !== _id);
          //   toast.success("Order successfully deleted");

          setOrders(remaining);
        }
      });
  };

  return (
    <div>
      <div class="card w-80 h-full bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={image} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title"> Name: {name}</h2>
          <p>Address:{address}</p>
          <h2 class="card-title"> Email: {email}</h2>
          <h2 class="card-title"> Phone: {phone}</h2>
          <h2 class="card-title"> Total: {totalPrice}</h2>
          <h2 class="card-title"> Quantity: {quantity}</h2>

          {!paid ? (
            <h4 className="card__title">
              Payment: <span className="text-danger">Pending</span>
            </h4>
          ) : (
            <h4 className="card__title">
              Payment: <span className="text-success">Paid</span>
            </h4>
          )}
          {status === "Pending" ? (
            <h4 className="card__title">
              Status: <span className="text-danger">{status}</span>
            </h4>
          ) : (
            <h4 className="card__title">
              Status: <span className="text-success">{status}</span>
            </h4>
          )}
          {status === "Pending" && (
            <div className="col-12">
              <button
                onClick={() => changeStatus()}
                className="btn btn-accent text-white text-center"
              >
                Shipped
              </button>
            </div>
          )}
          {!transactionId && (
            <label
              onClick={() => setdeleteOrder(props.order)}
              for="my-modal-6"
              class="btn  btn-error"
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
