import React from "react";

const DeleteProducts = ({
  deleteProduct,
  setDeleteProduct,
  setFindTools,
  findTools,
}) => {
  const { _id, name, description, price, quantity } = deleteProduct;

  const handleDelete = () => {
    const url = `http://localhost:5000/service?id=${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = findTools.filter((item) => item._id !== _id);
          //   toast.success("Order successfully deleted");

          setFindTools(remaining);
          setDeleteProduct(null);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-7" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete ?
          </h3>
          <h4>
            <b>Name:</b>
            {name}
          </h4>
          <p class="py-4">
            <b>Details:</b>
            {description}
          </p>
          <p class="py-4">
            <b>Quantity:</b>
            {quantity}
          </p>
          <p class="py-4">
            <b>Price:$</b>
            {price}
          </p>
          <div class="my-modal-7">
            <button
              onClick={() => handleDelete()}
              class="btn btn-xs btn-error mr-6"
            >
              Delete
            </button>
            <label for="my-modal-7" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProducts;