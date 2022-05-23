import React from "react";
import { useNavigate } from "react-router-dom";
const Tools = (props) => {
  const { tool, fromHome } = props;
  const navigate = useNavigate();
  const newPath = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="m-12">
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{tool.name}</h2>
          <h2 className="card-title">{tool._id}</h2>

          <div className="card-actions justify-center">
            <label
              for="booking-modal"
              disabled={tool.length === 0}
              onClick={() => {
                newPath(tool._id);
              }}
              className="btn btn-secondary text-white text-center"
            >
              book Appintment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
