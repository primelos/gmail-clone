import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    selectedUser: null,
  },
  reducers: {
    login: (state, action) => {
      state.selectedUser = action.payload;
    },
    logout: (state) => {
      state.selectedUser = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectNewUser = (state) => state.user.selectedUser;

export default userSlice.reducer;
