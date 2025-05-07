import { createSlice } from "@reduxjs/toolkit";

let users = [];
let currentUser = "";
try {
  const formerState = sessionStorage.getItem("userList");
  if (formerState) {
    users = JSON.parse(formerState);
    if (!Array.isArray(users)) {
      users = [];
      sessionStorage.removeItem("userList");
    }
  }
  // const formerUser = sessionStorage.getItem("currentUser")
  // if (typeof formerUser !== string) {
  //   sessionStorage.removeItem("currentUser")
  // } else {
  //   currentUser = sessionStorage.getItem("currentUser")
  // }
} catch (error) {
  console.error( error.message);
  sessionStorage.removeItem("userList");
  sessionStorage.removeItem("currentUser")
}

currentUser = sessionStorage.getItem("currentUser")

const initialState = {
  user: currentUser,
  isLoggedIn: false,
  users: users
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      sessionStorage.setItem("currentUser", action.payload.user)
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      sessionStorage.removeItem("currentUser")
    },
    signup: (state, action) => {
      state.users = [...state.users, action.payload];
      state.user = action.payload;
      state.isLoggedIn = true;
      console.log("User added:", action.payload);
      try {
        sessionStorage.setItem("userList", JSON.stringify(state.users));
        console.log(action.payload)
        sessionStorage.setItem("currentUser", JSON.stringify(action.payload))
      } catch (error) {
        console.error("Error saving userList to sessionStorage:", error);
      }
    },
    resetUserData: (state) => {
      state.users = [];
      sessionStorage.removeItem("userList");
      sessionStorage.removeItem("currentUser")
    }
  },
});

export const { login, logout, signup, resetUserData } = userSlice.actions;
export default userSlice.reducer;
