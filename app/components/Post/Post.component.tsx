import Card from '@components/common/Card.component';
import { Post } from 'interfaces/Post'
import { FcLike, FcLikePlaceholder, FcComments } from "react-icons/fc";

const Post = ({ post }: { post: Post }) => {
  //TODO: dispatch like and dislike to redux then update post to DB

  const Like = (isLiked: boolean) => () => {
    console.log(`value liked for ${post.id} post sent to DB`, !isLiked)

  }

  return (
    <Card
      centerAligned={false}
      className='my-5'
    >
      <header>
        <div className='flex gap-3 items-center'>
          <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src={post.user.avatarURL} alt={post.user.name} />
          <div>
            <h3>{post.user.name}</h3>
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
            {post.isLiked
              ?
              <FcLike onClick={Like(post.isLiked)} className='text-xl cursor-pointer' title="Dislike" />
              :
              <FcLikePlaceholder onClick={Like(post.isLiked)} className='text-xl cursor-pointer' title="Like" />}
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