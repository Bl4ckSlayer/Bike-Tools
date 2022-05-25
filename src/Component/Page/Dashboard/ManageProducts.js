import React, { useState } from "react";
import Tools from "../AllTools/Tools";
import FindTools from "../Hooks/FindTools";
import Loading from "../Shared/Loading/Loading";
import DeleteProducts from "./DeleteProducts";

const ManageProducts = () => {
  const [findTools, setFindTools] = FindTools();
  const [deleteProduct, setDeleteProduct] = useState(null);

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
            setDeleteProduct={setDeleteProduct}
          ></Tools>
        ))}
      </div>
      {deleteProduct && (
        <DeleteProducts
          deleteProduct={deleteProduct}
          setDeleteProduct={setDeleteProduct}
          setFindTools={setFindTools}
          findTools={findTools}
        ></DeleteProducts>
      )}
    </div>
  );
};

export default ManageProducts;
