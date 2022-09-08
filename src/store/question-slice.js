import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isReadOnly: false,
};

const questionSlice = createSlice({
  name: "question", //리듀서 이름
  initialState, //데이터의 초기값
  reducers: {
    //상태가 변할 때의 실행
    readOnly: (state) => {
      state.isReadOnly = !state.isReadOnly;
    },
  },
});

export const questionActions = questionSlice.actions;
export default questionSlice;
