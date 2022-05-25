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
  const url = `http://localhost:5000/order/${id}`;
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
      <h2 class="text-3xl font-bold text-secondary">Payment </h2>
      <div class="card  bg-base-100 shadow-xl max-w-md my-12">
        <figure class="px-10 pt-10">
          <img src={products?.image} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Name :{products?.name}</h2>
          <h2 class="card-title">Phone : {products?.phone}</h2>
          <h2 class="card-title">Price To Pay :{products?.totalPrice}</h2>
          <h2 class="card-title">Address :{products?.address}</h2>
          <h2 class="card-title">Price: {products?.totalPrice}</h2>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm products={products} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
