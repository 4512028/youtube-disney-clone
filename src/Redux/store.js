import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./Reducers/user";
import movieReducer from "./Reducers/movie";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
