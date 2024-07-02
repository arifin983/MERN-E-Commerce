import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  deleteReviews,
  getAdminProduct,
  getAllReviews,
  getProductDetails,
  getProducts,
  newReview,
  resetState,
  updateProduct,
} from "../actions/productAction";
const initialState = {
  currentProducts: [],
  productsCount: null,
  productsPerPage: null,
  filteredProductsCount: null,
  error: null,
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // productRequestStart: (state) => {
    //   state.loading = true;
    // },
    // productRequestSuccess: (state, action) => {
    //   state.currentProduct = action.payload;
    //   state.loading = false;
    //   state.error = false;
    // },
    // productRequestFail: (state, action) => {
    //   state.error = action.payload;
    //   state.loading = false;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, actions) => {
        state.loading = false;
        state.currentProducts = actions.payload.products;
        state.productsCount = actions.payload.productsCount;
        state.productsPerPage = actions.payload.productPerPage;
        state.filteredProductsCount = actions.payload.filteredProductCount;
      })
      .addCase(getProducts.rejected, (state, actions) => {
        (state.loading = false), (state.error = actions.payload);
      })
      .addCase(getAdminProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAdminProduct.fulfilled, (state, actions) => {
        state.loading = false;
        state.currentProducts = actions.payload;
      })
      .addCase(getAdminProduct.rejected, (state, actions) => {
        (state.loading = false), (state.error = actions.payload);
      });
  },
});
export const newProductSlice = createSlice({
  name: "create new product",
  initialState: {
    product: {},
    error: null,
    loading: false,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, actions) => {
        state.loading = false;
        state.product = actions.payload.product;
        state.success = actions.payload.success;
      })
      .addCase(createProduct.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      })
      .addCase(resetState.fulfilled, (state) => {
        state.loading = false;
        state.success = false;
        state.error = null;
      });
  },
}).reducer;
export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    isUpdated: false,
    isDeleted: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, actions) => {
        state.loading = false;
        state.isDeleted = actions.payload;
      })
      .addCase(deleteProduct.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, actions) => {
        state.loading = false;
        state.isUpdated = actions.payload;
      })
      .addCase(updateProduct.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      })
      .addCase(resetState.fulfilled, (state) => {
        state.loading = false;
        state.isDeleted = false;
        state.isUpdated = false;
        state.error = null;
      });
  },
}).reducer;
export const productDetailsSlice = createSlice({
  name: "product Details",
  initialState: {
    loading: false,
    product: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductDetails.fulfilled, (state, actions) => {
        (state.loading = false), (state.product = actions.payload);
      })
      .addCase(getProductDetails.rejected, (state, actions) => {
        (state.loading = false), (state.error = actions.payload);
      });
  },
}).reducer;
export const newReviewSlice = createSlice({
  name: "newReview",
  initialState: { success: false, error: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(newReview.pending, (state) => {
        state.loading = true;
      })
      .addCase(newReview.fulfilled, (state, actions) => {
        (state.loading = false), (state.success = actions.payload);
      })
      .addCase(newReview.rejected, (state, actions) => {
        (state.loading = true), (state.error = actions.payload);
      })
      .addCase(resetState.fulfilled, (state) => {
        state.loading = false;
        state.success = false;
        state.error = null;
      });
  },
}).reducer;
export const reviewsSlice = createSlice({
  name: "Reviews",
  initialState: {
    loading: false,
    reviews: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllReviews.fulfilled, (state, actions) => {
        state.loading = false;
        state.reviews = actions.payload;
      })
      .addCase(getAllReviews.rejected, (state, actions) => {
        state.loading = true;
        state.error = actions.payload;
      });
  },
}).reducer;
export const reviewSlice = createSlice({
  name: "Review",
  initialState: {
    loading: false,
    isDeleted: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteReviews.fulfilled, (state, actions) => {
        state.loading = false;
        state.isDeleted = actions.payload;
      })
      .addCase(deleteReviews.rejected, (state, actions) => {
        state.loading = true;
        state.error = actions.payload;
      })
      .addCase(resetState.fulfilled, (state) => {
        state.loading = false;
        state.isDeleted = false;
        state.error = null;
      });
  },
}).reducer;
// export const {
//   productRequestStart,
//   productRequestSuccess,
//   productRequestFail,
// } = productSlice.actions;
export default productsSlice.reducer;
