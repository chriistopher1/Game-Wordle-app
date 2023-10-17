import { createSlice } from "@reduxjs/toolkit";

export const lifePointSlice = createSlice({
  name: "lifepoint",
  initialState: {
    lifeCount: 10,
  },
  reducers: {
    decrement: (state) => {
      state.lifeCount -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { decrement } = lifePointSlice.actions;

export default lifePointSlice.reducer;
