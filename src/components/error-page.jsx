import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-4xl font-semibold">Oops!</h1>
      <p className="text-lg my-5">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
      <div>
        Butt
      </div>
    </div>
  );
};

export default ErrorPage;
