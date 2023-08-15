'use client'

import PostLayout from '@components/Post/layouts/Post.layout';
import PostProvider from 'context/Post.context';
import { POSTS } from 'dummyData/Posts.data';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initialSetPost, setIsLoading } from 'redux/Post.reducer';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //TODO: get POST from database instead local data; order desc by timestamp
    dispatch(initialSetPost(POSTS))
    dispatch(setIsLoading(false))

  }, [])

  return (
    <PostProvider>
      <PostLayout />
    </PostProvider>

  );
}

export default HomePage;