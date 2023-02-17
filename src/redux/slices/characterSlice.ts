import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  index: number;
}

const initialState: IInitialState = {
  index: 0,
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    clickedCharacter: (state, action) => {
      state.index = action.payload;
    },
  },
});

export default characterSlice;
