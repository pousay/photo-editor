import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menuStatus",
  initialState: {
    isMenuOpened: false,
  },
  reducers: {
    toggle: (state: any) => {
      state.isMenuOpened = !state.isMenuOpened;
    },
  },
});

export const { toggle } = menuSlice.actions;

export default menuSlice.reducer;
