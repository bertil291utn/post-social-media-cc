import { Login } from '@interfaces/Login'
import { User } from '@interfaces/User'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LOGIN_KEY, SAVED_USERNAME_DEVICE } from 'redux/Login/Login.constant'



export interface LoginState {
  value: Login
  isLoading: boolean
}

const INIT_STATE: LoginState = {
  value: {} as Login,
  isLoading: true,
}

export const LoginSlice = createSlice({
  name: 'login',
  initialState: INIT_STATE,
  reducers: {
    initialSetLogin: (store, { payload }: PayloadAction<Login>) => {
      store.value = payload;
      localStorage.setItem(LOGIN_KEY, JSON.stringify(payload))
      localStorage.setItem(SAVED_USERNAME_DEVICE, payload.user?.username)
    },
    EditUserSetLogin: (store, { payload }: PayloadAction<User>) => {
      store.value = { ...store.value, user: payload };
    },
    SetLogOut: (store) => {
      store.value = {} as Login;
      store.isLoading = true;
      localStorage.removeItem(LOGIN_KEY)
    },
    setIsLoading: (store, { payload }: PayloadAction<boolean>) => {
      store.isLoading = payload
    },
  },
})

export const { initialSetLogin, setIsLoading, SetLogOut, EditUserSetLogin } = LoginSlice.actions

export default LoginSlice.reducer