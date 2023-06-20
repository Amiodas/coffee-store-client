import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../Header/Header";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  //   /* eslint-disable no-unused-vars */
  const { _id, name, quantity, supplier, taste, category, details, photoURL } =
    coffee;

  const handleUpdateCoffee = () => {
    console.log("Update");
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };

    console.log(updatedCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successful!",
            text: "Coffee updated successful",
            icon: "success",
            confirmButtonText: "Good day!!!",
          });
        }
      });
  };
  return (
    <div>
      <Header />
      <div className="container mx-auto bg-[#f4f3f0] p-24 my-16">
        <h3 className="text-3xl font-extrabold text-center mb-10">
          Update Coffee: {name}
        </h3>
        <form onSubmit={handleUpdateCoffee}>
          {/* Name and quantity row */}
          <div className="md:flex gap-4 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Coffee Name"
                  className="input input-bordered w-full bg-white border-0 bg-white border-0"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Available Quantity"
                  className="input input-bordered w-full bg-white border-0 bg-white border-0"
                />
              </label>
            </div>
          </div>

          {/* supplier and taste row */}
          <div className="md:flex gap-4 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Supplier Name"
                  className="input input-bordered w-full bg-white border-0"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Taste"
                  className="input input-bordered w-full bg-white border-0"
                />
              </label>
            </div>
          </div>

          {/* category and details */}
          <div className="md:flex gap-4 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category"
                  className="input input-bordered w-full bg-white border-0"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Details"
                  className="input input-bordered w-full bg-white border-0"
                />
              </label>
            </div>
          </div>
          {/* photo url */}
          <div className="mb-16">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photoURL"
                  defaultValue={photoURL}
                  placeholder="Photo URL"
                  className="input input-bordered w-full bg-white border-0"
                />
              </label>
            </div>
          </div>
          <div className="">
            <input
              className="btn btn-block"
              type="submit"
              defaultValue="Add Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
