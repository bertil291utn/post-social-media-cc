
'use client'

import EmptyPosts from '@components/Post/EmptyPost.component';
import Post from '@components/Post/Post.component';
import { POSTS } from 'dummyData/Posts.data';

const getPosts = async () => {
  const res = await fetch('https://api.example.com/...')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const PostLayout = () => {
  const AddPost = () => {
    console.log('add Post')
  }
  // const _Posts = await getPosts()
  const _Posts: Array<Post> = []
  // POSTS

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
        <EmptyPosts
          onClickAddPost={AddPost}
        />

      }

      {/* TODO: add button to load more , being able to get posts by page size let say 10*/}

      {/* 
- add posts modal
- like/unlike behaviour   */}
      {/* REMINDER: if authentication is not possibe set anonymous or get suffle profile username and avatars */}
    </div>
   );
}
 
export default PostLayout;