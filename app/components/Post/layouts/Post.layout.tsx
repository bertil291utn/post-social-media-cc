
'use client'

import AddPostLayout from '@components/Post/layouts/AddPost.layout';
import EmptyPosts from '@components/Post/EmptyPost.component';
import Post from '@components/Post/Post.component';
import Modal from '@components/common/Modal.component';
import { useState } from 'react';
import { usePostContext } from 'context/Post.context';
import { v4 as uuidv4 } from 'uuid';
import { getRandomUser } from 'fetchData/getRandomUser.fetch';
import { useSelector } from 'react-redux';
import { postIsLoadingSelector, postsSelector } from 'redux/post.selector';
import PostSkeleton from '@components/Post/PostSkeleton.component';

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
  const _PostsArr = useSelector(postsSelector)
  const postsIsloading = useSelector(postIsLoadingSelector)


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
    //TODO:triiger to db
    //dispatch to redux
  }
  if (!_PostsArr.length && postsIsloading) {
    return (
      <PostSkeleton />
    )
  }

  if (!_PostsArr.length && !postsIsloading) {
    return (
      <EmptyPosts
        onClickAddPost={AddPostOpenModal}
      />
    )
  }

  return (
    <div>
      {
        _PostsArr.map((post) => (
          <Post
            key={`post-card-${post.id}`}
            post={post}
          />
        ))
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
      {/* TODO: reply with a comment task, leave to the end  */}

    </div>
  );
}

export default PostLayout;