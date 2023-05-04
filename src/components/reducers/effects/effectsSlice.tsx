import { createSlice } from "@reduxjs/toolkit";

export const effectsSlice = createSlice({
  name: "effects",
  initialState: {
    contrast: 100,
    opacity: 1,
    brightness: 100,
    blur: 0,
    hue: 0,
    sepia: 0,
    saturate: 1,
  },
  reducers: {
    contrast: (state: any, action: any) => {
      state.contrast = action.payload;
    },
    opacity: (state: any, action: any) => {
      state.opacity = action.payload;
    },
    brightness: (state: any, action: any) => {
      state.brightness = action.payload;
    },
    blur: (state: any, action: any) => {
      state.blur = action.payload;
    },
    hue: (state: any, action: any) => {
      state.hue = action.payload;
    },
    sepia: (state: any, action: any) => {
      state.sepia = action.payload;
    },
    saturate: (state: any, action: any) => {
      state.saturate = action.payload;
    },
    RESET: (state: any) => {
      state.contrast = 100;
      state.opacity = 1;
      state.brightness = 100;
      state.blur = 0;
      state.hue = 0;
      state.sepia = 0;
      state.saturate = 1;
    },
  },
});

export const {
  RESET,
  contrast,
  opacity,
  brightness,
  saturate,
  blur,
  hue,
  sepia,
} = effectsSlice.actions;

export default effectsSlice.reducer;
