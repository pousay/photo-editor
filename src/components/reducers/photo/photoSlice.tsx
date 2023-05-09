import { createSlice } from "@reduxjs/toolkit";

export const photoSlice = createSlice({
  name: "photo",
  initialState: {
    photoURl: null,
  },
  reducers: {
    upload: (state: any, action: { payload: any }) => {
      state.photoURl = action.payload;
    },
  },
});

export const { upload } = photoSlice.actions;

export default photoSlice.reducer;
