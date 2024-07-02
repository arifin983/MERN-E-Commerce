import axios from "axios";
export const registerUser = async (userData) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const response = await axios.post("/api/v1/register", userData, config);
  return response;
};
export const loginUser = async (email, password) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const response = await axios.post(
    "/api/v1/login",
    {
      email,
      password,
    },
    config
  );
  return response;
};
export const EditUser = async (userData) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const response = await axios.put("/api/v1/me/update", userData, config);
  return response;
};
export const adminEditUser = async (id, userData) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const response = await axios.put(
    `/api/v1/admin/user/${id}`,
    userData,
    config
  );
  return response;
};
export const EditPassword = async (passwords) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const response = await axios.put(
    "/api/v1/password/update",
    passwords,
    config
  );
  return response;
};
export const forgotedPassword = async (email) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const response = await axios.post("/api/v1/password/forgot", email, config);
  return response;
};
export const passwordReset = async (token, passwords) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const response = await axios.put(
    `/api/v1/password/reset/${token}`,
    passwords,
    config
  );
  return response;
};
export const fetchAllUsers = async () => {
  const response = await axios.get("/api/v1/admin/users");
  return response;
};
export const fetchUser = async () => {
  const response = await axios.get("/api/v1/me");
  return response;
};
export const fetchUserDetails = async (id) => {
  const response = await axios.get(`/api/v1/admin/user/${id}`);
  return response;
};
export const logOutUser = async () => {
  const response = await axios.get("/api/v1/logOut");
  return response;
};
export const adminDeleteUser = async (id) => {
  const response = await axios.delete(`/api/v1/admin/user/${id}`);
  return response;
};
export const adminCreateProduct = async (productData) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const response = await axios.post(
    "/api/v1/admin/product/new",
    productData,
    config
  );
  return response;
};
export const adminUpdateProduct = async (id, productData) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const response = await axios.put(
    `/api/v1/admin/product/${id}`,
    productData,
    config
  );
  return response;
};
export const fetchProductsForAdmin = async () => {
  const response = await axios.get("/api/v1/admin/products");
  return response;
};
export const fetchProducts = async (
  keyword = "",
  currentPage = 1,
  price = [0, 1000000],
  category,
  ratings = 0
) => {
  let link;
  if (category) {
    link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings=${ratings}`;
  } else {
    link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
  }

  const response = await axios.get(link);
  return response;
};
export const fetchProductDetails = async (id) => {
  const response = await axios.get(`/api/v1/product/${id}`);
  return response;
};
export const adminDeleteProduct = async (id) => {
  const response = await axios.delete(`/api/v1/admin/product/${id}`);
  return response;
};
export const postNewReview = async (reviewData) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const response = await axios.put("/api/v1/review", reviewData, config);
  return response;
};
export const fetchAllReviews = async (id) => {
  const response = await axios.get(`/api/v1/reviews?id=${id}`);
  return response;
};
export const adminDeleteReviews = async (reviewId, productId) => {
  const response = await axios.delete(
    `/api/v1/reviews?id=${reviewId}&productId=${productId}`
  );
  return response;
};
export const newOrder = async (orderData) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const response = await axios.post("/api/v1/order/new", orderData, config);
  return response;
};
export const adminUpdateOrder = async (id, status) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const response = await axios.put(
    `/api/v1/admin/order/${id}`,
    { status },
    config
  );
  return response;
};
export const FetchOrders = async () => {
  const response = await axios.get("/api/v1/admin/orders");
  return response;
};
export const getMyOrders = async () => {
  const response = await axios.get("/api/v1/orders/me");
  return response;
};
export const getOrderInfo = async (id) => {
  const response = await axios.get(`/api/v1/order/${id}`);
  return response;
};
export const adminDeleteOrder = async (id) => {
  const response = await axios.delete(`/api/v1/admin/order/${id}`);
  return response;
};
