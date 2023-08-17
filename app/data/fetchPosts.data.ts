import { gql, useQuery } from "@apollo/client";

export const getAllPosts = (pageSize = 10) => {
  const POSTS_SEARCH_QUERY = gql`
  query PostsQuery {
    posts(options: {limit: 10, sort: {timestamp: DESC}}) {
      timestamp
      media
      likes
      isLiked
      id
      description
      comments
    }
  }
  `;

  return useQuery(POSTS_SEARCH_QUERY)

}
