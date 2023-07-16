import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    categoryState: categorySlice,
    userState: userSlice,
  },
});
