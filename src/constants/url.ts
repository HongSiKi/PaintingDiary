const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:33000';

const makeUrl = (url: string) => `${BACKEND_URL}${url}`;

export const KAKAO_LOGIN_URL = makeUrl('/api/auth/social/kakao');
export const NAVER_LOGIN_URL = makeUrl('/api/auth/social/naver');
export const USER_INFO_URL = makeUrl('/api/users');
