import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import { rapidAPI } from "./services/rapidAPICore";

const store = configureStore({
  reducer: {
    user: userSlice,
    [rapidAPI.reducerPath]: rapidAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rapidAPI.middleware),
});

export default store;
