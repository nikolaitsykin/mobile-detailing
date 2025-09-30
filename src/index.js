import * as ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./components/routes/routes";
import "./index.css";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);
