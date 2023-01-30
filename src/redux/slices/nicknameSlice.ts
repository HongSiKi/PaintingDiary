import { createSlice } from '@reduxjs/toolkit';

const nicknameSlice = createSlice({
  name: 'nickname',
  initialState: { nickname: '', message: '', checked: false, isDuplicate: true },
  reducers: {
    nickname: (state, action) => {
      state.nickname = action.payload;
    },
    message: (state, action) => {
      state.message = action.payload;
      state.checked = false;
    },
    isDuplicate: (state, action) => {
      state.isDuplicate = action.payload;
      state.checked = true;
    },
  },
});

export default nicknameSlice;
