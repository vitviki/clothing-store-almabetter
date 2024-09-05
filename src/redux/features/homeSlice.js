import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bestSeller: null,
  bedLinen: null,
  homeDecor: null,
  bath: null,
  curtains: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setBestSellers: (state, action) => {
      state.bestSeller = action.payload;
    },
    setBedLinen: (state, action) => {
      state.bedLinen = action.payload;
    },
    setHomeDecor: (state, action) => {
      state.homeDecor = action.payload;
    },
    setBath: (state, action) => {
      state.bath = action.payload;
    },

    setCurtains: (state, action) => {
      state.curtains = action.payload;
    },
  },
});

export const {
  setBestSellers,
  setBedLinen,
  setHomeDecor,
  setBath,
  setCurtains,
} = homeSlice.actions;

export default homeSlice.reducer;
