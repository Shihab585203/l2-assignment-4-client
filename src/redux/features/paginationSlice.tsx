import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface paginationState {
    currentPage: number;
    totalPages: number;
}

const initialState: paginationState = {
    currentPage: 1,
    totalPages: 1
}

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setTotalPages: (state, action: PayloadAction<number>) => {
            state.totalPages = action.payload;
        }
    }
})

export const { setCurrentPage, setTotalPages } = paginationSlice.actions;
export default paginationSlice.reducer;