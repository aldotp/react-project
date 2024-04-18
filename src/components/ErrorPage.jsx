import { useRouteError } from "react-router-dom";

function ErrorPage() {
  useRouteError();

  return (
    <>
      <div> Oh, ada Error</div>
    </>
  );
}

export default ErrorPage;
