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
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
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
