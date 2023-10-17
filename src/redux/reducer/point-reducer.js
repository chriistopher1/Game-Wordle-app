import { createSlice } from "@reduxjs/toolkit";

export const pointSlice = createSlice({
  name: "total point",
  initialState: {
    pointCount: 0,
  },
  reducers: {
    incrementByAmount: (state, timeLeft) => {
      const timeReal = timeLeft.payload["timeLeft"];
      state.pointCount += timeReal * 3;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = pointSlice.actions;

export default pointSlice.reducer;
