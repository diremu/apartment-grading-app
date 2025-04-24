import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isLoggedIn: false,
        users: []
    },
    reducers: {
        login:(state, action) => {
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
        }
    }
})

export const {login, logout, signup} = userSlice.actions
export default userSlice.reducer