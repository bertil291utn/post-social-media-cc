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
}

const PostContext = createContext<IContextProps>({} as IContextProps);

const PostProvider = ({ children }: IPropsProv) => {
  const [submittedForm, setSubmittedForm] = useState(false)
  const [formValues, setFormValues] = useState({} as Post);

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

  return (
    <PostContext.Provider
      value={{
        formValues,
        updateFormValues,
        submittedForm,
        updateSubmittedForm
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