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
import AddProducts from "./Component/Page/Dashboard/AddProducts";
import ManageOrders from "./Component/Page/Dashboard/ManageOrders";
import ManageProducts from "./Component/Page/Dashboard/ManageProducts";
import UpdateProducts from "./Component/Page/Dashboard/UpdateProducts";
import Payment from "./Component/Page/Payment/Payment";
import AllRatings from "./Component/Page/AllRatings/AllRatings";
import Footer from "./Component/Page/Shared/Footer/Footer";
import Blogs from "./Component/Page/Portfolio/Blogs";
import Portfolio from "./Component/Page/Portfolio/Portfolio";
import ErrorRoute from "./Component/Page/Shared/ErrorRoute/ErrorRoute";
function App() {
  return (
    <div>
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
          path="review"
          element={
            <RequireAuth>
              <AllRatings></AllRatings>
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
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>

          <Route path="makeAdmin" element={<AddAdmin></AddAdmin>}></Route>
          <Route
            path="manageProducts"
            element={<ManageProducts></ManageProducts>}
          ></Route>
          <Route
            path="addProducts"
            element={<AddProducts></AddProducts>}
          ></Route>
          <Route
            path="manageOrders"
            element={<ManageOrders></ManageOrders>}
          ></Route>
        </Route>
        <Route
          path="purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="payment/:id"
          element={
            <RequireAuth>
              <Payment></Payment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="update/:id"
          element={
            <RequireAuth>
              <UpdateProducts></UpdateProducts>
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route path="/*" element={<ErrorRoute></ErrorRoute>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
