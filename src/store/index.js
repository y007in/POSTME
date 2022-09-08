import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./question-slice";

const store = configureStore({
  //state관리
  reducer: { question: questionSlice.reducer }, //상태 관리할 것 저장
});

export default store;
