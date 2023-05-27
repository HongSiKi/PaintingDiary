import React, { useRef, useState } from 'react';
import useQuery from '../hooks/useQuery';
import { Post, PostsResponse } from '../api/response';
import customFetch from '../api/api';

const useThrottle = <T extends any[]>(f: (...args: T) => void, timeout: number) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  return (...args: T) => {
    if (!timer.current) {
      timer.current = setTimeout(() => {
        f(...args);
        timer.current = null;
      }, timeout);
    }
  };
};

function PostsScrollPage() {
  const postMetaRef = useRef({ total: 0, limit: 10, page: 1, fetching: false });
  const postMeta = postMetaRef.current;
  const [postList, setPostList] = useState<Post[]>([]);

  const skip = (postMeta.page - 1) * postMeta.limit;

  const { isLoading } = useQuery<PostsResponse>(
    () =>
      customFetch<PostsResponse>(
        `https://dummyjson.com/posts?limit=${postMeta.limit}&skip=${skip}`,
      ),
    (response) => {
      postMetaRef.current = { ...postMeta, total: response.total };
      setPostList(response.posts);
    },
  );

  const onScrollDropdown = (e: React.UIEvent<HTMLDivElement>) => {
    const meta = postMetaRef.current;
    const target = e.target as HTMLDivElement;
    const { scrollHeight, scrollTop, clientHeight } = target;

    if (
      (clientHeight + scrollTop) / scrollHeight >= 0.7 &&
      !meta.fetching &&
      meta.page * meta.limit < meta.total
    ) {
      const newSkip = meta.page * meta.limit;
      postMetaRef.current = { ...meta, page: meta.page + 1, fetching: true };

      customFetch<PostsResponse>(
        `https://dummyjson.com/posts?limit=${postMeta.limit}&skip=${newSkip}`,
      ).then((res) => {
        setPostList((beforeData) => [...beforeData, ...res.posts]);
        postMetaRef.current = { ...postMetaRef.current, fetching: false };
      });
    }
  };
  const throttleScroll = useThrottle<[React.UIEvent<HTMLDivElement>]>(onScrollDropdown, 100);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (!postList.length) {
    return <div>문제가 있습니다.. 새로고침 해주세요.</div>;
  }

  return (
    <div>
      <h1 className="text-3xl">Posts</h1>
      <hr />
      <div
        style={{ height: 'calc( 100vh - 64px - 2.25rem )', overflow: 'scroll' }}
        onScroll={throttleScroll}
      >
        {postList.map((post) => (
          <div
            key={post.id}
            className="m-5 p-3 border-2 rounded-lg border-lightBlack flex flex-col gap-2"
          >
            <div className="text-xl">{post.title}</div>
            <div>{post.body}</div>
            <div className="italic text-lightBlack">
              {post.tags.map((tag) => (
                <span key={`${post.id}${tag}`}>#{tag} </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsScrollPage;
