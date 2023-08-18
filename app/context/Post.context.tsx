'use client'

import { Post } from 'interfaces/Post';
import { createContext, useContext, useState } from 'react';

interface IPropsProv {
  children: JSX.Element
}

interface IContextProps {
  formValues: Post
  updateFormValues: (Post: Post) => void
  submittedForm: boolean
  updateSubmittedForm: (val: boolean) => void
  toastMessageLike: string | boolean
  setToastMessageLike: React.Dispatch<React.SetStateAction<boolean | string>>
}

const PostContext = createContext<IContextProps>({} as IContextProps);

const PostProvider = ({ children }: IPropsProv) => {
  const [submittedForm, setSubmittedForm] = useState(false)
  const [formValues, setFormValues] = useState({} as Post);
  const [toastMessageLike, setToastMessageLike] = useState<boolean | string>('');

  const updateFormValues = (
    Post: Post,
  ) => {
    setFormValues(Post);
  }
  const updateSubmittedForm = (
    val: boolean,
  ) => {
    setSubmittedForm(val);
  }
  const updateToastMessageLike = (
    val: string,
  ) => {
    setToastMessageLike(val);
  }

  return (
    <PostContext.Provider
      value={{
        formValues,
        updateFormValues,
        submittedForm,
        updateSubmittedForm,
        toastMessageLike,
        setToastMessageLike
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;

export const usePostContext = () => {
  return useContext(PostContext);
};