export default interface BaseResponse<T> {
  status: number;
  result: T | null;
  errorDescription: string | null;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}
