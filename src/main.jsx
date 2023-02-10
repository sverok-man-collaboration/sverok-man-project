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
//React-helmet-async
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter(
  /**
   * RouteObject as object.
   * @type {object}
   */
  ([
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
  ])
);

const routerProviderProps = {
  children: <App />,
  router: router,
};

/**
 * The root element of the React application, obtained by `document.getElementById("root")`.
 * It should be a valid HTML element.
 * @param {HTMLElement} rootElement
 */
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <HelmetProvider>
      <RouterProvider {...routerProviderProps}>
        <App />
      </RouterProvider>
    </HelmetProvider>
  );
} else {
  throw new Error("Root element with id 'root' not found in the DOM");
}
