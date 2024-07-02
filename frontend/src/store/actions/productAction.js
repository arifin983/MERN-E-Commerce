import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  adminCreateProduct,
  adminDeleteProduct,
  adminDeleteReviews,
  adminUpdateProduct,
  fetchAllReviews,
  fetchProductDetails,
  fetchProducts,
  fetchProductsForAdmin,
  postNewReview,
} from "../../utils/api";

// Async thunk action
export const getProducts = createAsyncThunk(
  "products/fetchProducts",
  async (query, thunkAPI) => {
    const { keyword, currentPage, price, category, ratings } = query;
    try {
      const { data } = await fetchProducts(
        keyword,
        currentPage,
        price,
        category,
        ratings
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "Went somethings wrong"
      );
    }
  }
);
export const createProduct = createAsyncThunk(
  "create/createProduct",
  async (productData, thunkAPI) => {
    try {
      const { data } = await adminCreateProduct(productData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "Somethings went wrong"
      );
    }
  }
);
export const updateProduct = createAsyncThunk(
  "update/updateProduct",
  async (query, thunkAPI) => {
    try {
      const { productId, formData } = query;
      const { data } = await adminUpdateProduct(productId, formData);
      return data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "Somethings went wrong"
      );
    }
  }
);
// Async Thunk action
export const getProductDetails = createAsyncThunk(
  "product/fetchProductDetails",
  async (id, thunkAPI) => {
    try {
      const { data } = await fetchProductDetails(id);
      return data.product;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "Somethings went wrong"
      );
    }
  }
);
export const getAdminProduct = createAsyncThunk(
  "fetchProducts/fetchAdminProducts",
  async (_, thunkAPI) => {
    try {
      const { data } = await fetchProductsForAdmin();
      return data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "Somethings went wrong"
      );
    }
  }
);
export const newReview = createAsyncThunk(
  "newReview/PostNewReview",
  async (reviewData, thunkAPI) => {
    try {
      const { data } = await postNewReview(reviewData);
      return data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "Somethings went wrong"
      );
    }
  }
);
export const getAllReviews = createAsyncThunk(
  "getReviews/getAllReviews",
  async (id, thunkAPI) => {
    try {
      const { data } = await fetchAllReviews(id);
      return data.reviews;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "Somethings went wrong"
      );
    }
  }
);
export const deleteReviews = createAsyncThunk(
  "DeleteReview/DeleteReviews",
  async (requiredData, thunkAPI) => {
    try {
      const { reviewId, productId } = requiredData;
      const { data } = await adminDeleteReviews(reviewId, productId);
      return data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "Somethings went wrong"
      );
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "deleteProduct/adminDeleteProduct",
  async (id, thunkAPI) => {
    try {
      const { data } = await adminDeleteProduct(id);
      return data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "something went wrong"
      );
    }
  }
);
export const resetState = createAsyncThunk("reset/resetState", async () => {
  return;
});
