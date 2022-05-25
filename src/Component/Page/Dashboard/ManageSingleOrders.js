import React, { useState } from "react";
import { toast } from "react-toastify";
const ManageSingleOrders = (props) => {
  const { orders, setOrders, setdeleteOrder } = props;

  const { status, _id, paid, description, name, email, transactionId } =
    props.order;

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
      <div className="p-5">
        <div className="card border-0">
          {/* <img src={img} class="card__image" alt="" /> */}
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text fs-1">
                {/* <h3 class="card__title">{name}</h3> */}
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
              </div>
            </div>
            <h4 className="card__description pb-2 fs-5">{description}</h4>
            <h4 className="card__description pb-2 fs-5">{_id}</h4>
            <h4 className="card__description pb-2 fs-5">{name}</h4>
            <h4 className="card__description pb-2 fs-5">{email}</h4>

            <h5 className="card__description fs-5 pb-2">
              {/* Price: ${totalPrice} */}
            </h5>
            {/* <h5 className="card__description">Quantity: {quantity}</h5> */}
            {status === "Pending" && (
              <div className="col-12">
                <button
                  onClick={() => changeStatus()}
                  className="btn btn-secondary text-white text-center"
                >
                  Shipped
                </button>
              </div>
            )}
            {(!transactionId || !paid) && (
              <label
                onClick={() => setdeleteOrder(props.order)}
                for="my-modal-6"
                class="btn btn-xs btn-error"
              >
                Delete
              </label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSingleOrders;
