import React from "react";
import { toast, ToastContainer } from "react-toastify";

const User = ({ user, refetch, index }) => {
  const { email, role, phone, name } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made ${name} an admin`);
        }
      });
  };
  const removeAdmin = () => {
    fetch(`http://localhost:5000/user/removeAdmin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error(`Failed to Remove ${name} from admin`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully removed ${name} as admin`);
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="button-33">
            Make Admin
          </button>
        )}
      </td>
      <td>
        {role === "admin" && (
          <button onClick={() => removeAdmin()} class="button-33">
            Remove Admin
          </button>
        )}
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default User;
