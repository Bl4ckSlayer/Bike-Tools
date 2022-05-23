import React from "react";
import { useNavigate } from "react-router-dom";
import FindTools from "../Hooks/FindTools";
import Loading from "../Shared/Loading/Loading";
import Tools from "./Tools";

const AllTools = () => {
  const [findTools, setFindTools] = FindTools();
  const navigate = useNavigate();
  let fromHome = 1;
  const goToManageInventory = () => {
    navigate("/manageinventory");
  };
  return (
    <div className="container">
      <div
        className="button-85 w-50 text-center d-block mx-auto m-4 "
        style={{ cursor: "default" }}
      >
        <h1
          className=" fw-bolder  mx-auto d-block text-center  "
          style={{ fontSize: "1.5em" }}
        >
          Products
        </h1>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  mb-5">
        {findTools.length === 0 && <Loading></Loading>}
        {findTools.slice(0, 3).map((tool) => (
          <Tools key={tool._id} tool={tool} fromHome={fromHome}></Tools>
        ))}
      </div>
      <div className="text-center mb-5">
        <button
          onClick={() => goToManageInventory()}
          className="button-51 mt-5"
        >
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default AllTools;
