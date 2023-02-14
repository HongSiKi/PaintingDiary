import { configureStore } from '@reduxjs/toolkit';
import characterSlice from './slices/characterSlice';

import nicknameSlice from './slices/nicknameSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    nickname: nicknameSlice.reducer,
    user: userSlice.reducer,
    character: characterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
