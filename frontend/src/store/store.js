import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "../rtk/todosApi";

export const store = configureStore({
  reducer: { [todosApi.reducerPath]: todosApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
