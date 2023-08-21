import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./slices/navSlice";
export const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});
