
'use client'

import EmptyPosts from '@components/Post/EmptyPost.component';
import Post from '@components/Post/Post.component';
import Modal from '@components/common/Modal.component';
import { POSTS } from 'dummyData/Posts.data';
import { useState } from 'react';

const getPosts = async () => {
  const res = await fetch('https://api.example.com/...')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const PostLayout = () => {

  const [addPostModal, setAddPostModal] = useState(false);

  const AddPostOpenModal = () => {
    setAddPostModal(true)
  }

  const AddPostBtnAction = () => {
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
          onClickAddPost={AddPostOpenModal}
        />
      }

      <Modal
        show={addPostModal}
        setShow={setAddPostModal}
        acceptLabel={'Add'}
        acceptBtnAction={AddPostBtnAction}
      >
        <p>
          this add a post  modal
        </p>
      </Modal>

      {/* TODO: add button to load more , being able to get posts by page size let say 10*/}

      {/* 
      - after hit add button, show a spinner on ADD button and disable ADD & CANCEL button
- like/unlike behaviour   */}
      {/* REMINDER: if authentication is not possibe set anonymous or get suffle profile username and avatars */}
    </div>
  );
}

export default PostLayout;