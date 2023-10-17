import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create an async thunk for fetching random game data
export const fetchRandomGame = createAsyncThunk(
  "gameCover/fetchRandomGame",
  async () => {
    try {
      const response = await fetch("http://localhost:5000/fetchRandomGame");
      if (response.ok) {
        const data = await response.json();
        // console.log("data : ", data);
        // console.log("coverUrl : ", data[0].cover.url);
        return {
          coverUrl: data[0].cover.url,
          gameName: data[0].name,
        };
      } else {
        console.log("error fetching");
        throw new Error(`Error fetching random game: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const blurTailwindLevel = ["md", "", "sm"];

const gameCoverSlice = createSlice({
  name: "gameCover",
  initialState: {
    gameCover: null,
    gameName: null,
    gameCoverBlur: blurTailwindLevel[0]
  },
  reducers: {
    onWrongAnswer: (state, action) => {
      console.log("masuk reducer");
      const currentIndex = blurTailwindLevel.indexOf(state.gameCoverBlur);
      if (currentIndex !== 2) {
        // Increment the index and cycle through the levels
        const nextIndex = (currentIndex + 1) % blurTailwindLevel.length;
        state.gameCoverBlur = blurTailwindLevel[nextIndex];
      }
    },
    onCorrectAnswer : (state) => {
      state.gameCoverBlur = blurTailwindLevel[0];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandomGame.fulfilled, (state, action) => {
      console.log("halo  masuk");
      const { coverUrl, gameName } = action.payload;
      state.gameCover = coverUrl;
      state.gameName = gameName;
    });
  },
});

export const { onWrongAnswer,onCorrectAnswer } = gameCoverSlice.actions;
export default gameCoverSlice.reducer;
