import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "../rtk/todosApi";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
     [todosApi.reducerPath]: todosApi.reducer,
     user: userReducer
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
