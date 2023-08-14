import Card from '@components/common/Card.component';
import { Post } from 'interfaces/Post'
import { FcLike } from "react-icons/fc";
import { FcComments } from "react-icons/fc";

const Post = ({ post }: { post: Post }) => {
  return (
    <Card
      centerAligned={false}
      className='my-5'
    >
      <header>
        <div className='flex gap-3 items-center'>
          <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src={post.user.avatarURL} alt={post.user.username} />
          <div>
            <h3>{post.user.username}</h3>
            <p className='text-gray-400 text-xs'>{post.timestamp}</p>
          </div>
        </div>
      </header>

      <section className='my-6'>
        <p className='text-base'>
          {post.description}
        </p>
        {post.media &&
          <img
            className='w-full my-5 border rounded-sm'
            loading='lazy'
            src={post.media}
            alt="image-desc" />
        }
      </section>

      <footer>
        <div className='flex gap-5 items-center'>
          <div className='flex gap-2'>
            <FcLike className='text-xl cursor-pointer' title="Like" />
            <span>{post.likes}</span>
          </div>

          <div className='flex gap-2 cursor-pointer' title='View comments'>
            <FcComments className='text-xl' />
            <span>{post.comments}</span>
          </div>
        </div>

      </footer>

    </Card>
  )
}

export default Post;