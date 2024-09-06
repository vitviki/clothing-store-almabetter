import { configureStore } from "@reduxjs/toolkit";
import menSlice from "./features/menSlice";
import womenSlice from "./features/womenSlice";
import kidsSlice from "./features/kidsSlice";
import homeSlice from "./features/homeSlice";
import beautySlice from "./features/beautySlice";

const store = configureStore({
  reducer: {
    mens: menSlice,
    womens: womenSlice,
    kids: kidsSlice,
    home: homeSlice,
    beauty: beautySlice,
  },
});

export default store;
