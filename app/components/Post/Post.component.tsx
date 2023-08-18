import Card from '@components/common/Card.component';
import { usePostContext } from 'context/Post.context';
import { Post } from 'interfaces/Post'
import { useRouter } from 'next/navigation';
import { FcLike, FcLikePlaceholder, FcComments } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_KEY } from 'redux/Login/Login.constant';
import { EditUserSetLogin, initialSetLogin } from 'redux/Login/Login.reducer';
import { LoginSelector } from 'redux/Login/Login.selector';
import { setLike } from 'redux/Post/Post.reducer';
import { decrementPostLikes, incrementPostLikes, updateUserDisLikedPosts, updateUserLikedPosts } from 'services/updateUserLikedPosts.service';
import { formatDate } from 'utils/formatDate.utils';

const Post = ({ post }: { post: Post }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [likedPostsMutation] = updateUserLikedPosts();
  const [incrementLikesMutation] = incrementPostLikes();
  const [disLikedPostsMutation] = updateUserDisLikedPosts();
  const [decrementLikesMutation] = decrementPostLikes();
  const { setToastMessageLike } = usePostContext();
  const login = useSelector(LoginSelector);
  const user = login.user

  const Like = (numberToLike: number) => async () => {
    const theresSession = localStorage.getItem(LOGIN_KEY)
    if (!theresSession) {
      router.replace('/login')
      return
    }

    dispatch(setLike({ payload: post, numberToLike }))
    const variablesPost = {
      userId: user.id,
      postId: post.id
    }
    const variablesIncDecLikedPost = {
      postId: post.id
    }
    try {
      // LIKE
      if (numberToLike > 0) {
        const UserLikedPosts = await likedPostsMutation({ variables: variablesPost })
        await incrementLikesMutation({ variables: variablesIncDecLikedPost })
        if (UserLikedPosts.data.updateUsers.users.length) {
          dispatch(EditUserSetLogin(UserLikedPosts.data.updateUsers.users[0]))
        }
        return;
      }

      // DISLIKE
      if (numberToLike < 0) {
        const UserDisLikedPosts = await disLikedPostsMutation({ variables: variablesPost })
        await decrementLikesMutation({ variables: variablesIncDecLikedPost })
        if (UserDisLikedPosts.data.updateUsers.users.length) {
          dispatch(EditUserSetLogin(UserDisLikedPosts.data.updateUsers.users[0]))
        }
      }

    } catch (error: any) {
      dispatch(setLike({ payload: post, numberToLike: numberToLike > 0 ? -1 : 1 }))
      setToastMessageLike('Something happened, user is not signed up correctly')

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