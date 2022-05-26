import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../Hooks/useAdmin";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        <h2 className="text-5xl">Dashboard</h2>
        <Outlet></Outlet>
      </div>

      <div className="drawer-side">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <NavLink to="/dashboard/myprofile">My Profile</NavLink>
          </li>
          {user && !admin && (
            <>
              <li>
                <NavLink to="/dashboard/myorders">My Orders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addreview">Add A Review</NavLink>
              </li>
            </>
          )}

          {admin && (
            <>
              <li>
                <NavLink to="/dashboard/makeAdmin">Make Admin</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addProducts">Add products</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageOrders">Manage Orders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageProducts">
                  Manage Products
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
