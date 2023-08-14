
import EmtyPosts from '@components/Post/EmptyPost.component';
import Post from '@components/Post/Post.component';
import { POSTS } from 'dummyData/Posts.data';
import { useState } from 'react';

const getPosts = async () => {
  const res = await fetch('https://api.example.com/...')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
const HomePage = async () => {

  // const _Posts = await getPosts()
  const _Posts: Array<Post> = POSTS

  //TODO: reply with a comment task, leave to the end 
  return (
    <div>
      {_Posts.length
        ?
        _Posts.map((post) => (
          <Post
            key={`post-card-${post.id}`}
            post={post}
          />
        ))
        :
        <EmtyPosts />

      }

      {/* TODO: add button to load more , being able to get posts by page size let say 10*/}

      {/* 
- add posts modal
- like/unlike behaviour   */}
      {/* REMINDER: if authentication is not possibe set anonymous or get suffle profile username and avatars */}
    </div>
  );
}

export default HomePage;