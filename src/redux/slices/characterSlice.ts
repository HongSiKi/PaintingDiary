import { createSlice } from '@reduxjs/toolkit';

const characterSlice = createSlice({
  name: 'character',
  initialState: { index: 0 },
  reducers: {
    clickedCharacter: (state, action) => {
      state.index = action.payload;
    },
  },
});

export default characterSlice;
