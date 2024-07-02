import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import store from "../store";
import { loadUser } from "../store/actions/userActions";
import { useEffect } from "react";
import UserOptions from "./UserOptions";

const Layout = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  },[store.dispatch]);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
