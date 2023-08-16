import { RootState } from 'redux/store';

export const LoginSelector = (state: RootState) => state.login.value;
export const LoginIsLoadingSelector = (state: RootState) => state.login.isLoading;