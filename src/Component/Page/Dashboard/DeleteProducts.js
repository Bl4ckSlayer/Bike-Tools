import React from "react";

const DeleteProducts = ({
  deleteProduct,
  setDeleteProduct,
  setFindTools,
  findTools,
}) => {
  const { _id, name, description, price, quantity } = deleteProduct;

  const handleDelete = () => {
    const url = `https://secure-everglades-11152.herokuapp.com/service?id=${_id}`;
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
      <input type="checkbox" id="my-modal-7" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete ?
          </h3>
          <h4>
            <b>Name:</b>
            {name}
          </h4>
          <p className="py-4">
            <b>Details:</b>
            {description}
          </p>
          <p className="py-4">
            <b>Quantity:</b>
            {quantity}
          </p>
          <p className="py-4">
            <b>Price:$</b>
            {price}
          </p>
          <div className="my-modal-7">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error mr-6"
            >
              Delete
            </button>
            <label for="my-modal-7" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProducts;
