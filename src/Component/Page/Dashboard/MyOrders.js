import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SingleOrder from "./SingleOrder";

const MyOrders = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user]);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <SingleOrder
          key={product._id}
          product={product}
          products={products}
          setProducts={setProducts}
        ></SingleOrder>
      ))}
    </div>
  );
};

export default MyOrders;
