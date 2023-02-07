import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * The root element of the React application, obtained by `document.getElementById("root")`.
 * It should be a valid HTML element.
 * @param {HTMLElement} rootElement
 */
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
} else {
  throw new Error("Root element with id 'root' not found in the DOM");
}
