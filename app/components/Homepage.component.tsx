import PostLayout from '@components/Post/layouts/Post.layout';
import PostProvider from 'context/Post.context';

const HomePage = () => {


  //TODO: reply with a comment task, leave to the end 
  return (
    <PostProvider>
      <PostLayout />
    </PostProvider>

  );
}

export default HomePage;