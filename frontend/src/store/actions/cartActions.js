import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductDetails } from "../../utils/api";

// Async Thunk action
export const addItemsToCart = createAsyncThunk(
  "addToCart/addItemsToCart",
  async (query, thunkAPI) => {
    try {
      const { id, newQty } = query;
      const { data } = await fetchProductDetails(id);
      return {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        quantity:newQty,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "Somethings went wrong"
      );
    }
  }
);
export const removeItemsFromCart = createAsyncThunk(
  "removeItems/removeItemsFromCart",
  async (id) => {
    return id;
  }
);
export const saveShippingInfo = createAsyncThunk(
  "ShippingInfo/saveShippingInfo",
  async (data) => {
    return data;
  }
);
