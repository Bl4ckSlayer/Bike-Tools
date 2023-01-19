import React, { useEffect, useState } from "react";

import DeleteOrder from "./DeleteOrder";
import ManageSingleOrders from "./ManageSingleOrders";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [deleteOrder, setdeleteOrder] = useState(null);

  useEffect(() => {
    fetch("https://assignment-12-server-bl4ckslayer.vercel.app/order", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [deleteOrder]);
  return (
    <div>
      <h2 className="text-4xl mb-8 font-extrabold text-center grid ">
        Manage Order
      </h2>
      {orders.length === 0 && (
        <h2 className="text-4xl mb-8 font-extrabold text-center grid text-error ">
          No Order Found
        </h2>
      )}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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
    </div>
  );
};

export default ManageOrders;
