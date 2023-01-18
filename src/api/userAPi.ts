import BaseResponse from './response';
import User from './user';
import { USER_INFO_URL } from '../constants/url';
import customFetch from './api';

export const getUserInfo = (): Promise<BaseResponse<User>> => {
  return customFetch(USER_INFO_URL, { credentials: 'include' });
};
