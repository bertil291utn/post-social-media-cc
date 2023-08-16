
import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from 'redux/Login/Login.reducer'
import postsReducer from 'redux/Post/Post.reducer'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    login: LoginReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch