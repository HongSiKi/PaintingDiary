import { createSlice } from '@reduxjs/toolkit';

const nicknameSlice = createSlice({
  name: 'nickname',
  initialState: { message: '', checked: false, isDuplicate: true },
  reducers: {
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
