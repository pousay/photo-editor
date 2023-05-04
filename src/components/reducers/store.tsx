import { configureStore } from "@reduxjs/toolkit";
import effectsSlice from "./effects/effectsSlice";
import menuSlice from "./menu/openedMenuSlice";
import photoSlice from "./photo/photoSlice";
import PMI from "./picsMegaInfo/PMI";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    photo: photoSlice,
    effects: effectsSlice,
    PMI: PMI,
  },
});

export default store;
