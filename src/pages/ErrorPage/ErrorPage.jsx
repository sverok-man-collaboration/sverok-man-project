import { useRouteError } from 'react-router-dom';

function ErrorPage() {
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