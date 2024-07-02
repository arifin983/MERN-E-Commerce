import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer, {
  productSlice as productReducer,
  newReviewSlice as newReviewReducer,
  newProductSlice,
  reviewSlice,
  reviewsSlice,
  productDetailsSlice,
} from "./reducers/productSlice";
import userReducer, {
  profileSlice,
  forgotPasswordSlice,
  allUsersSlice,
  UserDetailsSlice,
} from "./reducers/userSlice";
import cartReducer from "./reducers/cartSlice";
import { thunk } from "redux-thunk";
import newOrderSlice, {
  allOrdersSlice,
  myOrdersSlice,
  orderDetailsSlice,
  orderSlice,
} from "./reducers/orderSlice";
const rootReducer = combineReducers({
  allUsers: allUsersSlice,
  user: userReducer,
  profile: profileSlice,
  userDetails:UserDetailsSlice,
  forgotPassword: forgotPasswordSlice,
  newProduct: newProductSlice,
  products: productsReducer,
  product:productReducer,
  productDetails: productDetailsSlice,
  newReview: newReviewReducer,
  cart: cartReducer,
  newOrder: newOrderSlice,
  allOrders: allOrdersSlice,
  myOrders: myOrdersSlice,
  orderDetails: orderDetailsSlice,
  order: orderSlice,
  productReviews:reviewsSlice,
  review:reviewSlice
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});
export default store;
