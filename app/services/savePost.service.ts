import { gql, useMutation } from '@apollo/client';

export const savePost = () => {

  const SAVE_POST_QUERY = gql`
  mutation AddPost($description: String!, $id: ID!, $timestamp: String!, $userId: ID!, $comments: Int = 0, $isLiked: Boolean = true, $likes: Int = 1, $media: String ="") {
    createPosts(
      input: {id: $id, timestamp: $timestamp, description: $description, comments: $comments, likes: $likes, isLiked: $isLiked, user: {connect: {where: {node: {id: $userId}}}}, media: $media}
    ) {
      posts {
        comments
        description
        id
        isLiked
        likes
        media
        timestamp
        user {
          avatarURL
          id
          name
          username
        }
      }
    }
  }
  `;


  return useMutation(SAVE_POST_QUERY);

}