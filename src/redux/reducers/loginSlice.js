import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
    token: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.token = action.payload;
    },

    logout: (state, action) => {
      state.isLogin = false;
      state.token = "";
    },
  },
});

export const { login, logout } = loginSlice.actions;

export const LoginSlice = (state) => state.login;
export default loginSlice.reducer;
