'use client'

import PostLayout from '@components/Post/layouts/Post.layout';
import PostProvider from 'context/Post.context';
import { getAllPosts } from 'data/fetchPosts.data';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initialSetPost, setIsLoading } from 'redux/Post/Post.reducer';

const HomePage = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = getAllPosts();

  useEffect(() => {
    if (data?.posts) {
      dispatch(initialSetPost(data?.posts))
      dispatch(setIsLoading(loading))
    }
  }, [data])

  return (
    <PostProvider>
      <PostLayout />
    </PostProvider>

  );
}

export default HomePage;