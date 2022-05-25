import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Tools = (props) => {
  const { findTools, tool, fromHome, setFindTools } = props;
  // const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const newPath = (id) => {
    navigate(`/purchase/${id}`);
  };
  const updatePath = (id) => {
    navigate(`/update/${id}`);
  };

  const { _id } = props.tool;
  console.log(_id);

  const handleDelete = () => {
    console.log("deleted");
    const url = `http://localhost:5000/service?id=${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = findTools.filter((item) => item._id !== _id);
          toast.success("Order successfully deleted");

          setFindTools(remaining);
        }
      });
  };

  return (
    <div className="m-12">
      {/* delete  */}
      {/* <div>
        <input type="checkbox" id="my-modal-d" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="my-modal-d"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="text-lg font-bold">
              Congratulations random Interner user!
            </h3>
            <p class="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div class="modal-action">
              <label
                for="my-modal-d"
                onClick={() => {
                  handleDelete(_id);
                }}
                class="btn"
              >
                Delete
              </label>
            </div>
          </div>
        </div>
      </div> */}
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{tool.name}</h2>
          <h2 className="card-title">{tool._id}</h2>
          <h2 className="card-title">{tool.quantity}</h2>

          <div className="card-actions justify-center">
            {fromHome !== undefined ? (
              <>
                <label
                  // for="booking-modal"
                  // disabled={tool.length === 0}
                  onClick={() => {
                    newPath(tool._id);
                  }}
                  className="btn modal-button btn-secondary  text-white text-center"
                >
                  Purchase
                </label>
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
                <button
                  // for="my-modal-3"
                  // onClick={() => {
                  //   setModalShow(true);
                  // }}
                  onClick={handleDelete}
                  class="btn btn-secondary text-white text-center"
                >
                  DELETE
                </button>
                {/* <label
                  for="my-modal-d"
                  className="btn btn-secondary  text-white text-center"
                >
                  Delete Item
                </label> */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
