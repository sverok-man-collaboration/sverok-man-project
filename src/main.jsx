import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//React-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Pages imports
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import RoomOne from "./pages/RoomOne/RoomOne";
import RoomTwo from "./pages/RoomTwo/RoomTwo";
import RoomThree from "./pages/RoomThree/RoomThree";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

//Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  {
    path: "about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "roomone",
    element: <RoomOne />,
    errorElement: <ErrorPage />,
  },
  ,
  {
    path: "roomtwo",
    element: <RoomTwo />,
    errorElement: <ErrorPage />,
  },
  ,
  {
    path: "roomthree",
    element: <RoomThree />,
    errorElement: <ErrorPage />,
  },
]);

/**
 * The root element of the React application, obtained by `document.getElementById("root")`.
 * It should be a valid HTML element.
 * @param {HTMLElement} rootElement
 */
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
} else {
  throw new Error("Root element with id 'root' not found in the DOM");
}
