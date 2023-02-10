import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  /**
   * Error as object.
   * @type {object}
   */
  const error = useRouteError();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <pre>
        <i>{error.statusText || error.message}</i>
      </pre>
    </div>
  );
}
export default ErrorPage;
