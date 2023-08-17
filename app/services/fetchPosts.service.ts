import { gql, useQuery } from "@apollo/client";

export const getAllPosts = (pageSize = 10) => {
  const POSTS_SEARCH_QUERY = gql`
  query PostsQuery {
    posts(options: {limit: ${pageSize}, sort: {timestamp: DESC}}) {
      timestamp
      media
      likes
      isLiked
      id
      description
      comments
      user {
        avatarURL
        id
        name
        username
      }
    }
  }
  `;

  return useQuery(POSTS_SEARCH_QUERY)

}
