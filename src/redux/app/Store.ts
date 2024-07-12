import { configureStore } from "@reduxjs/toolkit";
import verificationSlice from "../store/verificationSlice.ts";

export const Store = configureStore({
  reducer: {
    verification: verificationSlice,
  },
});


export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;