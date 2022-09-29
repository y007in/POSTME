import { createSlice } from "@reduxjs/toolkit";
import store from "store-js";

const initialState = {
  exist: store.get("exist"),
};

const submitSlice = createSlice({
  name: "submit",
  initialState,
  reducers: {
    getExist: (state) => {
      state = !state;
    },
  },
});

export const submitActions = submitSlice.actions;
export default submitSlice;
