import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Tools = (props) => {
  const { findTools, tool, fromHome, setFindTools, setDeleteProduct } = props;
  // const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const newPath = (id) => {
    navigate(`/purchase/${id}`);
  };
  const updatePath = (id) => {
    navigate(`/update/${id}`);
  };

  const { _id, image, name, minOrderQuantity, description, quantity, price } =
    props.tool;
  console.log(_id);

  return (
    <div className="m-12">
      <div className="card w-80 h-full bg-base-100 shadow-xl">
        <figure className="px-4 pt-6">
          <img src={image} className="h-4/6" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Product name: {name}</h2>

          <h2 className="card-title">
            Min Order Quantity : {minOrderQuantity}
          </h2>
          <h2 className="card-title">Quantity : {quantity}</h2>
          <h2 className="card-title">Price : {price}</h2>
          <p>Description: {description} </p>
          <div className="card-actions justify-end">
            {fromHome !== undefined ? (
              <>
                {!quantity ? (
                  <label
                    onClick={() => {
                      newPath(tool._id);
                    }}
                    className="btn  btn-secondary btn-disabled  text-white text-center"
                  >
                    Purchase
                  </label>
                ) : (
                  <label
                    onClick={() => {
                      newPath(tool._id);
                    }}
                    className="btn  btn-secondary   text-white text-center"
                  >
                    Purchase
                  </label>
                )}
              </>
            ) : (
              <>
                <button
                  className="btn btn-secondary text-white text-center"
                  onClick={() => {
                    updatePath(tool._id);
                  }}
                >
                  Update
                </button>
                <label
                  onClick={() => setDeleteProduct(props.tool)}
                  for="my-modal-7"
                  className="btn  btn-secondary  text-white text-center"
                >
                  Delete
                </label>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
