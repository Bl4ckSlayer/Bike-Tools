// import React from "react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
const UpdateProfile = ({ treatment, setTreatment, refetch }) => {
  const { name } = treatment;
  const [user] = useAuthState(auth);
  console.log(treatment);
  const handleBooking = (event) => {
    event.preventDefault();
    const users = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
    };
    fetch(
      `https://assignment-12-server-bl4ckslayer.vercel.app/user/update/${user?.email}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(users),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          refetch();
          toast(`Congrates your submition ios complete`);
        } else {
          toast.error(`you already havedata`);
        }
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle " />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{name}</h3>

          <form
            onSubmit={handleBooking}
            className="grid text-center items-center justify-center grid-1 gap-4 my-10"
          >
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="name"
              placeholder="Address"
              value={user?.displayName || ""}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <label htmlFor="address">Address</label>
            <input
              name="address"
              placeholder="address"
              type="text"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              type="phone"
              placeholder="Number"
              required
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="submit"
              value="Update"
              className="btn w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
