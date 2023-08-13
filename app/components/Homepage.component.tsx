import Post from '@components/Post.component';
import { POSTS } from 'dummyData/Posts.data';

const HomePage = () => {
  return (
    <div>
      {POSTS.map((post) => (
        <Post
          key={`post-card-${post.id}`}
          post={post}
        />
      ))}
    </div>
  );
}

export default HomePage;