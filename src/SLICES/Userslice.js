import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userslice = createSlice({
    name: "users",
    initialState,
    reducers: {
        adduser: (state, action) => {
            console.log(state); // Check the state here
            if (Array.isArray(state)) {
                state.push(action.payload); // Ensure state is an array before using push
            } else {
                console.error("State is not an array", state);
            }
        },
        removeuser: (state, action) => {
            if (Array.isArray(state)) {
                state.splice(action.payload, 1);
            } else {
                console.error("State is not an array", state);
            }
        }
    }
});

export const { adduser, removeuser } = userslice.actions;
export default userslice.reducer;
