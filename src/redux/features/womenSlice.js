import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bestSeller: null,
  topwear: null,
  bottomwear: null,
  shoes: null,
  innerwear: null,
  ethnic: null,
};

const womenSlice = createSlice({
  name: "womens",
  initialState,
  reducers: {
    setBestSellers: (state, action) => {
      state.bestSeller = action.payload;
    },
    setTopWear: (state, action) => {
      state.topwear = action.payload;
    },
    setBottomWear: (state, action) => {
      state.bottomwear = action.payload;
    },
    setInnerWear: (state, action) => {
      state.innerwear = action.payload;
    },
    setEthnic: (state, action) => {
      state.ethnic = action.payload;
    },
  },
});

export const {
  setBestSellers,
  setTopWear,
  setBottomWear,
  setInnerWear,
  setEthnic,
} = womenSlice.actions;

export default womenSlice.reducer;
