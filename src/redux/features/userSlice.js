import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  name: null,
  address: null,
  wishlist: null,
  cart: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setWishList: (state, action) => {
      state.wishlist = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setUserId, setName, setAddress, setWishList, setCart } =
  userSlice.actions;

export default userSlice.reducer;
