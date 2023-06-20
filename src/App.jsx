import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

function App() {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);

  const handleDeleteCoffee = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainingCoffee = coffees.filter((cof) => cof._id !== id);
              setCoffees(remainingCoffee);
            }
          });
      }
    });
  };
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8 mb-16">
        <h1 className="text-xl">Coffee!</h1>
        <div className="grid grid-cols-2 gap-10">
          {coffees.map((coffee) => (
            <div
              key={coffee._id}
              className="bg-gray-300 flex justify-between items-center rounded p-5"
            >
              <div>
                <figure>
                  <img src={coffee.photoURL} alt={coffee.name} />
                </figure>
              </div>
              <div className="text-gray-500">
                <h3 className="mb-3">Name: {coffee.name}</h3>
                <h3 className="mb-3">Supplier: {coffee.supplier}</h3>
                <h3>Taste: {coffee.taste}</h3>
              </div>
              <div className="">
                <div className="mb-2">
                  <button className="btn btn-sm" title="Show details">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </div>
                <div className="mb-2">
                  <Link to={`updateCoffee/${coffee._id}/edit`}>
                    <button className="btn btn-sm" title="Update">
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                  </Link>
                </div>
                <div>
                  <button
                    className="btn btn-sm"
                    title="Delete"
                    onClick={() => handleDeleteCoffee(coffee._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
