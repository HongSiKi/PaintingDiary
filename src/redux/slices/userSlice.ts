import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../../api/user';

interface UserState {
  user: User | null;
  isLogin: boolean;
}

const userInitialState: UserState = {
  user: null,
  isLogin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLogin = false;
    },
  },
});

export default userSlice;
