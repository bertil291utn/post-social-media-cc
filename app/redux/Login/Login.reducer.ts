import { Login } from '@interfaces/Login'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoginState {
  value: Login
  isLoading: boolean
}

const initialState: LoginState = {
  value: {} as Login,
  isLoading: true,
}

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    initialSetLogin: (store, { payload }: PayloadAction<Login>) => {
      store.value = payload
    },
    setIsLoading: (store, { payload }: PayloadAction<boolean>) => {
      store.isLoading = payload
    },
  },
})

export const { initialSetLogin, setIsLoading } = LoginSlice.actions

export default LoginSlice.reducer