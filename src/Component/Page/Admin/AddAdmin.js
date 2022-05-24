import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import User from "./User";

const AddAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <User
                key={user._id}
                user={user}
                refetch={refetch}
                index={index}
              ></User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddAdmin;
