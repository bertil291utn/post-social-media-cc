
'use client'

import AddPostLayout from '@components/Post/layouts/AddPost.layout';
import EmptyPosts from '@components/Post/EmptyPost.component';
import Post from '@components/Post/Post.component';
import Modal from '@components/common/Modal.component';
import { POSTS } from 'dummyData/Posts.data';
import { useEffect, useState } from 'react';
import { usePostContext } from 'context/Post.context';
import { v4 as uuidv4 } from 'uuid';
import { getRandomUser } from 'fetchData/getRandomUser.fetch';

const getPosts = async () => {
  const res = await fetch('https://api.example.com/...')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const PostLayout = () => {
  const { formValues, updateFormValues } = usePostContext();
  const [addPostModal, setAddPostModal] = useState(false);

  useEffect(() => {
    console.log("🚀 ~ file: Post.layout.tsx:22 ~ PostLayout ~ formValues:", formValues)
  }, [formValues])

  const AddPostOpenModal = () => {
    setAddPostModal(true)
  }

  const AddPostBtnAction = async () => {
    const idUUID = uuidv4();
    let genereatedUser = await getRandomUser();
    genereatedUser = genereatedUser.results[0];
    updateFormValues(
      {
        ...formValues,
        timestamp: new Date().toISOString(),
        id: idUUID,
        likes: '0',
        comments: '0',
        user: {
          avatarURL: genereatedUser.picture.medium,
          name: `${genereatedUser.name.first} ${genereatedUser.name.last}`
        }
      }
    )
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
        <AddPostLayout />
      </Modal>

      {/* TODO: add button to load more , being able to get posts by page size let say 10*/}

      {/* 
- like/unlike behaviour   */}
      {/* REMINDER: if authentication is not possibe set anonymous or get suffle profile username and avatars */}
    </div>
  );
}

export default PostLayout;