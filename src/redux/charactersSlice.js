import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters =createAsyncThunk("characters/ferchCharacters", async (pageNumber) => {
    const response = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character?page=${pageNumber}`);
    return await response.data;
});

export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        status: "idle",
        error: null,
        pageInfo:{
            next:null,
            prev:null
        },
        pageNumber: 1
    },
    reducers: {
        setPage: (state, action) => {
            state.pageNumber = action.payload;
          },
          setStatus: (state, action) => {
            state.status = action.payload;
          }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.status = "success";
            state.items = action.payload.results;
            // state.items = [...state.items,...action.payload.results];
            state.pageInfo = action.payload.info;
        })
        .addCase(fetchCharacters.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchCharacters.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message   
        })
    },
});

export const { setPage ,setStatus} = charactersSlice.actions;
export default charactersSlice.reducer;