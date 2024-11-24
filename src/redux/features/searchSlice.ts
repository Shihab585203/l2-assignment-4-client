import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface searchState {
    term: string
}

const initialState: searchState = {
    term: "",
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.term = action.payload
        },
    }
})

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;