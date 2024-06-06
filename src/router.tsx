import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./views/Layouts/MainLayout";
import HomePage from "./views/Home/Index";
import DefaultLayout from "./views/Layouts/DefaultLayout";

export const router = createBrowserRouter([
  {
    path: '/my-portfolio/',
    element: <MainLayout />,
    children: [
      {
        path: '/my-portfolio/',
        element: <DefaultLayout />,
        children: [
          {
            path: '',
            element: <HomePage />,
          },
        ],
      },
    ],
  },
])