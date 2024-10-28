import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />
      },
    ],
  }
]);