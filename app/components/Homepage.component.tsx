'use client'

import PostLayout from '@components/Post/layouts/Post.layout';
import PostProvider from 'context/Post.context';
import { getAllPosts } from 'services/fetchPosts.service';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initialSetPost, setIsLoading } from 'redux/Post/Post.reducer';

const HomePage = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = getAllPosts();

  useEffect(() => {
    //TODO_LATER: check later after is not getting data properly, stucking data as undefined 
    //it might need to add a 10 seccs delay and thwn display as empty posts
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