import { gql, useMutation, useQuery } from "@apollo/client";
import { User } from '@interfaces/User';

export const checkEmpty = (body: User) => {
  if (!body) throw new Error('Canot be empty body');
  if (!Object.keys(body).length) throw new Error('Canot be empty body');
}

export const checkExistingUser = (body: User) => {
  checkEmpty(body);
  const CHECK_EXISTING_USER_QUERY = gql`
  query CheckExistingUser($username: String!) {
    users(where: {username: $username}) {
      id
      name
      username
      avatarURL
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
`;

  const { username } = body;

  return useQuery(CHECK_EXISTING_USER_QUERY, {
    variables: { username },
  });


}

export const saveUser = () => {

  const SAVE_USER_QUERY = gql`
    mutation AddUser($avatarURL: String = "", $id: ID = "", $name: String = "", $username: String = "") {
      createUsers(
        input: {id: $id, avatarURL: $avatarURL, username: $username, name: $name}
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
  `;


  return useMutation(SAVE_USER_QUERY);

}

