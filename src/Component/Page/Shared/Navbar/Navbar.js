// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import auth from "../../../../firebase.init";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { signOut } from "firebase/auth";

// const Navbar = () => {
//   const [user] = useAuthState(auth);
//   const navigate = useNavigate();
//   const logout = () => {
//     signOut(auth);
//     localStorage.removeItem("accessToken");
//     navigate("/");
//   };
//   const menuItems = (
//     <>
//       <li>
//         <Link to="/">Home</Link>
//       </li>

//       <li>
//         <Link to="/review">Review</Link>
//       </li>
//       <li>
//         <Link to="/contact">Contact</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       {user && (
//         <li>
//           <Link to="/dashboard">Dashboard</Link>
//         </li>
//       )}
//       {user && (
//         <li>
//           <Link to="/manageTools">Manage Tools</Link>
//         </li>
//       )}

//       <li>
//         {user ? (
//           <button className="btn btn-ghost" onClick={logout}>
//             Sign Out
//           </button>
//         ) : (
//           <Link to="/login">Login</Link>
//         )}
//       </li>
//     </>
//   );
//   return (
//     <div className="navbar bg-base-100">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex="0" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </label>
//           <ul
//             tabIndex="0"
//             className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             {menuItems}
//           </ul>
//         </div>
//         <Link to="/" className="btn btn-ghost normal-case text-xl">
//           daisyUI
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal p-0">{menuItems}</ul>
//       </div>
//       <div className="navbar-end">
//         {user && <li className="btn">{user?.displayName}</li>}
//         <label
//           tabIndex="1"
//           htmlFor="dashboard-drawer"
//           className="btn btn-ghost lg:hidden"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h8m-8 6h16"
//             />
//           </svg>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/review">Review</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">My Portfolio</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/manageTools">Manage Tools</NavLink>
        </li>
      )}

      <li>
        {user ? (
          <button className="btn btn-ghost" onClick={logout}>
            Sign Out
          </button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Bikers Tools
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user && <li className="btn">{user?.displayName}</li>}
        <label
          tabIndex="1"
          for="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
