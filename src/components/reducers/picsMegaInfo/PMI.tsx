import { createSlice } from "@reduxjs/toolkit";

export const PMI = createSlice({
  name: "PMI",
  initialState: {
    pic: null,
  },
  reducers: {
    PMIOnLoad: (state: any, action: any) => {
      state.pic = action.payload;
    },
  },
});

export const { PMIOnLoad } = PMI.actions;

export default PMI.reducer;
