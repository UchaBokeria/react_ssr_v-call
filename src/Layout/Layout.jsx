import React from "react";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";

const Layout = ({ children }) => {
  const location = useLocation();
  
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
