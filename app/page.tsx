'use client'

import HomePage from '@components/Homepage.component';
import { Provider } from 'react-redux';
import { store } from 'redux/post.store';

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}
