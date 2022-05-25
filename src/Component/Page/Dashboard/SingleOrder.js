import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingleOrder = (props) => {
  const { products, setProducts, setdeleteOrder } = props;
  const navigate = useNavigate();
  const navigateTo = (id) => {
    navigate(`/payment/${id}`);
  };
  const {
    name,
    description,
    img,
    paid,
    price,
    productCode,
    quantity,
    _id,
    status,
    totalPrice,
    transactionId,
  } = props.product;

  const handleBooking = () => {
    console.log("deleted");
    const url = `http://localhost:5000/order?id=${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = products.filter((item) => item._id !== _id);
          //   toast.success("Order successfully deleted");

          setProducts(remaining);
        }
      });
  };
  return (
    <div className="p-5">
      {/* <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label
              for="my-modal-3"
              onClick={() => {
                handleBooking(_id);
              }}
              class="btn"
            >
              Delete
            </label>
          </div>
        </div>
      </div> */}
      <div className="card border-0">
        <img src={img} class="card__image" alt="" />
        <div class="card__overlay">
          <div class="card__header">
            <div class="card__header-text fs-1">
              <h3 class="card__title">{name}</h3>
            </div>
          </div>
          <h4 className="card__description pb-2 fs-5">ddd {description}</h4>

          <h5 className="card__description fs-5 pb-2">Price: ${totalPrice}</h5>
          <h5 className="card__description">Quantity: {quantity}</h5>

          {!paid ? (
            <button
              className="btn btn-secondary mx-4"
              onClick={() => {
                navigateTo(_id);
              }}
            >
              Pay
            </button>
          ) : (
            <div>
              <h4 className="card__title">
                Payment: <span className="text-success">Paid</span>
              </h4>
              <p>
                Transaction ID :
                <span className="text-success">{transactionId}</span>
              </p>
            </div>
          )}
          {paid && status === "Pending" ? (
            <h4 className="card__title">
              Status: <span className="text-danger">{status}</span>
            </h4>
          ) : (
            <h4 className="card__title">
              Status: <span className="text-success">{status}</span>
            </h4>
          )}

          {totalPrice}
          <h1>{quantity}</h1>
          {!paid && (
            <label
              onClick={() => setdeleteOrder(props.product)}
              for="my-modal-6"
              class="btn btn-xs btn-error"
            >
              Delete
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
