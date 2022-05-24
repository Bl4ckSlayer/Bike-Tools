import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
const UpdateProducts = () => {
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  // const imageStorage_key = process.env.REACT_APP_imageStorage_key;

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/service?id=${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  console.log(product);
  const onSubmit = async (data) => {
    // console.log(data);

    // const image = data.image[0];
    // const formData = new FormData();
    // formData.append('image', image);

    // console.log(image);

    // const url = `https://api.imgbb.com/1/upload?key=${imageStorage_key}`
    // fetch(url, {
    //     method: 'POST',
    //     body: formData
    // })
    //     .then(res => res.json())
    //     .then(result => {
    //         console.log(result);
    //         if (result.success) {
    //             const img = result.data.url;
    //             const updatedProduct = {
    //                 name: product[0]?.name,
    //                 description: product[0]?.description,
    //                 price: data.price,
    //                 productCode: product[0]?.productCode,
    //                 quantity: data.quantity,
    //                 img: img
    //             }
    const updatedProduct = {
      quantity: data.quantity,
    };
    console.log(product);
    fetch(`http://localhost:5000/service?id=${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`${product[0]?.name}have been updated`);
      });
  };

  return (
    <div>
      <div style={{ margin: "0 0 1050px 0" }} class="page-add">
        <div class="container-add">
          <div class="left-add">
            <div class="login">Add Products</div>
            {/* <img src={addImg} className="img-fluid" alt="" /> */}
          </div>

          <div class="right-add d-flex align-items-center justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group w-75 mx-auto">
                <label className="label">
                  <span className="label-text">Price Per Unit $</span>
                </label>
                <input
                  type="number"
                  placeholder="Product Price"
                  className="input input-bordered w-full max-w-xs"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Product Price is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.price?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.price.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="input-group w-75 mx-auto">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Product Quantity"
                  min={1}
                  className="input input-bordered w-full max-w-xs"
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "Product Quantity is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.quantity?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="input-group w-75 mx-auto">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  className="input input-bordered w-full max-w-xs"
                  {...register("image", {
                    required: {
                      value: true,
                      message: " ",
                    },
                  })}
                />
                <label className="label">
                  {errors.file?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.file.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="form-submit button-33 w-75 mx-auto mt-4"
                type="submit"
                value="Add"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
