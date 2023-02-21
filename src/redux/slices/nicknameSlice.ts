import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nickname: '',
  message: '',
  checked: false,
  isDuplicate: true,
};

const nicknameSlice = createSlice({
  name: 'nickname',
  initialState,
  reducers: {
    updateNickname: (state, action) => {
      state.nickname = action.payload;
    },
    updateMessage: (state, action) => {
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
