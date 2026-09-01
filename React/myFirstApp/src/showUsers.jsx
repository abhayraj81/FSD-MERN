import { useEffect, useState } from "react";
import api from "./api";
import { Link } from "react-router-dom";

function ShowUsers() {
  console.log("Component Rendered....");

  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUsers() {
    setIsLoading(true);

    try {
      const res = await api.get("/admin/show");
      setUserData(res.data.data);
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1 align="center">Show All Users</h1>
      <hr color="navy" />

      {isLoading && <div className="spinner-border"></div>}

      {userData.length > 0 && (
        <table
          className="table 
                    table-bordered 
                    table-striped 
                    text-center "
        >
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr>
                <td>{user.userName} </td>
                <td>{user.userEmail} </td>
                <td>{user.userRole} </td>
                <td>
                  {user.isActive ? (
                    <span
                      style={{
                        padding: "5px",
                        backgroundColor: "lightgreen",
                        borderRadius: "5px",
                      }}
                    >
                      Active
                    </span>
                  ) : (
                    "Inactive"
                  )}
                </td>
                <td>
                  <Link to={`/edit/${user._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ShowUsers;
