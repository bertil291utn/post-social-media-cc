import { gql, useMutation } from '@apollo/client'

export const UpdateUserLikedPosts = () => {

  const UPDATE_USER_QUERY = gql`
  mutation UpdateUserLikedPost($userId: ID = "", $postId: ID = "") {
    updateUsers(
      where: {id: $userId}
      update: {likedPosts: {connect: {where: {node: {id: $postId}}}}}
    ) {
      users {
        avatarURL
        id
        name
        username
        likedPosts {
          comments
          description
          id
          isLiked
          likes
          media
          timestamp
        }
      }
    }
  }
  `

  return useMutation(UPDATE_USER_QUERY);
}

export const IncrementPostLikes = () => {

  const INCREMENT_POST_LIKES_QUERY = gql`
  mutation incrementPostLikes($postId: ID = "") {
    updatePosts(where: {id: $postId}, update: {likes_INCREMENT: 1}) {
      posts {
        description
        comments
        id
        isLiked
        likes
        media
        timestamp
      }
    }
  }
  `

  return useMutation(INCREMENT_POST_LIKES_QUERY);
}


export const UpdateUserDisLikedPosts = () => {

  const UPDATE_USER_QUERY = gql`
  mutation UpdateUserLikedPost2($userId: ID = "", $postId: ID = "") {
    updateUsers(
      where: {id: $userId}
      update: {likedPosts: {disconnect: {where: {node: {id: $postId}}}}}
    ) {
      users {
        avatarURL
        id
        name
        username
        likedPosts {
          comments
          description
          id
          isLiked
          likes
          media
          timestamp
        }
      }
    }
  }
  `

  return useMutation(UPDATE_USER_QUERY);
}

export const DecrementPostLikes = () => {

  const INCREMENT_POST_LIKES_QUERY = gql`
  mutation incrementPostLikes($postId: ID = "") {
    updatePosts(where: {id: $postId}, update: {likes_DECREMENT: 1}) {
      posts {
        description
        comments
        id
        isLiked
        likes
        media
        timestamp
      }
    }
  }
  `

  return useMutation(INCREMENT_POST_LIKES_QUERY);
}