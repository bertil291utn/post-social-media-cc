import { RootState } from 'redux/post.store';

export const postsSelector = (state: RootState) => state.posts.value;
export const postIsLoadingSelector = (state: RootState) => state.posts.isLoading;