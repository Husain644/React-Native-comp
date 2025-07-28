import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
    currentLanguage: "en", // Default language
    },
    reducers: {
    setEnglish: (state) => {
        state.currentLanguage = "en"; // Set to English
    },
    setHindi: (state) => {
        state.currentLanguage = "hi"// Set to Hindi
    }}
})
export const { setHindi,setEnglish } = languageSlice.actions;
export default languageSlice.reducer;