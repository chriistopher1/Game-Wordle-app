import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    isRunning: true,
    timeLeft: 60,
  },
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
    },
    resetTimer: (state) => {
        state.timeLeft = 60;
    },
    updateTimeLeft: (state, action) => {
        state.timeLeft = action.payload;
    }
  },
});

export const { startTimer,  resetTimer, updateTimeLeft } = timerSlice.actions;

export default timerSlice.reducer;