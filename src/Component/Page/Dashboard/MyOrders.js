import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import DeleteOrder from "./DeleteOrder";
import SingleOrder from "./SingleOrder";

const MyOrders = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const goToManageInventory = () => {
    navigate("/manageTools");
  };

  const [deleteOrder, setdeleteOrder] = useState(null);
  useEffect(() => {
    fetch(
      `https://assignment-12-server-bl4ckslayer.vercel.app/order?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user]);
  return (
    <>
      <h2 className="text-4xl mb-8 font-extrabold text-center grid text-accent ">
        My Order
      </h2>
      {products.length === 0 && (
        <div className="text-center mb-5">
          <h2 className="text-4xl mb-8 font-extrabold text-center grid text-error ">
            No Order Found Go to All Tools To order
          </h2>
          <button
            onClick={() => goToManageInventory()}
            className="btn btn-primary"
          >
            All Tools
          </button>
        </div>
      )}
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
    </>
  );
};

export default MyOrders;
