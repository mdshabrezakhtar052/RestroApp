import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    // Add all the reducer inside the app reducer - as of now we have only cartReducer
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;