import "./App.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUS";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, element: <Home /> },
      { path: "/about-us", element: <AboutUS /> },
    ],
  },
  // {
  //   path: "/about-us",
  //   element: <AboutUS />,
  // },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />,
    </>
  );
}

export default Router;
