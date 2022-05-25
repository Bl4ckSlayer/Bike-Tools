import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import DeleteOrder from "./DeleteOrder";
import ManageSingleOrders from "./ManageSingleOrders";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [deleteOrder, setdeleteOrder] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [deleteOrder]);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {orders.map((order) => (
        <ManageSingleOrders
          key={order._id}
          order={order}
          orders={orders}
          setOrders={setOrders}
          setdeleteOrder={setdeleteOrder}
        ></ManageSingleOrders>
      ))}
      {deleteOrder && (
        <DeleteOrder
          orders={orders}
          setOrders={setOrders}
          deleteOrder={deleteOrder}
          setdeleteOrder={setdeleteOrder}
        ></DeleteOrder>
      )}
    </div>
  );
};

export default ManageOrders;
