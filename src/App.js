import React, { Suspense } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Loader from './Components/Loader/Loader'

const ForgotPassword = React.lazy(() => import("./Pages/Auth/ForgotPassword"));
const SignIn = React.lazy(() => import("./Pages/Auth/SignIn"));
const SignUp = React.lazy(() => import("./Pages/Auth/SignUp"));

const CustomerCards = React.lazy(() =>
  import("./Pages/Customer/CustomerCards")
);
const CustomerProfile = React.lazy(() =>
  import("./Pages/Customer/CustomerProfile")
);

const Products = React.lazy(() => import("./Pages/Products/Products"));
const Cart = React.lazy(() => import("./Pages/Cart/Cart"));

const NotFound = React.lazy(() => import("./Pages/Errors/NotFound"));

const VideoCall = React.lazy(() => import("./Pages/VideoCall/VideoCall"));

const App = () => {
  const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const isAuthenticated = localStorage.getItem("user");

    return isAuthenticated ? (
      children
    ) : (
      <Navigate to="/login" state={{ from: location }} />
    );
  };

  const routes = [
    {
      path: "/",
      exact: true,
      element: <Home />,
    },
    {
      path: "/signin",
      exact: true,
      element: <SignIn />,
    },
    {
      path: "/signup",
      exact: true,
      element: <SignUp />,
    },
    {
      path: "/forgot-password",
      exact: true,
      element: <ForgotPassword />,
    },
    {
      path: "/customer/profile",
      exact: true,
      element: (
        <PrivateRoute>
          <CustomerProfile />
        </PrivateRoute>
      ),
    },
    {
      path: "/customer/cards",
      exact: true,
      element: (
        <PrivateRoute>
          <CustomerCards />
        </PrivateRoute>
      ),
    },
    {
      path: "/products/:category",
      exact: true,
      element: <Products />,
    },
    {
      path: "/cart",
      exact: true,
      element: <Cart />,
    },
    {
      path: "/video-call",
      exact: true,
      element: <VideoCall />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map(({ path, element, exact }, key) => {
          return (
            <Route key={key} path={path} exact={exact} element={element} />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default App;
