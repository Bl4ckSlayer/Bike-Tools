import React from "react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
const UpdateProfile = ({ treatment, setTreatment }) => {
  const { name, _id } = treatment;
  const [user] = useAuthState(auth);
  console.log(treatment);
  const handleBooking = (event) => {
    event.preventDefault();
    const users = {
      _id: _id,
      name: event.target.name.value,
      email: user?.email,
      phone: event.target.phone.value,
    };
    fetch(`http://localhost:5000/user/update/${user?.email}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Congrates your submition ios complete`);
        } else {
          toast.error(`you already havedata`);
        }
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle " />
      <div class="modal modal-bottom sm:modal-middle ">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">{name}</h3>

          <form onSubmit={handleBooking} className="grid grid-1 gap-4 my-10">
            <input
              name="name"
              type="name"
              value={user?.displayName || ""}
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              disabled
              value={user?.email || ""}
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              name="phone"
              type="phone"
              placeholder="Number"
              required
              class="input input-bordered input-primary w-full max-w-xs"
            />

            <input type="submit" value="Submit" class="btn w-full max-w-xs" />
          </form>
          <div class="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
