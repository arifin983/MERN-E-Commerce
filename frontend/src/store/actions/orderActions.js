import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchOrders, adminDeleteOrder, adminUpdateOrder, getMyOrders, getOrderInfo, newOrder } from "../../utils/api";
export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (order, thunkApi) => {
    try {
      const { data } = await newOrder(order);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response.data?.message || "Something Went wrong"
      );
    }
  }
);
export const getAllOrders = createAsyncThunk(
  "getAllOrders/getAllOrdersForAdmin",
  async (_, thunkApi) => {
    try {
      const { data } = await FetchOrders();
      return data.orders;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response.data?.message || "Something went wrong"
      );
    }
  }
);
export const myOrders = createAsyncThunk(
  "getOrders/getMyOrders",
  async (_, thunkApi) => {
    try {
      const { data } = await getMyOrders();
      return data.orders;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response.data?.message || "Something went wrong"
      );
    }
  }
);
export const getOrderDetails = createAsyncThunk(
  "getOrder/getOrderDetails",
  async (id, thunkApi) => {
    try {
      const { data } = await getOrderInfo(id);
      return data.order;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response.data?.message || "Something Went wrong"
      );
    }
  }
);
export const updateOrder = createAsyncThunk(
  "update/updateOrder",
  async (query, thunkAPI) => {
    const {id,status} = query;
    console.log(id,status)
    try {
      const { data } = await adminUpdateOrder(id,status);
      return data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "Something Went wrong"
      );
    }
  }
);
export const deleteOrder = createAsyncThunk(
  "delete/deleteOrder",
  async (id, thunkApi) => {
    try {
      const { data } = await adminDeleteOrder(id);
      return data.success;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response.data?.message || "Something Went wrong"
      );
    }
  }
);