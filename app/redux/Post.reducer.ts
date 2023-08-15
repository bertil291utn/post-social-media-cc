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
    setIsLoading: (store, { payload }: PayloadAction<boolean>) => {
      store.isLoading = payload
    },
  },
})

export const { initialSetPost, setIsLoading } = postSlice.actions

export default postSlice.reducer