import { createSlice } from "@reduxjs/toolkit";
import {
  addItemsToCart,
  removeItemsFromCart,
  saveShippingInfo,
} from "../actions/cartActions";

const cartSlice = createSlice({
  name: "addToCart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItemsToCart.fulfilled, (state, actions) => {
        const item = actions.payload;
        const isItemExist = state.cartItems.find(
          (i) => i.product === item.product
        );
        if (isItemExist) {
          state.cartItems = state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          );
        } else {
          state.cartItems.push(item);
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      })
      .addCase(removeItemsFromCart.fulfilled, (state, actions) => {
        state.cartItems = state.cartItems.filter(
          (i) => i.product !== actions.payload
        );
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      })
      .addCase(saveShippingInfo.fulfilled, (state, actions) => {
        state.shippingInfo = actions.payload;
        localStorage.setItem("shippingInfo", JSON.stringify(state.shippingInfo));
      });
  },
});
export default cartSlice.reducer;
