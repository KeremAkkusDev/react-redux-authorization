import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
  name: "site",
  initialState: {
    dark: false,
    language: "TR",
  },
  reducers: {
    themeChange: (state) => {
      state.dark = !state.dark;
    },
    languageChange: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { themeChange, languageChange } = site.actions;
export default site.reducer;
