import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const today = moment(new Date()).format("YYYY.MM.DD");

const initialState = {
  date: today,
};
const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    selectDate: (state, action) => {
      const select = action.payload;
      state.date = select;
    },
  },
});

export const calendarActions = calendarSlice.actions;
export default calendarSlice;
