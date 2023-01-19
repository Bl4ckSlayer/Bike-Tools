import React from "react";
import { toast } from "react-toastify";

const DeleteOrder = ({
  deleteOrder,
  setdeleteOrder,
  setProducts,
  products,
  orders,
  setOrders,
}) => {
  const { _id, name, description, price, quantity } = deleteOrder;

  const handleDelete = () => {
    const url = `https://assignment-12-server-bl4ckslayer.vercel.app/order?id=${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          if (products) {
            const remaining = products.filter((item) => item._id !== _id);
            setProducts(remaining);
          } else {
            const orderRemaining = orders.filter((item) => item._id !== _id);
            setOrders(orderRemaining);
          }

          setdeleteOrder(null);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete ?
          </h3>
          <h4>
            <b>{name}</b>
          </h4>

          <p className="py-4">
            <b>Price:$</b>
            {price}
          </p>
          <div className="my-modal-6">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error mr-6"
            >
              Delete
            </button>
            <label for="my-modal-6" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrder;
