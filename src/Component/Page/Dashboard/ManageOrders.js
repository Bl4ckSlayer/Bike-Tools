import React, { useEffect, useState } from "react";
import ManageSingleOrders from "./ManageSingleOrders";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {orders.map((order) => (
        <ManageSingleOrders
          key={order._id}
          order={order}
          orders={orders}
          setOrders={setOrders}
        ></ManageSingleOrders>
      ))}
    </div>
  );
};

export default ManageOrders;
