import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Post } from 'interfaces/Post'

export interface PostState {
  value: Array<Post>
  isLoading: boolean
}

const INIT_STATE: PostState = {
  value: [],
  isLoading: true,
}

export const postSlice = createSlice({
  name: 'posts',
  initialState: INIT_STATE,
  reducers: {
    initialSetPost: (store, { payload }: PayloadAction<Array<Post>>) => {
      store.value = payload
    },
    ResetInitValPost: (store) => {
      store.value = [];
      store.isLoading = true;
    },
    setIsLoading: (store, { payload }: PayloadAction<boolean>) => {
      store.isLoading = payload
    },
    setLike: (store, action: PayloadAction<{ payload: Post; numberToLike: number }>) => {
      const { payload, numberToLike } = action.payload;
      const postsArr = store.value.slice()
      const editedPostsArr = postsArr
        .map(p => p.id == payload.id ? ({ ...p, isLiked: !p.isLiked }) : p)
      store.value = editedPostsArr
    },
    addNewPost: (store, { payload }: PayloadAction<Post>) => {
      const postsArr = store.value.slice()
      postsArr.unshift(payload)
      store.value = postsArr
    },
  },
})

export const { initialSetPost, setIsLoading, setLike, addNewPost, ResetInitValPost } = postSlice.actions

export default postSlice.reducer