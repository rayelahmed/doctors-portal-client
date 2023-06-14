import React from "react";
import { toast } from "react-toastify";

const UsersRow = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("successfuly made an admin");
        }
      });
  };

  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-success text-white">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-error ">Remove User</button>
      </td>
    </tr>
  );
};

export default UsersRow;
