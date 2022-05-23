import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import FindTools from "../Hooks/FindTools";
const AddProducts = () => {
  const [findTools, setFindTools] = FindTools();
  const [user] = useAuthState(auth);
  const EventSubmit = (event) => {
    const newItem = {
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      img: event.target.img.value,
      email: event.target.email.value,
    };

    event.preventDefault();
    const url = `http://localhost:5000/service`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setFindTools(result);
      });
    // event.target.reset();
    toast("Items Added, Check My Products Section");
    event.target.reset();
  };
  return (
    <div className=" flex text-center justify-center items-center content-center">
      <div>
        <div>
          <form onSubmit={EventSubmit}>
            <div className="text-center">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                class="input input-bordered input-primary w-full max-w-xs grid "
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description"
                class="textarea textarea-bordered grid w-80"
                required
              />
            </div>
            <div>
              <label htmlFor="img">Image Url</label>
              <input
                type="text"
                name="img"
                class="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                required
                class="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                name="quantity"
                required
                class="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
              <label htmlFor="supplierName">Supplier Name</label>
              <input
                type="text"
                name="supplierName"
                required
                class="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <input
                type="text"
                value={user?.email}
                readOnly={true}
                name="email"
                required
                class="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <button className="btn mt-4" type="submit" required>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
