import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SortType = '' | 'price-asc' | 'price-desc' | 'brand-desc' | 'rating-desc';

export interface SortState {
    sortBy: SortType
} 

const initialState: SortState = {
    sortBy: ""
}

const sortingSlice = createSlice({
    name: 'sorting',
    initialState,
    reducers: {
        setSortType: (state, action: PayloadAction<SortType>) => {
            state.sortBy = action.payload;
        },
        clearSortType: (state) =>{
            state.sortBy = "";
        }
    }
})

export const { setSortType,clearSortType } = sortingSlice.actions;
export default sortingSlice.reducer;