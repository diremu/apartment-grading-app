import { createSlice } from "@reduxjs/toolkit";

let users = [];
try {
  const formerState = sessionStorage.getItem("userList");
  if (formerState) {
    users = JSON.parse(formerState);
    if (!Array.isArray(users)) {
      users = [];
      sessionStorage.removeItem("userList");
    }
  }
} catch (error) {
  console.error( error.message);
  sessionStorage.removeItem("userList");
}

const initialState = {
  user: null,
  isLoggedIn: false,
  users: users
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    signup: (state, action) => {
      state.users = [...state.users, action.payload];
      state.user = action.payload;
      state.isLoggedIn = true;
      console.log("User added:", action.payload);
      try {
        sessionStorage.setItem("userList", JSON.stringify(state.users));
      } catch (error) {
        console.error("Error saving userList to sessionStorage:", error);
      }
    },
    resetUserData: (state) => {
      state.users = [];
      sessionStorage.removeItem("userList");
    }
  },
});

export const { login, logout, signup, resetUserData } = userSlice.actions;
export default userSlice.reducer;
