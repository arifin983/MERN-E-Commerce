import { createSlice } from "@reduxjs/toolkit";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrderDetails,
  myOrders,
  updateOrder,
} from "../actions/orderActions";
import { resetState } from "../actions/productAction";

const newOrderSlice = createSlice({
  name: "new order",
  initialState: {
    loading: false,
    order: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state, actions) => {
        state.loading = false;
        state.order = actions.payload;
      })
      .addCase(createOrder.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      });
  },
});
export const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    isUpdated: false,
    isDeleted: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateOrder.fulfilled, (state, actions) => {
        state.loading = false;
        state.isUpdated = actions.payload;
      })
      .addCase(updateOrder.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      })
      .addCase(deleteOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteOrder.fulfilled, (state, actions) => {
        state.loading = false;
        state.isDeleted = actions.payload;
      })
      .addCase(deleteOrder.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      })
      .addCase(resetState.fulfilled, (state) => {
        state.loading = false;
        state.isDeleted = false;
        state.isUpdated = false;
      });
  },
}).reducer;
export const allOrdersSlice = createSlice({
  name: "all orders",
  initialState: {
    loading: false,
    orders: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOrders.fulfilled, (state, actions) => {
        state.loading = false;
        state.orders = actions.payload;
      })
      .addCase(getAllOrders.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      });
  },
}).reducer;
export const myOrdersSlice = createSlice({
  name: "my orders",
  initialState: {
    loading: false,
    orders: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(myOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(myOrders.fulfilled, (state, actions) => {
        state.loading = false;
        state.orders = actions.payload;
      })
      .addCase(myOrders.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      });
  },
}).reducer;
export const orderDetailsSlice = createSlice({
  name: "order details",
  initialState: {
    loading: false,
    order: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, actions) => {
        state.loading = false;
        state.order = actions.payload;
      })
      .addCase(getOrderDetails.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      });
  },
}).reducer;
export default newOrderSlice.reducer;
