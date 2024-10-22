import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./components/routes/router";
import "./index.css";

const routes = createBrowserRouter(router);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
