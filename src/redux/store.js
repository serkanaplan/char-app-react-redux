import { configureStore } from "@reduxjs/toolkit";
import  charactersSlice  from "./charactersSlice";
import  episodeSlice  from "./episodeSlice";

const store = configureStore({
    reducer: {
       characters : charactersSlice,
       episode : episodeSlice
    },

})

export default store