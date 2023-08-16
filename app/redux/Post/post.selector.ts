import { RootState } from 'redux/store';

export const postsSelector = (state: RootState) => state.posts.value;
export const postIsLoadingSelector = (state: RootState) => state.posts.isLoading;