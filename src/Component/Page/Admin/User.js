import React from "react";
import { toast, ToastContainer } from "react-toastify";

const User = ({ user, refetch, index }) => {
  const { email, role, phone, name, address } = user;
  const makeAdmin = () => {
    fetch(`https://secure-everglades-11152.herokuapp.com/user/admin/${email}`, {
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
          toast.success(`Successfully made ${email} an admin`);
        }
      });
  };
  const removeAdmin = () => {
    fetch(
      `https://secure-everglades-11152.herokuapp.com/user/removeAdmin/${email}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403) {
          toast.error(`Failed to Remove ${email} from admin`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully removed ${email} as admin`);
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user?.name}</td>
      <td>{email}</td>

      <td>{phone}</td>
      <td>{user?.address}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        {role === "admin" && (
          <button onClick={() => removeAdmin()} className="btn btn-xs">
            Remove Admin
          </button>
        )}
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default User;
