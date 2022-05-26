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
    navigate("/manageTools");
  };
  return (
    <div>
      <div className=" w-50 text-center d-block mx-auto m-4 text-4xl font-bold text-primary ">
        <h1 className=" fw-bolder  mx-auto d-block text-center">Tools</h1>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {findTools.length === 0 && <Loading></Loading>}
        {findTools.slice(0, 6).map((tool) => (
          <Tools key={tool._id} tool={tool} fromHome={fromHome}></Tools>
        ))}
      </div>
      <div className="text-center mb-5">
        <button
          onClick={() => goToManageInventory()}
          className="btn btn-primary"
        >
          All Tools
        </button>
      </div>
    </div>
  );
};

export default AllTools;
