import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  EditPassword,
  EditUser,
  adminDeleteUser,
  adminEditUser,
  fetchAllUsers,
  fetchUser,
  fetchUserDetails,
  forgotedPassword,
  logOutUser,
  loginUser,
  passwordReset,
  registerUser,
} from "../../utils/api";

export const register = createAsyncThunk(
  "register/registerUser",
  async (formData, thunkAPI) => {
    try {
      const { data } = await registerUser(formData);
      return data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "something went wrong"
      );
    }
  }
);
export const login = createAsyncThunk(
  "login/loginUser",
  async (formData, thunkAPI) => {
    try {
      const { data } = await loginUser(
        formData.loginEmail,
        formData.loginPassword
      );
      return data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "something went wrong"
      );
    }
  }
);
export const updateProfile = createAsyncThunk(
  "update/updateProfile",
  async (formData, thunkAPI) => {
    try {
      const { data } = await EditUser(formData);
      return data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "something went wrong"
      );
    }
  }
);
export const updateUser = createAsyncThunk(
  "updateUser/adminUpdateUser",
  async (requiredData, thunkAPI) => {
    try {
     const { userId, formData } = requiredData;
      const { data } = await adminEditUser(userId,formData);
      return data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "something went wrong"
      );
    }
  }
);
export const updatePassword = createAsyncThunk(
  "updatePassword/updatePassword",
  async (passwords, thunkAPI) => {
    try {
      const { data } = await EditPassword(passwords);
      return data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "something went wrong"
      );
    }
  }
);
export const forgotPassword = createAsyncThunk(
  "forgot/forgotPassword",
  async (email, thunkAPI) => {
    try {
      const { data } = await forgotedPassword(email);
      return data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "something went wrong"
      );
    }
  }
);
export const resetPassword = createAsyncThunk(
  "reset/resetPassword",
  async (query, thunkAPI) => {
    try {
      const { token, passwords } = query;
      const { data } = await passwordReset(token, passwords);
      return data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "something went wrong"
      );
    }
  }
);
export const getAllUsers = createAsyncThunk(
  "getUsers/getUsers",
  async (_, thunkAPI) => {
    try {
      const { data } = await fetchAllUsers();
      return data.users;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "something went wrong"
      );
    }
  }
);
export const getUserDetails = createAsyncThunk(
  "getDetails/getUserDetails",
  async (id, thunkAPI) => {
    try {
      const { data } = await fetchUserDetails(id);
      return data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "something went wrong"
      );
    }
  }
);
export const loadUser = createAsyncThunk(
  "load/loadUser",
  async (_, thunkAPI) => {
    try {
      const { data } = await fetchUser();
      return data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "something went wrong"
      );
    }
  }
);
export const logOut = createAsyncThunk(
  "logOut/logOutUser",
  async (_, thunkAPI) => {
    try {
      const { data } = await logOutUser();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || "something went wrong"
      );
    }
  }
);
export const deleteUser = createAsyncThunk(
  "deleteUser/adminDeleteUser",
  async (id, thunkAPI) => {
    try {
      const { data } = await adminDeleteUser(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data?.message || "something went wrong");
    }
  }
);
