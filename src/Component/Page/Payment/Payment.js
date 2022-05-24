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
    <div className=" justify-center content-center text-center items-center">
      <div class="card w-50 bg-base-100 shadow-xl max-w-md my-12">
        <div class="card-body">
          <h2 class="card-title">{products?.name}</h2>
          <p>{products?.phone}</p>
          <p>{products?.totalPrice}</p>
          {/* <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div> */}
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
