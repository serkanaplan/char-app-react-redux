import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEpisodes = createAsyncThunk("episode/fetchAll", async () => {
    const response = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/episode`);
    return await response.data;
});

const episodeSlice = createSlice({
    name: "episode",
    initialState: {
        items: [],
        status: "idle",
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchEpisodes.fulfilled, (state, action) => {
            state.status = "success";
            state.items = action.payload;
        })
        .addCase(fetchEpisodes.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchEpisodes.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message
        })
    }

})

export const  episodeSelector = (state) => state.episode.items.results
export const stausSelector = (state) => state.episode.status
export const errorSelector = (state) => state.episode.error
export default episodeSlice.reducer