import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Post } from 'interfaces/Post'

export interface PostState {
  value: Array<Post>
  isLoading: boolean
}

const initialState: PostState = {
  value: [],
  isLoading: true,
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    initialSetPost: (store, { payload }: PayloadAction<Array<Post>>) => {
      store.value = payload
    },
    ResetInitValPost: (store) => {
      store = { ...initialState }
    },
    setIsLoading: (store, { payload }: PayloadAction<boolean>) => {
      store.isLoading = payload
    },
    setLike: (store, { payload }: PayloadAction<Post>) => {
      const postsArr = store.value.slice()
      const editedPostsArr = postsArr
        .map(p => p.id == payload.id ? ({ ...p, isLiked: !p.isLiked }) : p)
      store.value = editedPostsArr
    },
    addNewPost: (store, { payload }: PayloadAction<Post>) => {
      const postsArr = store.value.slice()
      postsArr.unshift(payload)
      //NOTE:assuming with init get post order desc by timestamp
      //unshift is adding at the top of post array, and we won't need order again
      store.value = postsArr
    },
  },
})

export const { initialSetPost, setIsLoading, setLike, addNewPost,ResetInitValPost } = postSlice.actions

export default postSlice.reducer