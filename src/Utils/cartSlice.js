import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {

        // OLDER VERSION OF REDUX => DON'T MUTATE THE STATE
        // const newState = [...state];
        // newState.items.push(action.payload);
        // return newState;

        // Newer Version Of Redux
        // we are mutating the state over here
        // Read about immer 
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; // []
        },
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;