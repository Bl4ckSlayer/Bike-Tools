import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import UpdateProfile from "./UpdateProfile";
import Loading from "../Shared/Loading/Loading";

const MyProfile = () => {
  const [users, setUsers] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [treatment, setTreatment] = useState(null);
  const navigate = useNavigate();

  // console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:5000/user?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {
        console.log("data", data[0]);
        setUsers(data[0]);
      });
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

  console.log(users);

  return (
    <div>
      <h1>{users?.address}</h1>
      <h1>{users?.name}</h1>
      <h1>{users?.email}</h1>
      <h1>{users?.phone}</h1>{" "}
      <div class="card-actions justify-center">
        <label
          for="booking-modal"
          onClick={() => {
            setTreatment(users);
          }}
          class="btn modal-button btn-secondary text-white text-center"
        >
          Update Profile
        </label>
      </div>
      {treatment && (
        <UpdateProfile
          key={users._id}
          treatment={treatment}
          setTreatment={setTreatment}
          setUsers={setUsers}
        ></UpdateProfile>
      )}
    </div>
  );
};

export default MyProfile;
// import { signOut } from "firebase/auth";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../../firebase.init";
// import UpdateProfile from "./UpdateProfile";
// import axiosPrivate from "../../../Api/AxiosPrivate";

// const MyProfile = () => {
//   const [users, setUsers] = useState([]);
//   const [user] = useAuthState(auth);
//   const [treatment, setTreatment] = useState(null);
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   if (user) {
//   //     fetch(`http://localhost:5000/user?client=${user.email}`, {
//   //       method: "GET",
//   //       headers: {
//   //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//   //       },
//   //     })
//   //       .then((res) => {
//   //         console.log("res", res);
//   //         if (res.status === 401 || res.status === 403) {
//   //           signOut(auth);
//   //           localStorage.removeItem("accessToken");
//   //           navigate("/");
//   //         }
//   //         return res.json();
//   //       })
//   //       .then((data) => {
//   //         console.log("data", data);
//   //         setUsers(data);
//   //       });
//   //   }
//   // }, [user, users]);
//   // useEffect(() => {
//   //   const getMtItems = async () => {
//   //     const email = user?.email;
//   //     const url = `http://localhost:5000/user?email=${email}`;
//   //     try {
//   //       const { data } = await axiosPrivate.get(url);
//   //       setUsers(data[0]);
//   //       console.log(users);
//   //     } catch (error) {
//   //       if (error.response.status === 401 || error.response.status === 403) {
//   //         signOut(auth);
//   //         navigate("/login");
//   //       }
//   //     }
//   //   };
//   //   getMtItems();
//   // }, [user, users]);

//   useEffect(() => {
//     fetch(`http://localhost:5000/user?email=${user?.email}`, {
//       method: "GET",
//       headers: {
//         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, [users]);

//   return (
//     <div>
//       <h1>{users._id}</h1>
//       <h1>{users.name}</h1>
//       <h1>{users.email}</h1>
//       <h1>{users.phone}</h1>
//       <div class="card-actions justify-center">
//         <label
//           for="booking-modal"
//           onClick={() => {
//             setTreatment(users);
//           }}
//           class="btn btn-secondary text-white text-center"
//         >
//           Update Profile
//         </label>
//       </div>
//       {treatment && (
//         <UpdateProfile
//           key={user._id}
//           treatment={treatment}
//           setTreatment={setTreatment}
//         ></UpdateProfile>
//       )}
//     </div>
//   );
// };

// export default MyProfile;
