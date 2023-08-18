'use client'

import PostLayout from '@components/Post/layouts/Post.layout';
import PostProvider from 'context/Post.context';
import { GetAllPosts } from 'services/fetchPosts.service';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialSetPost, setIsLoading } from 'redux/Post/Post.reducer';
import { Post } from '@interfaces/Post';
import { LoginSelector } from 'redux/Login/Login.selector';

const HomePage = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = GetAllPosts();
  const login = useSelector(LoginSelector);
  const user = login.user

  useEffect(() => {
    //TODO_LATER: check later after is not getting data properly, stucking data as undefined 
    //it might need to add a 10 seccs delay and thwn display as empty posts
    if (!data?.posts) return;
    let posts = data?.posts as Array<Post>
    if (!user?.likedPosts!.length) {
      posts = posts.map(p => ({ ...p, isLiked: false }))

    }

    if (user?.likedPosts!.length) {
      const likedPostsIdArr = user.likedPosts!.map(p => p.id)
      posts = posts.map(p => ({ ...p, isLiked: likedPostsIdArr.includes(p.id) }))
    }
    dispatch(initialSetPost(posts))
    dispatch(setIsLoading(loading))
  }, [data, user])

  return (
    <PostProvider>
      <PostLayout />
    </PostProvider>

  );
}

export default HomePage;