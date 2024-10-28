import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home, Login } from "../routes";
import { Suspense } from "react";
import { Loading } from "../components/Loading/Loading";

// Implement Login & User Context

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Suspense fallback={<Loading />}><Home /></Suspense>,
      },
      {
        path: "/login",
        element: <Suspense fallback={<Loading />}><Login /></Suspense>,
      },
    ],
  }
]);
