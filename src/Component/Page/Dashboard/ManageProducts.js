import React, { useState } from "react";
import Tools from "../AllTools/Tools";
import FindTools from "../Hooks/FindTools";
import Loading from "../Shared/Loading/Loading";

const ManageProducts = () => {
  const [findTools, setFindTools] = FindTools();

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {findTools.length === 0 && <Loading></Loading>}
        {findTools.map((tool) => (
          <Tools
            key={tool._id}
            tool={tool}
            findTools={findTools}
            setFindTools={setFindTools}
          ></Tools>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
