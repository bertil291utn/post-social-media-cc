import { Login } from '@interfaces/Login'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LOGIN_KEY, SAVED_USERNAME_DEVICE } from 'redux/Login/Login.constant'



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
      store.value = payload;
      localStorage.setItem(LOGIN_KEY, JSON.stringify(payload))
      localStorage.setItem(SAVED_USERNAME_DEVICE, payload.user.username)
    },
    SetLogOut: (store) => {
      store = initialState;
      localStorage.removeItem(LOGIN_KEY)
    },
    setIsLoading: (store, { payload }: PayloadAction<boolean>) => {
      store.isLoading = payload
    },
  },
})

export const { initialSetLogin, setIsLoading, SetLogOut } = LoginSlice.actions

export default LoginSlice.reducer