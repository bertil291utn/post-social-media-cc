
'use client'

import AddPostLayout from '@components/Post/layouts/AddPost.layout';
import EmptyPosts from '@components/Post/EmptyPost.component';
import Post from '@components/Post/Post.component';
import Modal from '@components/common/Modal.component';
import { useState } from 'react';
import { usePostContext } from 'context/Post.context';
import { v4 as uuidv4 } from 'uuid';
import { getRandomUser } from 'services/getRandomUser.service';
import { useDispatch, useSelector } from 'react-redux';
import PostSkeleton from '@components/Post/PostSkeleton.component';
import { addNewPost } from 'redux/Post/Post.reducer';
import Button from '@components/common/Button/Button.component';
import { postIsLoadingSelector, postsSelector } from 'redux/Post/post.selector';
import { LOGIN_KEY } from 'redux/Login/Login.constant';
import { useRouter } from 'next/navigation';
import { LoginSelector } from 'redux/Login/Login.selector';


const PostLayout = () => {
  const router = useRouter();
  const { formValues, updateFormValues, updateSubmittedForm } = usePostContext();
  const [addPostModal, setAddPostModal] = useState(false);
  const _PostsArr = useSelector(postsSelector)
  const postsIsloading = useSelector(postIsLoadingSelector)
  const login = useSelector(LoginSelector);
  const user = login.user
  const dispatch = useDispatch();

  const AddPostOpenModal = () => {
    const theresSession = localStorage.getItem(LOGIN_KEY)
    if (!theresSession) {
      router.replace('/login')
      return
    }
    setAddPostModal(true);
    updateSubmittedForm(false);
  }

  const AddPostBtnAction = async () => {
    updateSubmittedForm(true)
    const idPost = uuidv4();
    const idUser = uuidv4();
    let generatedUser = await getRandomUser();
    generatedUser = generatedUser.results[0];
    const post = {
      ...formValues,
      timestamp: new Date().toISOString(),
      isLiked: true,
      id: idPost,
      likes: 1,
      comments: 0,
      user: {
        id: user.id,
        username: user.username,
        avatarURL: user.avatarURL,
        name: user.name
      }
    }
    updateFormValues(post)
    setAddPostModal(false)
    //set
    //TODO:trigger to db

    dispatch(addNewPost(post))


    //TODO:if after 10 seconds doesn't return a value whetjer is error or a 202 value
    //close the modal and display an error
    //TODO: close and display a toast after being saved
  }
  if (!_PostsArr.length && postsIsloading) {
    return (
      <PostSkeleton />
    )
  }

  if (!_PostsArr.length && !postsIsloading) {
    return (
      <>
        <EmptyPosts
          onClickAddPost={AddPostOpenModal}
        />
        <AddPostModalLayout
          addPostModal={addPostModal}
          setAddPostModal={setAddPostModal}
          AddPostBtnAction={AddPostBtnAction}
        />
      </>
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

      <AddPostModalLayout
        addPostModal={addPostModal}
        setAddPostModal={setAddPostModal}
        AddPostBtnAction={AddPostBtnAction}
      />

      {/* TODO: add button to load more , being able to get posts by page size let say 10*/}
      {/* TODO: reply with a comment task, leave to the end  */}

    </div>
  );
}

export default PostLayout;


const AddPostModalLayout = ({ addPostModal, setAddPostModal, AddPostBtnAction }:
  {
    addPostModal: boolean
    setAddPostModal: React.Dispatch<React.SetStateAction<boolean>>
    AddPostBtnAction: () => void
  }
) => {
  return (

    <Modal
      show={addPostModal}
      setShow={setAddPostModal}
      acceptLabel={'Add'}
      acceptBtnAction={AddPostBtnAction}
    >
      <AddPostLayout />
    </Modal>
  )
}