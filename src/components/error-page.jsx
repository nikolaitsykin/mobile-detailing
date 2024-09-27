import { useRouteError } from "react-router-dom";
import Button from "./UI/Button";
import { Link } from "react-router-dom";
import { HOME_PATH } from "../utils/constants";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="h-screen flex flex-col justify-center items-center bg-white"
    >
      <h1 className="text-4xl font-semibold">Oops!</h1>
      <p className="text-lg my-5">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="my-10">
        <Link to={HOME_PATH}>
          <Button children={"Go Home"} color={"secondary"}/>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
