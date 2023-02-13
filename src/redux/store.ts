import { configureStore } from '@reduxjs/toolkit';

import nicknameSlice from './slices/nicknameSlice';
import userSlice from './slices/userSlice';
import assetSlice from './slices/assetSlice';

const store = configureStore({
  reducer: {
    nickname: nicknameSlice.reducer,
    user: userSlice.reducer,
    asset: assetSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
