import Button from '@components/common/Button/Button.component';
import { usePostContext } from 'context/Post.context';
import { Post } from 'interfaces/Post';
import { ChangeEvent, useEffect, useState } from 'react';

const AddPostLayout = () => {
  const { updateFormValues } = usePostContext();
  const [_formVal, setFormValues] = useState(
    {
      id: '',
      user: {},
      timestamp: '',
      description: '',
      comments: '',
      likes: ''
    }
  );

  const ActionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues((p) => ({ ...p, [e.target.name]: e.target.value }));
  }
  useEffect(() => {
    updateFormValues(_formVal as Post)
  }, [_formVal])

  return (
    <div className='w-full'>
      <div className="col-span-full">
        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
        <div className="mt-2">
          <textarea
            onChange={ActionChange}
            id="description" name="description" rows={3} className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>

    </div>
  );
}

export default AddPostLayout;