import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./calendar-slice";

const store = configureStore({
  //state관리
  reducer: { calendar: calendarSlice.reducer }, //상태 관리할 것 저장
});

export default store;
