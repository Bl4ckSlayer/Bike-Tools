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
    paid,
    price,
    productCode,
    quantity,
    _id,
    status,
    totalPrice,
    transactionId,
    image,
    address,
    email,
    phone,
  } = props.product;

  return (
    <div className="p-5">
      <div className="card w-80 h-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl h-3/4" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            Product Name: <span className="uppercase text-info">{name}</span>
          </h2>
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
          {paid && status === "Pending" ? (
            <h4 className="card__title">
              Order Status: <span className="text-error">{status}</span>
            </h4>
          ) : (
            <h4 className="card__title">
              Order Status: <span className="text-success">{status}</span>
            </h4>
          )}
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
              <h4 className="card_title">
                Payment Status: <span className="text-success">Paid</span>
              </h4>
              <h4 className="card_title ">
                Transaction ID:
                <span className="text-success text-sm"> {transactionId}</span>
              </h4>
            </div>
          )}

          {!paid && (
            <label
              onClick={() => setdeleteOrder(props.product)}
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

export default SingleOrder;
