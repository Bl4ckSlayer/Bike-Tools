import "./App.css";
import Navbar from "./Component/Page/Shared/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Page/Home/Home/Home";
import Login from "./Component/Page/Login/Login";
import Signup from "./Component/Page/Login/Signup";
import ManageTools from "./Component/Page/AllTools/ManageTools";
import RequireAuth from "./Component/Page/Login/RequireAuth";
import Purchase from "./Component/Page/Purchase/Purchase";
import Dashboard from "./Component/Page/Dashboard/Dashboard";
import MyProfile from "./Component/Page/Dashboard/MyProfile";
import MyOrders from "./Component/Page/Dashboard/MyOrders";
import AddReview from "./Component/Page/Dashboard/AddReview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddAdmin from "./Component/Page/Admin/AddAdmin";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="manageTools"
          element={
            <RequireAuth>
              <ManageTools></ManageTools>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="makeAdmin" element={<AddAdmin></AddAdmin>}></Route>
          {/* <Route path="myorders" element={<></>}></Route> */}
        </Route>
        <Route
          path="purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
