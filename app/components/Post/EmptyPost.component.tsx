import Button from '@components/common/Button/Button.component';

const EmtyPosts = ({ className = '' }:
  {
    className?: string
  }
) => {
  return (
    <div className={`${className} flex items-center justify-center h-screen`}>
      <div className='w-3/4 mx-auto'>
        <h1 className='text-center text-lg'>There are no available posts</h1>
        <Button
        className='mt-14 text-white'
        >
          <span>Add post</span>
        </Button>
      </div>

    </div>);
}

export default EmtyPosts;