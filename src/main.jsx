import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCoffee from "./components/AddCoffee/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee/UpdateCoffee.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "updateCoffee",
    element: <UpdateCoffee />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
