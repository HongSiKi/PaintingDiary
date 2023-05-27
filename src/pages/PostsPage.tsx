import React, { useState } from 'react';
import useQuery from '../hooks/useQuery';
import { Post, PostsResponse } from '../api/response';
import customFetch from '../api/api';

function PostsPage() {
  // --------- state
  const [postMeta, setPostMeta] = useState({ total: 0, limit: 10, page: 1 });
  const [postList, setPostList] = useState<Post[]>([]);

  // --------- first query
  const skip = (postMeta.page - 1) * postMeta.limit;
  const { isLoading, data } = useQuery<PostsResponse>(
    () =>
      customFetch<PostsResponse>(
        `https://dummyjson.com/posts?limit=${postMeta.limit}&skip=${skip}`,
      ),
    (response) => setPostMeta((beforeData) => ({ ...beforeData, total: response.total })),
  );

  // --------- handler
  const buttonHandler = (newPage: number) => {
    const newSkip = (newPage - 1) * postMeta.limit;

    setPostMeta({ ...postMeta, page: newPage });

    customFetch<PostsResponse>(
      `https://dummyjson.com/posts?limit=${postMeta.limit}&skip=${newSkip}`,
    ).then((res) => setPostList(res.posts));
  };

  // --------- return
  if (isLoading) {
    return <div>loading...</div>;
  }

  if (data === null) {
    return <div>문제가 있습니다.. 새로고침 해주세요.</div>;
  }

  return (
    <div>
      <h1 className="text-3xl">Posts</h1>
      <hr />
      <div>
        {(postList.length !== 0 ? postList : data.posts).map((post) => (
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
      <div className="text-2xl flex gap-1 justify-center">
        <button
          type="button"
          disabled={postMeta.page === 1}
          className={postMeta.page === 1 ? 'text-gray' : ''}
          onClick={() => buttonHandler(Math.max(postMeta.page - 1, 1))}
        >
          &lt;
        </button>
        <span>{postMeta.page}</span>
        <button
          type="button"
          disabled={postMeta.page * postMeta.limit >= postMeta.total}
          className={postMeta.page * postMeta.limit >= postMeta.total ? 'text-gray' : ''}
          onClick={() =>
            buttonHandler(Math.min(postMeta.page + 1, Math.ceil(postMeta.total / postMeta.limit)))
          }
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default PostsPage;
