import React from "react";
import FindTools from "../Hooks/FindTools";
import Loading from "../Shared/Loading/Loading";
import Tools from "./Tools";

const ManageTools = () => {
  const [findTools, setFindTools] = FindTools();
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  mb-5">
      {findTools.length === 0 && <Loading></Loading>}
      {findTools.map((tool) => (
        <Tools key={tool._id} tool={tool}></Tools>
      ))}
    </div>
  );
};

export default ManageTools;
