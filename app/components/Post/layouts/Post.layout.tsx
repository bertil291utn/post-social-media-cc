
'use client'

import AddPostLayout from '@components/Post/layouts/AddPost.layout';
import EmptyPosts from '@components/Post/EmptyPost.component';
import Post from '@components/Post/Post.component';
import Modal from '@components/common/Modal.component';
import { useState } from 'react';
import { usePostContext } from 'context/Post.context';
import { v4 as uuidv4 } from 'uuid';
import { getRandomUser } from 'fetchData/getRandomUser.fetch';
import { useDispatch, useSelector } from 'react-redux';
import { postIsLoadingSelector, postsSelector } from 'redux/post.selector';
import PostSkeleton from '@components/Post/PostSkeleton.component';
import { addNewPost } from 'redux/Post.reducer';
import Button from '@components/common/Button/Button.component';

const getPosts = async () => {
  const res = await fetch('https://api.example.com/...')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const PostLayout = () => {
  const { formValues, updateFormValues,updateSubmittedForm } = usePostContext();
  const [addPostModal, setAddPostModal] = useState(false);
  const _PostsArr = useSelector(postsSelector)
  const postsIsloading = useSelector(postIsLoadingSelector)
  const dispatch = useDispatch();

  const AddPostOpenModal = () => {
    setAddPostModal(true);
    updateSubmittedForm(false);
  }

  const AddPostBtnAction = async () => {
    updateSubmittedForm(true)
    const idUUID = uuidv4();
    let genereatedUser = await getRandomUser();
    genereatedUser = genereatedUser.results[0];
    const post = {
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
    updateFormValues(post)
    dispatch(addNewPost(post))
    setAddPostModal(false)
    
    //TODO:if after 10 seconds doesn't return a value whetjer is error or a 202 value
    //close the modal and display an error
    //TODO: close and display a toast after being saved
    //TODO:trigger to db
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
      <Button
        className='mt-14 text-white'
        onClick={AddPostOpenModal}
      >
        <span>Add new post</span>
      </Button>
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