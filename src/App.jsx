import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import NowShowing from "./pages/NowShowing";
import AddMovies from "./pages/AddMovies";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Layout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect("/login");
          }
          return null;
        },
      },
      {
        path: "/movies/now-showing",
        element: <NowShowing />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect("/login");
          }
          return null;
        },
      },
      {
        path: "/add-movies",
        element: <AddMovies />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect("/login");
          }
          return null;
        },
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
