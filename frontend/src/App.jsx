import React, { useEffect } from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import WebFont from "webfontloader";
import Home from "./pages/jsx/Home";
import ProductDetails from "./pages/jsx/ProductDetails";
import Products from "./pages/jsx/Products";
import Search from "./pages/jsx/Search";
import LoginSignUp from "./pages/jsx/LoginSignUp";
import store from "./store";
import { loadUser } from "./store/actions/userActions";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/jsx/Profile";
import UpdateProfile from "./pages/jsx/UpdateProfile.";
import UpdatePassword from "./pages/jsx/UpdatePassword";
import ForgotPassword from "./pages/jsx/ForgotPassword";
import ResetPassword from "./pages/jsx/ResetPassword";
import Cart from "./pages/jsx/Cart";
import Shipping from "./pages/jsx/Shipping";
import ConfirmOrder from "./pages/jsx/ConfirmOrder";
import PaymentRoute from "./components/PaymentRoute";
import Payment from "./pages/jsx/Payment";
import OrderSuccess from "./pages/jsx/OrderSuccess";
import MyOrders from "./pages/jsx/MyOrder";
import OrderDetails from "./pages/jsx/OrderDetails";
import AdminRoute from "./components/AdminRoute";
import Dashboard from "./pages/jsx/Dashboard";
import ProductList from "./pages/jsx/ProductList";
import NewProduct from "./pages/jsx/NewProduct";
import UpdateProduct from "./pages/jsx/UpdateProduct";
import OrderList from "./pages/jsx/OrderList";
import ProcessOrder from "./pages/jsx/ProcessOrder";
import UsersList from "./pages/jsx/UsersList";
import UpdateUser from "./pages/jsx/UpdateUser";
import ProductReviews from "./pages/jsx/ProductReviews";
import About from "./pages/jsx/About";
import Contact from "./pages/jsx/Contact";
import NotFound from "./pages/jsx/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {}
      <Route index element={<Home />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:keyword" element={<Products />} />
      <Route path="search" element={<Search />} />
      <Route path="login" element={<LoginSignUp />} />
      <Route element={<ProtectedRoute />}>
        <Route path="account" element={<Profile />} />
        <Route path="me/update" element={<UpdateProfile />} />
        <Route path="password/update" element={<UpdatePassword />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="order/confirm" element={<ConfirmOrder />} />
        <Route element={<PaymentRoute />}>
          <Route path="process/payment" element={<Payment />} />
        </Route>
        <Route path="success" element={<OrderSuccess />} />
        <Route path="orders" element={<MyOrders />} />
        <Route path="order/:id" element={<OrderDetails />} />
        <Route element={<AdminRoute />}>
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="admin/products" element={<ProductList />} />
          <Route path="admin/product" element={<NewProduct />} />
          <Route path="admin/product/:id" element={<UpdateProduct />} />
          <Route path="admin/orders" element={<OrderList />} />
          <Route path="admin/order/:id" element={<ProcessOrder />} />
          <Route path="admin/users" element={<UsersList />} />
          <Route path="admin/user/:id" element={<UpdateUser />} />
          <Route path="admin/reviews" element={<ProductReviews />} />
        </Route>
      </Route>
      <Route path="password/forgot" element={<ForgotPassword />} />
      <Route path="password/reset/:token" element={<ResetPassword />} />
      <Route path="cart" element={<Cart />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    window.addEventListener("contextmenu", (e) => e.preventDefault());
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
