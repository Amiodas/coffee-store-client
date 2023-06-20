import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };

    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId) {
            Swal.fire({
                title: 'Successful!',
                text: 'Great you are added new coffee',
                icon: 'success',
                confirmButtonText: 'Good day!!!'
              })
        }
      });
  };
  return (
    <div className="container mx-auto bg-[#f4f3f0] p-24 my-16">
      <h3 className="text-3xl font-extrabold text-center mb-10">
        Add a Coffee
      </h3>
      <form onSubmit={handleAddCoffee}>
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
                placeholder="Photo URL"
                className="input input-bordered w-full bg-white border-0"
              />
            </label>
          </div>
        </div>
        <div className="">
          <input className="btn btn-block" type="submit" value="Add Coffee" />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
