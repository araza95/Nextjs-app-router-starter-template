// themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state interface
interface ThemeState {
  isDarkTheme: boolean;
}

// Initial state
const initialState: ThemeState = {
  isDarkTheme: false,
};

// Create a slice
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
    setDarkTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkTheme = action.payload;
    },
  },
});

// Export actions and reducer
export const { toggleDarkTheme, setDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;
