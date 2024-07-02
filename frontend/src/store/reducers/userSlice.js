import { createSlice } from "@reduxjs/toolkit";
import {
  deleteUser,
  forgotPassword,
  getAllUsers,
  getUserDetails,
  loadUser,
  logOut,
  login,
  register,
  resetPassword,
  updatePassword,
  updateProfile,
  updateUser,
} from "../actions/userActions";
import { resetState } from "../actions/productAction";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null,
    loading: false,
    isAuthenticated: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        (state.loading = true), (state.isAuthenticated = false);
      })
      .addCase(register.fulfilled, (state, actions) => {
        (state.loading = false),
          (state.user = actions.payload),
          (state.isAuthenticated = true);
      })
      .addCase(register.rejected, (state, actions) => {
        (state.loading = false),
          (state.isAuthenticated = false),
          (state.error = actions.payload);
      })
      .addCase(login.pending, (state) => {
        (state.loading = true), (state.isAuthenticated = false);
      })
      .addCase(login.fulfilled, (state, actions) => {
        (state.loading = false),
          (state.user = actions.payload),
          (state.isAuthenticated = true);
      })
      .addCase(login.rejected, (state, actions) => {
        (state.loading = false),
          (state.isAuthenticated = false),
          (state.error = actions.payload);
      })
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(loadUser.fulfilled, (state, actions) => {
        state.loading = false;
        state.user = actions.payload;
        state.isAuthenticated = true;
      })
      .addCase(loadUser.rejected, (state, actions) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = actions.payload;
      })
      .addCase(logOut.fulfilled, (state, actions) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logOut.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
        state.isAuthenticated = true;
      });
  },
});
export const allUsersSlice = createSlice({
  name: "all users",
  initialState: {
    users: [],
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, actions) => {
        state.loading = false;
        state.users = actions.payload;
      })
      .addCase(getAllUsers.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      });
  },
}).reducer;
export const UserDetailsSlice = createSlice({
  name: "user details",
  initialState: {
    user: {},
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, actions) => {
        state.loading = false;
        state.user = actions.payload;
      })
      .addCase(getUserDetails.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      });
  },
}).reducer;
export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    message: null,
    isUpdated: false,
    isDeleted: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, actions) => {
        state.loading = false;
        state.isUpdated = actions.payload;
      })
      .addCase(updateProfile.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, actions) => {
        state.loading = false;
        state.isUpdated = actions.payload;
      })
      .addCase(updateUser.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      })
      .addCase(updatePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePassword.fulfilled, (state, actions) => {
        state.loading = false;
        state.isUpdated = actions.payload;
      })
      .addCase(updatePassword.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, actions) => {
        state.loading = false;
        state.isDeleted = actions.payload.success;
        state.message = actions.payload.message;
      })
      .addCase(deleteUser.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      })
      .addCase(resetState.fulfilled, (state) => {
        state.loading = false;
        state.message = null;
        state.isDeleted = false;
        state.isUpdated = false;
        state.error = null;
      });
  },
}).reducer;
export const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState: {
    loading: false,
    message: null,
    error: null,
    success: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, actions) => {
        state.loading = false;
        state.message = actions.payload;
      })
      .addCase(forgotPassword.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state, actions) => {
        state.loading = false;
        state.success = actions.payload;
      })
      .addCase(resetPassword.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      });
  },
}).reducer;
export default userSlice.reducer;
