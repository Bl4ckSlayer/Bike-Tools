import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import UpdateProfile from "./UpdateProfile";
import Loading from "../Shared/Loading/Loading";
import { useQuery } from "react-query";
const MyProfile = () => {
  // const [users, setUsers] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [treatment, setTreatment] = useState(null);

  // console.log(user.email);
  const {
    data: myUsers,
    isLoading,
    refetch,
  } = useQuery("myUsers", () =>
    fetch(`http://localhost:5000/user?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/user?email=${user?.email}`, {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status === 401 || res.status === 403) {
  //         signOut(auth);
  //         localStorage.removeItem("accessToken");
  //         navigate("/");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log("data", data[0]);
  //       setUsers(data[0]);
  //     });
  // }, [user]);

  // if (loading) {
  //   return <Loading></Loading>;
  // }

  console.log(myUsers);

  return (
    <div>
      <h1 className="card-title">My Profile</h1>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/VNDY79z/9e790bb99536fa746850cd1b2d7c954e.jpg"
            alt="9e790bb99536fa746850cd1b2d7c954e"
            className="h-2/4 w-1/4"
            border="0"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Name : {myUsers[0]?.name}</h2>
          <h2 class="card-title">Email : {myUsers[0]?.email}</h2>
          <h2 class="card-title">Address : {myUsers[0]?.address}</h2>
          <h2 class="card-title">Phone : {myUsers[0]?.phone}</h2>

          <div class="card-actions justify-end">
            <label
              for="booking-modal"
              onClick={() => {
                setTreatment(myUsers[0]);
              }}
              class="btn modal-button btn-secondary text-white text-center"
            >
              Update Profile
            </label>
          </div>
        </div>
      </div>

      {treatment && (
        <UpdateProfile
          key={myUsers[0]?._id}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></UpdateProfile>
      )}
    </div>
  );
};

export default MyProfile;
