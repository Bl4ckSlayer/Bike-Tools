import React from "react";
import FindTools from "../Hooks/FindTools";
import Loading from "../Shared/Loading/Loading";
import Tools from "./Tools";

const ManageTools = () => {
  const [findTools, setFindTools] = FindTools();
  let fromHome = 1;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {findTools.length === 0 && <Loading></Loading>}
      {findTools.map((tool) => (
        <Tools key={tool._id} tool={tool} fromHome={fromHome}></Tools>
      ))}
    </div>
  );
};

export default ManageTools;
