import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import DeleteOrder from "./DeleteOrder";
import SingleOrder from "./SingleOrder";

const MyOrders = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);

  const [deleteOrder, setdeleteOrder] = useState(null);
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
          setdeleteOrder={setdeleteOrder}
        ></SingleOrder>
      ))}
      {deleteOrder && (
        <DeleteOrder
          deleteOrder={deleteOrder}
          setdeleteOrder={setdeleteOrder}
          setProducts={setProducts}
          products={products}
        ></DeleteOrder>
      )}
    </div>
  );
};

export default MyOrders;
