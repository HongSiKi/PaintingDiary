import { createSlice } from '@reduxjs/toolkit';

const nicknameSlice = createSlice({
  name: 'nickname',
  initialState: { message: '', isClick: false, isDuplicate: true },
  reducers: {
    message: (state, action) => {
      state.message = action.payload;
    },
    isClick: (state, action) => {
      state.isClick = action.payload;
    },
    isDuplicate: (state, action) => {
      state.isDuplicate = action.payload;
    },
  },
});

export default nicknameSlice;
