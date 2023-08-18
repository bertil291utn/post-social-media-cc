import Card from '@components/common/Card.component';
import { Post } from 'interfaces/Post'
import { FcLike, FcLikePlaceholder, FcComments } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { EditUserSetLogin, initialSetLogin } from 'redux/Login/Login.reducer';
import { LoginSelector } from 'redux/Login/Login.selector';
import { setLike } from 'redux/Post/Post.reducer';
import { incrementPostLikes, updateUserLikedPosts } from 'services/updateUserLikedPosts.service';
import { formatDate } from 'utils/formatDate.utils';

const Post = ({ post }: { post: Post }) => {
  const dispatch = useDispatch();
  const [likedPostsMutation] = updateUserLikedPosts();
  const [incrementLikesMutation] = incrementPostLikes();
  const login = useSelector(LoginSelector);
  const user = login.user

  const Like = (numberToLike: number) => async () => {

    try {

      dispatch(setLike({ payload: post, numberToLike }))
      if (numberToLike > 0) {
        const variablesLikedPost = {
          userId: user.id,
          postId: post.id
        }
        const variablesIncrementLikedPost = {
          postId: post.id
        }
        const UserLikedPosts = await likedPostsMutation({ variables: variablesLikedPost })
        if (UserLikedPosts.data.updateUsers.users.length) {
          dispatch(EditUserSetLogin(UserLikedPosts.data.updateUsers.users[0]))
        }
        const r1 = await incrementLikesMutation({ variables: variablesIncrementLikedPost })
      }
    } catch (error: any) {
      console.log("🚀 ~ file: Post.component.tsx:35 ~ Like ~ error:", error.message)
      // setToastMessage('Something happened, user is not signed up correctly')

    }

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
            <p className='text-gray-400 text-xs'>{formatDate(post.timestamp)}</p>
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
              <FcLike onClick={Like(-1)} className='text-xl cursor-pointer' title="Dislike" />
              :
              <FcLikePlaceholder onClick={Like(1)} className='text-xl cursor-pointer' title="Like" />}
            <span>{`${post.likes}${post.likes > 1_000 ? 'K' : ''}`}</span>
          </div>

          <div className='flex gap-2 cursor-pointer' title='View comments'>
            <FcComments className='text-xl' />
            <span>{`${post.comments}${post.comments > 1_000 ? 'K' : ''}`}</span>
          </div>
        </div>

      </footer>

    </Card>
  )
}

export default Post;