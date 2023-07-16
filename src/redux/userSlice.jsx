import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    userLogout: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
});

export default userSlice.reducer;

export const { userLogin, userLogout } = userSlice.actions;
