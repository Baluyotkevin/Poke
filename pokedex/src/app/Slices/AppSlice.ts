import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../Utils/Types";

const initialState: AppTypeInitialState = {
    isLoading: true,
};

export const AppSlice = createSlice({
    name:"app",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
});

export const {
    setLoading
} = AppSlice.actions;