import { configureStore } from "@reduxjs/toolkit";
import menSlice from "./features/menSlice";
import womenSlice from "./features/womenSlice";
import kidsSlice from "./features/kidsSlice";
import homeSlice from "./features/homeSlice";
import beautySlice from "./features/beautySlice";
import { rapidAPI } from "./services/rapidAPICore";

const store = configureStore({
  reducer: {
    mens: menSlice,
    womens: womenSlice,
    kids: kidsSlice,
    home: homeSlice,
    beauty: beautySlice,
    [rapidAPI.reducerPath]: rapidAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rapidAPI.middleware),
});

export default store;
