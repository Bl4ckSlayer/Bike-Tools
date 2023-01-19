import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L34LaFarhdULPTiwp5Bo5ES6mmrYoJP3GOO700RidwfvCQGIXj5CgTOChEap1rG2TIM6wuPthQZcPVThfo39W7j00LRTqniA5"
);
const Payment = () => {
  const { id } = useParams();
  const url = `https://assignment-12-server-bl4ckslayer.vercel.app/order/${id}`;
  const { data: products, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(products);
  return (
    <div className=" grid  text-center justify-center">
      <h2 className="text-3xl font-bold text-secondary">Payment </h2>
      <div className="card  bg-base-100 shadow-xl max-w-md my-12">
        <figure className="px-10 pt-10">
          <img src={products?.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Hi !!! <span className="text-accent">{products?.UserName} </span>
          </h2>
          <h2 className="card-title">
            Please pay
            <span className="text-accent">{products?.totalPrice}$</span> to
            confirm your order{" "}
            <span className="text-accent">{products?.name}</span>
          </h2>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm products={products} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
