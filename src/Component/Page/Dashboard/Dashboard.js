import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../Hooks/useAdmin";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        {/* <!-- Page content here --> */}
        <h2 className="text-5xl">Dashboard</h2>

        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard/myprofile">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/myorders">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addreview">Add A Review</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="/dashboard/makeAdmin">Make Admin</Link>
              </li>
              {/* <li>
                <Link to="/dashboard/addDoctor">all Doctor</Link>
              </li>
              <li>
                <Link to="/dashboard/manageDoctor">all Doctor</Link>
              </li> */}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
