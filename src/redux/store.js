import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducers/loginSlice";

export default configureStore({
  reducer: {
    loginSlice: loginSlice,
  },
});
