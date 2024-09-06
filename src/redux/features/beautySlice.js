import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bestSeller: null,
  makeup: null,
  skincare: null,
  haircare: null,
  fragrances: null,
  masks: null,
};

const beautySlice = createSlice({
  name: "beauty",
  initialState,
  reducers: {
    setBestSellers: (state, action) => {
      state.bestSeller = action.payload;
    },
    setMakeup: (state, action) => {
      state.makeup = action.payload;
    },
    setSkinCare: (state, action) => {
      state.skincare = action.payload;
    },
    setHairCare: (state, action) => {
      state.haircare = action.payload;
    },
    setFragrances: (state, action) => {
      state.fragrances = action.payload;
    },
    setMasks: (state, action) => {
      state.masks = action.payload;
    },
  },
});

export const {
  setBestSellers,
  setMakeup,
  setSkinCare,
  setHairCare,
  setFragrances,
  setMasks,
} = beautySlice.actions;

export default beautySlice.reducer;
